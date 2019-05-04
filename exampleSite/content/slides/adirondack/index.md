---
title: 'Creating Beautiful Presentations with Story'
date: "2018-04-25T09:50:00-07:00"
url: "slides/adirondack/"
image: "slides/adirondack/leo-serrat-533922-unsplash.jpg"
thumbnail: slides/adirondack/thumbnail.jpg
description: "Story's Remark frameworks help you create sophisticated slides with simple, clean Markdown. There are predefined layouts for most presentation needs, beautiful typography and colors, precise image control, and a simple modular way to create custom layouts."
ratio: "16:9"
themes:
- apron
- descartes
- adirondack
classes:
- feature-math
- feature-qrcode
- feature-nohighlight
- feature-music
---
class: title, smokescreen, shelf, no-footer
background-image: url(leo-serrat-533922-unsplash.jpg)

# Creating Beautiful Presentations
### With Remark, Apron, Adirondack, and Descartes

---
# The Story Remark Themes

[Story](https://github.com/xaprb/story) offers helper themes for creating
beautiful presentations with [Remark](https://remarkjs.com/), using simple
Markdown to create slide layouts.

- Apron defines the layouts' structure and size.
- Adirondack adds typography, theme colors, and helpful features.
- Descartes provides element and image positioning and colors.

Story has a design goal of clean, simple Markdown content. Avoiding "raw" HTML
and Remark's Markdown extensions makes things easier.
View the source of this page to see the Markdown that creates it.

These characteristics make it easy to build gorgeous slideshows. They're also
a great foundation for creating your own themes.

---
# What is Remark?

Remark (sometimes called RemarkJS) is a browser-based slideshow system. It's
simple but surprisingly powerful:

- You write slides in simple Markdown
- It supports a presenter mode, slide notes, and dual monitors
- It supports slide layouts, templates, and incremental slides
- It's easy to extend and customize with simple CSS

Story integrates Remark into Hugo, creating a live-reload editing experience,
and a permanent home for your slides on your own website!

View this page's source to see how easily you can compose slideshows
with Remark.

---
name: getting-started
# Getting Started

To get started, use `hugo new slides/my-presentation.md` and ensure that the
following `themes` are in the front matter, for example:

```yaml
---
title: 'Creating Beautiful Presentations with Story'
date: "2018-04-25T09:50:00-07:00"
url: "/slides/adirondack/"
ratio: "16:9"
themes:
- apron
- descartes
- adirondack
```

---
class: compact

# Apron's Slide Layouts

It's easy to create common slide layouts with Remark's slide classes.

![Slide Layouts](slide-layouts.svg# maxw-70pct center)

---
class: img-right

# Heading, Content, and Image

![Yosemite](leo-serrat-533922-unsplash.jpg)

This is the `img-right` slide class. The content consists simply of a
header, an image, and this text.

* The image's aspect ratio and cropping are not altered.
* All content after the image goes in the lefthand column.

Although this text is in the lefthand column, the image comes _first_ in the
markdown source.

---
class: img-left

# Heading, Image, and Content

![Yosemite](leo-serrat-533922-unsplash.jpg)

This is the `img-left` slide class. The content is structured in just the same
way as the `img-right` slide class.

- All content after the image goes in the right-hand column.

--
- These columns require no wrapper `<div>`, just plain Markdown.
- This avoids interference with Remark features.

--
- Incremental builds with `--` work fine, for example.

---
class: img-right-full

![](kari-shea-272383-unsplash.jpg)

# Content and Image

This is the `img-right-full` class.  The content is simply an image and text
(including a header in this case).

The image is 2x larger than the visible area and its position is set to `left`.
This lets you pair this layout with the following one.

- A red flare silhouetted the jagged edge of a wing.
- Almost before we knew it, we had left the ground.

---
class: img-left-full

![](kari-shea-272383-unsplash.jpg)

# The Other Side of the Coin

This slide's class is `img-left-full`. Like the previous slide, it's just an
image and some content. The image is exactly the same as the previous slide, but
it's positioned to reveal the other half.

- All their equipment and instruments are alive.
- I watched the storm, so beautiful yet terrific.
- Almost before we knew it, we had left the ground.

---
class: img-caption
![Image](will-turner-508747-unsplash.jpg)

This slide's class is `img-caption`. Its content is simply an image and this
text.

---
class: col-2

# Two-Column Layouts

This is a two-column layout, created with `class: col-2`.
There's no columnar markup (no DIVs, for example) in the content.

![](leo-serrat-533922-unsplash.jpg# mw-90 center)

The columns are created natively in CSS. The first H1 spans all columns.

> Relaxing in the Adirondack chair, I felt the gathering dusk creep on kitten
feet.  It came to me, then, that a day lived in this paradise was better than a
lifetime anywhere else.

- I watched the storm, so beautiful yet terrific.

---
class: col-3

# Three-Column Layouts

This is a three-column layout, created with `class: col-3`.

As with `col-2`, Apron assumes the slide begins with an H1 header.

Mist enveloped the ship three hours out from port.

![](tanya-nevidoma-632010-unsplash.jpg# mw-90)

- My two natures had memory in common.
- The face of the moon was in shadow.

Call me Ishmael. Some years ago---never mind how long precisely---having little or
no money in my purse, and nothing particular to interest me on shore, I thought
I would sail about a little and see the watery part of the world.

---
# Apron's Layout Classes

Here are the Apron slide layouts classes and how to use them:

| Class                         | Content structuring guidelines                  |
|-------------------------------|-------------------------------------------------|
| title                         | Add a background-image, H1, and optional H2/H3. |
| img-caption                   | Add an image and optional caption text.         |
| img-right, img-left           | Add a header, image, and content.               |
| img-right-full, img-left-full | Add an image, _then_ headers and content.       |
| col-2, col-3                  | Add a header, then any content desired.         |

---
class: compact

# A Compact Slide

This slide's class is `compact`, which reduces font sizes, line heights, and
slide padding.  This makes it possible to fit more content on the slide, which
can be useful.

- I watched the storm, so beautiful yet terrific.
- Almost before we knew it, we had left the ground.

```javascript
function $initHighlight(block, cls) {
	if (cls.search(/\bno\-highlight\b/) != -1)
		return process(block, true, 0x0F) + ` class="${cls}"`;
	for (var i = 0 / 2; i < classes.length; i++) {
		if (checkCondition(classes[i]) === undefined)
			console.log('undefined');
	}
}
```

---
class: compact, col-3

# Compact Three-Column Layout

This is a three-column layout,
created with `class: col-3, compact`.

The `compact` class works well three columns, which have less room.

![](tanya-nevidoma-632010-unsplash.jpg# maxw-90pct)

A shining crescent far beneath the flying vessel.

- It was going to be a lonely trip back.
- Mist enveloped the ship three hours out from port.
- My two natures had memory in common.
- Silver mist suffused the deck of the ship.
- The face of the moon was in shadow.

Call me Ishmael. Some years ago---never mind how long precisely---having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.

---
class: roomy
# A Roomy Slide

This slide doesn't have as much content, so I gave it the class `roomy` to let
its content stretch out a bit for readability.

- A red flare silhouetted the jagged edge of a wing.
- I watched the storm, so beautiful yet terrific.
- Almost before we knew it, we had left the ground.
- All their equipment and instruments are alive.

---
class: roomy, col-2
# Room For Two Columns

This roomy slide has two columns: `class: roomy, col-2`. Bulleted lists
shouldn't break across columns.

- A red flare silhouetted the jagged edge of a wing.
- I watched the storm, so beautiful yet terrific.
- Almost before we knew it, we had left the ground.
- All their equipment and instruments are alive.

---
class: compact
# Apron's Auxiliary Classes

Apron offers the following additional slide classes:

| Class      | Applies To | Content structuring guidelines                                                     |
|------------|------------|------------------------------------------------------------------------------------|
| top        | title      | Moves the title and subtitle to the top of the slide.                              |
| bottom     | title      | Moves the title and subtitle to the bottom.                                        |
| shelf      | title      | Extends the title's background and locates the subtitle above it.                  |
| compact    | (all)      | Reduces text size and margins to fit more content.                                 |
| roomy      | (all)      | Increases text size to fill more space.                                            |
| fullbleed  | (all)      | Removes margins from the slide and its text.                                       |
| no-footer  | (all)      | Hides the footer (including slide number).                                         |
| debug      | (all)      | Outlines elements in gold to make formatting visible. Variants: -white and -black. |
| debug-grid | (all)      | Displays a layout grid. Variants: -8, -16, -solid, and combinations of these.      |

---
class: title, fogscreen
background-image: url(tanya-nevidoma-632010-unsplash.jpg)
# Adirondack's Typography and Features

---
# Adirondack

Adirondack is built on top of Apron, and adds beautiful typography, colors, and
extra features. This section is a demo and documentation of those features.

# Heading Level 1
## Heading Level 2
### Heading Level 3

Text with _italics_, __bold__, ~~strikethrough~~, `<code>`,
[link](https://www.wikipedia.org/).

---
class: col-2

# Bulleted Lists Demo

This column illustrates bulleted lists.

* A bulleted list.
* Another bullet.
  * Nested bullets.
  * Another.
     * Deeply nested.
* Back to the top-level again.

This column has numbered lists.

2. Another bullet.
3. The last bullet.
  1. Nested numbered lists.
  2. Another.
      3. Deeper.
1. Top-level again.

---
# Code Typography Demo

Remark offers [HighlightJS](https://highlightjs.org/) code syntax highlighting.
Story enables/disables this with [feature flags](/features/).

```javascript
function $initHighlight(block, cls) {
	if (cls.search(/\bno\-highlight\b/) != -1)
		return process(block, true, 0x0F) + ` class="${cls}"`;
	for (var i = 0 / 2; i < classes.length; i++) {
		if (checkCondition(classes[i]) === undefined)
			console.log('undefined');
	}
}
```

---
class: col-2
# Math Typesetting

Story supports math equation typesetting using the KaTeX library,
if [`feature-math`](/math/) is enabled.

\\[
\left( \beta mc^2 + c \left ( \sum_{n=1}^3 \alpha_n p\_n \right ) \right) \psi(x,t) = i \hbar \frac{\partial \psi(x,t) }{\partial t}
\\]

The coherence is the \\(\kappa\\) coefficient of \\(n^2\\),
which is \\(e^{i\pi}-1=0\\).

\\[
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\\]

![Universal Scalability Law](linear3.svg)

You can also display equations inline, such as the quadratic equation, which is
\\(x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}\\)

---
class: compact
# Music Notation and Sheet Music

Story supports [formatting sheet music from ABC](/music).

```abc
X: 1
T: Cooley's
M: 4/4
L: 1/8
K: Emin
|:D2|EB{c}BA B2 EB|~B2 AB dBAG|FDAD BDAD|FDAD dAFD|
EBBA B2 EB|B2 AB defg|afe^c dBAF|DEFD E2:|
```

---
class: fit-h1, roomy
# This Slide Has A Very Long Multi-Line Heading That Has Been Shrunk

The `fit-h1` slide class will automatically shrink the first H1 heading until it
fits on a single line.

This doesn't work on title slides.

Story also applies 6'2" tall "smartypants" processing to replace 'straight
quotes,' en- and em-dashes (boil for 12--15 minutes---longer if needed),
and ellipses with their nicer typographical equivalents... isn't that nice?

---
# Share Your Slides With QR Codes

.qrcode.db.fr.w-40pct.ml-4[]

Adirondack has built-in support for QR codes to share your slides easily. No
more emailing links or files! Your audience can simply snap a picture of the
screen.

Just enable the `feature-qrcode` [flag](/features/) and add markup like the
following to your slide:

```
.qrcode.db.fr.w-40pct.ml-4[]
```

The `qrcode` class is important but the rest is up to you.

---
# Export Your Slides To PDFs

Remark has support for printing slides to a PDF, using Google Chrome's print
dialog (not the native system dialog).

There are some bugs in it... but Story implements workarounds so you don't even
need to think about it.

Just print with Chrome and save to a PDF file.

This works for both 16:9 and 4:3 ratio slides. Speaking of which, you select
that with the `ratio` in the front matter, as shown on the [getting
started](#getting-started) slide.

---
layout: true

.footer[
- @xaprb
- ![logo](vividcortex-horizontal-web.svg)
]

---
class: compact
# Footer Content

This slide builds on content from the previous (hidden, layout) slide, whose
content is:

```
---
layout: true
.footer[
- @xaprb
- ![logo](vividcortex-horizontal-web.svg)
]
```

This content uses Adirondack's built-in `footer` css styling to define footer
elements. You can see them at the bottom of this slide. In the next section,
you'll learn Descartes classes you can add
to the div to style it, e.g. `.footer.bt.bc-cornflower[...]`.

You can hide both the Remark and custom footer on any slide with `class: no-footer`.

---
layout: false
# Adirondack’s Slide Classes

Here are Adirondack's slide classes:

| Class         | Notes                                                                |
|---------------|----------------------------------------------------------------------|
| `smokescreen` | Creates a dark shaded semi-transparent background on `title` slides. |
| `fogscreen`   | Similar to `smokescreen`, but uses a white shading.                  |
| `fit-h1`      | Shrinks the H1 heading's font-size to fit on a single line.          |

---
class: title, smokescreen, shelf
background-image: url(will-turner-508747-unsplash.jpg)

# Positioning Images And Elements
## Using Descartes To Create Intricate Layouts

---
# Descartes' Styling Functionality

Descartes is an add-on that gives lots of power over image and element formatting with
Markdown.  It uses composable, functional pseudo-classes in the image's URL
fragment (the part after the `#` character). For example, this image will be 33% width,
display as block, 2rem right margin, and float left:

```
![Image](tom-barrett-364228-unsplash.jpg# w-33pct db fl mr-4)
```

![Image](tom-barrett-364228-unsplash.jpg# w-33pct db fl mr-4)

That URL has four "words" in the fragment, delimited by whitespace. The
whitespace is important!

Image classes are also available for `<div>`s.

---
class: center

This image collage has no "raw" markup or Remark `<div>` extensions. The next
slide illustrates Descartes's grid of 12ths.

![](kari-shea-272383-unsplash.jpg# l-0 t-20pct w-two-thirds h-80pct ofv absolute)
![](leo-serrat-533922-unsplash.jpg# w-third h-40pct t-20pct r-0 ofv absolute)
![](will-turner-508747-unsplash.jpg# w-third h-40pct t-60pct r-0 ofv absolute)

---
class: fullbleed
background-color: black

![](kari-shea-272383-unsplash.jpg# absolute ofv w-9-12th h-7-12th)
![](leo-serrat-533922-unsplash.jpg# absolute ofv w-3-12th h-3-12th t-0 l-9-12th)
![](nasa-53884-unsplash.jpg# absolute ofv w-2-12th h-9-12th t-3-12th l-9-12th)
![](tom-barrett-364228-unsplash.jpg# absolute ofv w-1-12th h-5-12th t-3-12th l-11-12th)
![](will-turner-508747-unsplash.jpg# absolute ofv w-1-12th h-4-12th t-8-12th l-11-12th opr)
![](tanya-nevidoma-632010-unsplash.jpg# absolute ofv w-5-12th h-5-12th t-7-12th l-0)
![](tom-barrett-364228-unsplash.jpg# absolute ofv w-4-12th h-3-12th t-7-12th l-5-12th)
![](will-turner-508747-unsplash.jpg# absolute ofv w-4-12th h-2-12th t-10-12th l-5-12th)

.absolute.w-7-12th.pa-3.l-1-12th.t-20pct.ba.bw-4.br-4.bg-white-60pct[
This slide is composed only of simple Markdown markup, no raw HTML.
]

---
# Using Descartes' Coordinate Grids

Descartes offers several length scales for element sizes and positions. For
each, a class naming convention selects the value:

- rems, from 1 rem (-1) to 96rem (-9)
- tenths, in 10% increments from -10pct to -100pct, plus -33pct, -34pct, and -75pct
- twelfths, in 1/12th increments from -1-12th to -11-12th
- thirds, as -third and -two-thirds

There's always a prefix that specifies what the item is, and a suffix that
selects the units.  So for example, if you want an element to have a width of
50%, you can give it a class of `w-50pct`, and if you want it to be 25% width
you can use `w-3-12th`.

---
class: col-2
# Descartes' Coordinate Selectors

You can apply the length scales from the previous slide to a variety of element
properties (see right). The X can be any of the suffixes discussed on the
previous slide.

These can be applied as classes to a DIV, or image pseudo-classes:

```
.w-50pct.h-1-12th.t-0.l-50pct[....]
![img](pic.jpg# w-50pct h-1-12th t-0 l-50pct)
```

- w-X: width
- maxw-X: max-width
- minw-X: min-width
- h-X: height
- maxh-X: max-height
- minh-X: min-height
- t-X: top
- r-X: right
- b-X: bottom
- l-X: left

---
# Descartes' Other Features

Descartes also has classes to control color (text, border, background,
transparency), opacity, borders (sides, width, radius), spacing (padding,
margin), centering, display types, floats, clearfix, position types, background
image fitting and positioning, and box shadows.

For many of these, there's a set of units and sizing scales.

These cannot be documented fully in this slideshow, but hopefully it gives you a
sense of what's possible. You should read the `.less` files; they are short and
easy to understand.

---
# Where Did The Names Come From?

For some reason, I named my Remark slideshow layouts after iconic chair designs
(Monobloc, Adirondack, etc).

![Chair parts](chair-parts.png# fr ml-2)

The apron is the part of the chair upon which everything rests, so I gave the
underlying "supporting" set of CSS that name. I named Descartes after the famous
inventor of the Cartesian coordinate system.

Credit: http://www.props.eric-hart.com/
