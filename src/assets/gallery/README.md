# Shop gallery photos

The homepage gallery lists every image in this folder. No code change is required to add a photo.

## How to add a photo

1. Take or export a real photo of the shop, godown, stock or loading.
2. Save it here as a `.jpg`, `.jpeg`, `.png` or `.webp` file.
3. Name it so it sorts in the order you want, for example `04-godown.webp`.
4. Rebuild and deploy the site.

Filenames already in use:

| File | What it should show |
| --- | --- |
| `01-shop-front.webp` | Shop front on Gurh Road (already added) |
| `02-shop-interior.webp` | Interior shelves and counter (already added) |
| `03-shop-night.webp` | Shop front at night (already added) |
| `04-godown.webp` | Godown / warehouse stock — **please add** |
| `05-seed-stock.webp` | Seed bags — **please add** |
| `06-fertiliser-stock.webp` | Fertiliser bags — **please add** |
| `07-loading.webp` | Loading a truck or trolley — **please add** |

Any other name works too. The site sorts files by name and uses the filename as the caption until a matching line is added under `gallery.alts` in `src/locales/hi.json` and `src/locales/en.json`.

Do not put stock or downloaded photos in this folder. If a picture is not of this shop, leave it out.
