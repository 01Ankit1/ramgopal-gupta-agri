import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { MotionConfig } from 'framer-motion';
import App from './App.jsx';
import i18n, { i18nReady } from './i18n.js';

const MARKER = 'prerender-body';

/**
 * Render one public route to HTML.
 * Head tags are the title/meta/link elements React 19 hoists in front of the
 * tree. The body is the app markup, with entrance-animation styles removed so
 * the static page is visible without JavaScript.
 */
export async function render(url) {
  await i18nReady;
  if (i18n.language !== 'hi') {
    await i18n.changeLanguage('hi');
  }

  const markup = renderToStaticMarkup(
    <StaticRouter location={url}>
      <MotionConfig isStatic>
        <div id={MARKER}>
          <App />
        </div>
      </MotionConfig>
    </StaticRouter>,
  );

  const open = `<div id="${MARKER}">`;
  const start = markup.indexOf(open);
  if (start < 0) {
    throw new Error(`Prerender for ${url} did not include the body marker`);
  }

  const head = markup.slice(0, start);
  const rest = markup.slice(start + open.length);
  if (!rest.endsWith('</div>')) {
    throw new Error(`Prerender for ${url} had an unexpected ending`);
  }

  const body = revealInitialMotion(rest.slice(0, -'</div>'.length));
  if (!head.includes('<title')) {
    throw new Error(`Prerender for ${url} did not render a title`);
  }

  return { head, body };
}

function revealInitialMotion(html) {
  return html.replace(/ style="([^"]*)"/g, (full, style) => {
    const decls = style.split(';').map((part) => part.trim()).filter(Boolean);
    const hidden = decls.some((decl) => /^opacity:\s*0$/.test(decl));
    if (!hidden) return full;
    const kept = decls.filter((decl) => !/^opacity:\s*0$/.test(decl) && !/^transform:/.test(decl));
    return kept.length ? ` style="${kept.join(';')}"` : '';
  });
}
