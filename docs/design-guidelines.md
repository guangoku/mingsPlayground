# Design guidelines

How this site looks and why. If something here disagrees with the code, the
code is right and this file needs fixing.

## Two registers

The site runs on two visual languages, and keeping them apart is the point.

**The ocean stage** frames everything: the landing page, navigation, section
bands, wave seams. It is atmospheric and editorial - a journey from night sky
through the surface and the deep to a seabed sunset. Serif display type,
photographic and illustrated covers, glass panels over gradients.

**The ink register** lives *inside* pieces that earn their own form. Charcoal,
cream and vermillion, hand-drawn line work, handwriting type. The gap-year
piece is the first of these.

They meet only at cover art. A piece with no artwork yet renders an ink tile,
which previews the register rather than showing an empty frame.

**`/gap-year` is deliberately its own visual system**, and the Type, Colour,
Cards and Motion rules below do not apply to it - those describe the ocean
stage. It owns its tokens, components and layout in
`client/src/styles/gapyear.css`, `client/src/components/gapyear/` and
`client/src/pages/gapyear/`, and shares nothing with the site theme but the
language toggle and the `@assets` pipeline. Changing the site palette, card
shells or motion does not change that page, and tuning that page does not
touch the rest of the site. Treat the same independence as available to any
future piece that earns its own form.

## Type

Set in `client/src/index.css` as CSS variables, wired to Tailwind in
`tailwind.config.ts`.

- `--font-display`: Playfair Display, falling back to Songti/STSong for Chinese.
  Headings, piece titles, the italic subtitle line.
- `--font-sans`: Plus Jakarta Sans, falling back to PingFang/Hiragino/YaHei.
  Body and UI.
- `--font-mono`: Menlo.

Deliberately **not** Inter, Roboto, or a system UI stack. Those read as default
rather than chosen.

`.eyebrow` is the small-caps, wide-tracked label used above section titles and
on cards.

## Colour

Ocean tokens live at the top of `index.css`: `--ocean`, `--deep-sea`, `--teal`,
`--foam`, `--coral`. Section bands compose them into `.hero-bg`,
`.projects-bg`, `.blog-bg`, `.resume-bg`, `.contact-bg`, `.detail-bg`.

The `--seam-*` tokens matter more than they look: each holds the flat top
colour of the *next* section, and `WaveDivider` fills its wave with it, so a
section appears to lap up into the one above. Changing the order of sections
means changing which seam each one renders.

Ink-register colours are scoped to their own stylesheet, not global.

## Cards

Cards are the main selling surface, so their hierarchy is deliberate:

1. **Role chip** - who Ming is to this piece (Founder, Sole engineer). Only
   where the answer is interesting.
2. **Title** - display face, the name and nothing else. Not the format.
3. **Subtitle** - display italic, 15-16px at ~80% opacity. On compact cards
   this is the *only* description shown, so it must survive on its own.
4. **Blurb** - feature cards only.
5. **Topics and any external link.**

Grid cards stretch to equal height with footers aligned, so a chip on one card
does not make it taller than its neighbours. A cover can set `coverPosition`
when centre-cropping would cut its subject.

## Motion

`Reveal` fades and lifts content into view once. Everything respects
`prefers-reduced-motion`; the ink register disables its animation wholesale
under it. Hover lifts are small (`-translate-y-1.5`) and only on things that
are actually clickable.

## Rules that keep being worth repeating

- **Never duplicate a live product's pitch.** If a piece has a public site,
  that site says what it is, and stays current. This site says what Ming did.
  Where the product is embeddable, `LivePreview` shows it live instead of a
  screenshot that ages.
- **External links open in a new tab; internal navigation does not.** Forcing
  new tabs internally breaks the back button, which the landing depends on for
  scroll restoration.
- **An anchor never nests inside another anchor.** Cards with both an internal
  and an external link put the external one outside the internal link.
- **Numbers on the page are claims.** Attribute organisation figures to the
  organisation, and do not publish a number that cannot be checked.

## Accessibility

Contrast at least 4.5:1 for body text. Every interactive element reachable and
visible on keyboard focus. Decorative images `aria-hidden`; the live-site
embeds are inert and hidden from assistive tech, with the surrounding link
carrying the accessible name. Bilingual throughout via `getBilingualText`.
