# Content model: pieces and shelves

## Why

"Projects" and "blog" were two parallel systems, and the split served the
filing cabinet rather than any reader.
A recruiter wants the strongest work first; a friend arrives on one shared
link; nobody asks whether a thing is a project or a post.
The split also made weight impossible to express: the Nepal diary is smaller
than Atolla, but both were "projects", while the gap-year piece is bigger than
either and would have been a "blog post".

## The model

Everything published is a **piece**. Type is gone; weight and topics are
metadata.

```
lib/content/types.ts      Piece, Shelf, topic labels
lib/content/registry.ts   the pool - one entry per piece
lib/content/shelves.ts    landing curation - ordered slug lists
```

A piece declares:

- `weight`: `flagship` | `story` | `note` - how much room it earns
- `topics`: `building` | `for-good` | `art` | `travel` | `life` - threads it belongs to
- `status`: `live` | `in-progress` - in-progress pieces are shown but not linked
- `cover`, `href` - cover art is pulled from the existing project modules so
  images stay defined in one place

Promoting a piece (note -> story -> flagship) is a one-field edit.
Nothing moves between systems.

## Shelves

The landing page renders shelves, and a shelf is an ordered list of slugs.
Rearranging the page is a data edit, never a layout change:

- new piece -> add to the registry, append the slug to a shelf
- promote a piece -> move its slug up, or into the featured shelf
- a shelf overflows (~6) -> split it into two shelves with their own titles,
  or keep the top few and link to a full index

Each shelf is one band of the ocean gradient, so the existing wave-seam chain
is unchanged: `projects-bg` (featured + advisory) -> `blog-bg` (the rest) ->
resume -> contact.

## Pages, not modals

Piece cards navigate to real URLs.
The modal was hiding shareable links from the audience that mostly arrives and
leaves by link, and it capped every piece at the size of a scrollable box,
which fights art-directed layouts like the gap-year page.
Losing your place on the landing page is solved by scroll restoration instead:
a card click stores `landing-scroll`, and the landing restores it on mount.

## Design registers

Two registers, deliberately:

- the **ocean stage** - hero, bands, gradients, wave seams, Playfair display
  type - frames everything and stays atmospheric
- the **ink register** - charcoal / cream / vermillion, hand-drawn line work -
  lives *inside* pieces (the gap-year piece is the first)

They meet at cover art only. A piece without artwork yet renders an ink tile,
which previews the register rather than showing an empty frame.
