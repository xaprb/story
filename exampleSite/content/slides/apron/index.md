---
title: 'The Apron RemarkJS Theme'
date: "2018-04-25T09:50:00-07:00"
url: "/slides/apron/"
image: "/slides/apron/tanya-nevidoma-632010-unsplash.jpg"
description: "The Apron RemarkJS theme lets you create sophisticated presentation layouts with simple, clean Markdown code. There are a variety of predefined layouts to suit most presentation needs, and a simple modular way to create custom layouts."
ratio: "16:9"
less: true
themes:
- apron
---
class: title, bottom
background-image: url(tanya-nevidoma-632010-unsplash.jpg)

# The Apron RemarkJS Theme
## Baron Schwartz &bullet; 2018

---
# The Apron Theme for RemarkJS

Apron is a CSS framework for RemarkJS. It defines slide classes that:

- Set the position of content.
- Format and position images.
- Create common slide layouts without special markup.
- Establish a type scale for font sizes, line heights, etc.

Apron's goals:

- It does _not_ deal with typefaces or colors. (Ignore the browser-default font
  sizes in this presentation; they're not the point.)
- Apron's goal: _zero_ non-Markdown markup other than slide classes.

This _entire slideshow_ uses only plain-vanilla RemarkJS Markdown. This
illustrates the power of Apron's CSS!  There's no special markup such as
raw HTML, or Markdown's extensions such as
`.foo[...]` to create elements such as `<div>` or `<span>`.  (RemarkJS does
support this markup, but it creates limitations, so Apron is
designed not to need them.)

Apron is minimal so that it can be composed with other themes that control
colors, fonts, and the like.

Apron also has the explicit design goal of minimal overriding or interfering
with RemarkJS's own CSS rules.

---
class: img-caption
![Image](will-turner-508747-unsplash.jpg)

### The img-caption class creates a full-bleed image and a caption. You can use any markup in this space. (This is an `<H3>`).
---
# Apron's Image-Styling Functionality

Apron provides composable, functional CSS pseudo-classes for control over images
without sacrificing Markdown formatting.  It uses the image's URL fragment,
which is the part after the hash character.

Apron's image CSS classes are patterned after [Tachyons](http://tachyons.io/).
For example, the following pseudo-classes will set the image's width to 33%,
display to `block`, and float to `left`. 

```
![Image](tom-barrett-364228-unsplash.jpg# w-33 db fl)
```

That image URL has three "words" in the fragment, delimited by whitespace. The
whitespace is important!  If the image's markup is repeated three times, three
copies of it will float across the slide:

![Image](tom-barrett-364228-unsplash.jpg# w-33 db fl)
![Image](tom-barrett-364228-unsplash.jpg# w-33 db fl)
![Image](tom-barrett-364228-unsplash.jpg# w-33 db fl)

---
# Apron's Image Pseudo-Styles

Apron provides the following. X stands for a variable/placeholder:

- b{a,t,r,b,l,n}: border styles, such as `ba` to set borders on all sides
- brX: border radiuses, from 0 to 4, plus -100 for 100%
- bwX: border widths, from 0 to 5
- shadow-X: box shadows, from 1 to 5
- dX: display modes (dn=none, di=inline, db=block, dib=inline-block)
- fX: floats: l, r, n
- cf: clearfix, to make a containing element wrap around a float
- mw-X: max-widths, from 10 to 100 in percents, plus -third and -two-thirds
- mwX: max-widths, from 1 to 9
- wX: widths, from 1 to 5, and -10 to -100 in percents, plus -third and
  -two-thirds
- t-X, r-X, b-X, l-X: absolute positions top/right/bottom/left from 0-100 in
  percents, plus -third and -two-thirds
- mh-X, mhX, hX: same as widths, but for heights
- static, relative, absolute, fixed: position classes
- p{a,l,r,b,t,v,h}X: paddings on various combinations of sides, from 0 to 7
- m{a,l,r,b,t,v,h}X: margins on various combinations of sides, from 0 to 7
- of{c,v}: object-fit contain/cover
- op{l,c,r}{t,c,b}: object-position left/center/right, plus combinations with
  top, center, bottom
- w-X-12, h-X-12, t-X-12, r-X-12, b-X-12, l-X-12: width, height, top, right,
  bottom, and left in units of 1/12th to 11/12th.

---
# More Image Pseudo-Classes

- center: horizontal centering

---
# Simple Two-Column Layout

![](nasa-53884-unsplash.jpg# db fr w-50 ml4)

This slide illustrates a simple way to create a two-column layout with an image
in the right-hand side.

(I'll show you another way later, but this illustrates the utility of the CSS
pseudo-image-classes in the URL fragments).

Simply shrink the image to 50% width, float it right, set its display to block,
and add margin to the lefthand side to prevent text from touching it.

The image markup is:

```
![](nasa-53884-unsplash.jpg# db fr w-50 ml4)
```

---
# Simple Two-Column Layout, Left

![](nasa-53884-unsplash.jpg# db fl w-50 mr4)

This variation illustrates placing the image on the lefthand column, and why
this doesn't work great.

The image markup is:

```
![](nasa-53884-unsplash.jpg# db fl w-50 mr4)
```

There are a few problems with using floats for this.

- Bulleted lists don't indent correctly.
- Their layout doesn't work well next to floated elements.

Also, if the text continues,

as this does, it will go below the image and wrap

back to the left-hand edge again. So the "column" ended too soon, revealing that it's not a real column.

---
class: two-col-img-left

# Layout Class two-col-img-left

![](nasa-53884-unsplash.jpg)

This convenience layout illustrates a better way to do it. By adding the class
`two-col-img-left`, the first paragraph in the content will become a lefthand
column.

An image in Markdown is wrapped in a paragraph, so you can simply begin a
columnar layout with an image and it will simply work.

- A red flare silhouetted the jagged edge of a wing.
- I watched the storm, so beautiful yet terrific.
- Almost before we knew it, we had left the ground.
- All their equipment and instruments are alive.

A red flare silhouetted the jagged edge of a wing.

I watched the storm, so beautiful yet terrific.

Almost before we knew it, we had left the ground.
All their equipment and instruments are alive.

---
class: two-col-img-right

# Layout Class two-col-img-right

![](nasa-53884-unsplash.jpg)

The `two-col-img-right` layout uses the first paragraph 
as the right column.

--

The reason for these two-column image convenience slide classes is to avoid any
wrapper div's or similar, and place the column's content _last_ in the Markdown
source.

--

This allows RemarkJS to do incremental slide builds, with the `--` separator
between stages of slides.

- A red flare silhouetted the jagged edge of a wing.
- I watched the storm, so beautiful yet terrific.
- Almost before we knew it, we had left the ground.
- All their equipment and instruments are alive.

A red flare silhouetted the jagged edge of a wing.

I watched the storm, so beautiful yet terrific.

---
class: img-fullbleed-right

![](kari-shea-272383-unsplash.jpg)

# Layout Class img-fullbleed-right

This slide illustrates the img-fullbleed-right convenience class.

The first image in the slide is set to 40% of the width of the slide and set
full-bleed on the right-hand edge of the slide.

- I gazed into the gathering storm.
- All their instruments were alive.

The image's position within the clipped container is set to `left`. This allows
you to create images that are 2x as wide as the area that's displayed, and pair
this layout with the next one.

---
class: img-fullbleed-left

![](kari-shea-272383-unsplash.jpg)

# Layout Class img-fullbleed-left

This slide illustrates the img-fullbleed-left convenience class.

- I gazed into the gathering storm.
- All their instruments were alive.

The image is the same as on the previous slide, but the positioning within the
container is the opposite, so the other half of the image is shown.

The next slide illustrates an image collage with three images, full-bleed.

The one after that is more sophisticated and demonstrates Apron's system of
12ths in units. All of this works in both 16:9 and 4:3 aspect ratios.

---
class: fullbleed
background-color: black

![](kari-shea-272383-unsplash.jpg# w-two-thirds h-100 ofv absolute)
![](leo-serrat-533922-unsplash.jpg# w-third h-50 t-0 r-0 ofv absolute)
![](will-turner-508747-unsplash.jpg# w-third h-50 b-0 r-0 ofv absolute)

---
class: fullbleed
background-color: black

![](kari-shea-272383-unsplash.jpg# absolute ofv w-9-12 h-7-12)
![](leo-serrat-533922-unsplash.jpg# absolute ofv w-3-12 h-3-12 t-0 l-9-12)
![](nasa-53884-unsplash.jpg# absolute ofv w-2-12 h-9-12 t-3-12 l-9-12)
![](tom-barrett-364228-unsplash.jpg# absolute ofv w-1-12 h-5-12 t-3-12 l-11-12)
![](will-turner-508747-unsplash.jpg# absolute ofv w-1-12 h-4-12 t-8-12 l-11-12 opr)
![](tanya-nevidoma-632010-unsplash.jpg# absolute ofv w-5-12 h-5-12 t-7-12 l-0)
![](tom-barrett-364228-unsplash.jpg# absolute ofv w-4-12 h-3-12 t-7-12 l-5-12)
![](will-turner-508747-unsplash.jpg# absolute ofv w-4-12 h-2-12 t-10-12 l-5-12)

---
class: col, col-2

# Apron's Columnar Layouts

Apron supports multi-column layouts (2 and 3). This is a two-column layout.
The first element (typically heading) spans all columns.

Create a columnar layout with `class: col, col-X`.

Images are supported too.

![](kari-shea-272383-unsplash.jpg# mw-60)![](tanya-nevidoma-632010-unsplash.jpg# mw-40)

- Lists are not supposed to break across columns.
- Lists are not supposed to break across columns.
- Lists are not supposed to break across columns.
- Lists are not supposed to break across columns.
- Lists are not supposed to break across columns.
- Lists are not supposed to break across columns.
- Lists are not supposed to break across columns.
- Lists are not supposed to break across columns.
- Lists are not supposed to break across columns.
- Lists are not supposed to break across columns.

This slide has paragraphs, images, and lists.

1. Here's a numbered list.
   - Nested bullet 1
   - Nested bullet 2
1. Here's a numbered list.

It's followed by a paragraph.

---
class: col, col-3

# Apron's 3-Column Layout

This is a three-column layout,
created with `class: col, col-3`.

Images are supported too.

![](kari-shea-272383-unsplash.jpg# mw-60)![](tanya-nevidoma-632010-unsplash.jpg# mw-40)

- Lists are not supposed to break across columns.
- Lists are not supposed to break across columns.
- Lists are not supposed to break across columns.
- Lists are not supposed to break across columns.
- Lists are not supposed to break across columns.
- Lists are not supposed to break across columns.
- Lists are not supposed to break across columns.
- Lists are not supposed to break across columns.
- Lists are not supposed to break across columns.
- Lists are not supposed to break across columns.

This slide has paragraphs, images, and lists.

1. Here's a numbered list.
1. Here's a numbered list.

It's followed by a paragraph.

---
# Apron's Slide Classes

Apron defines the following slide classes:

- title: centers text horizontally, and sets background images to cover
	- middle: centers title and subtitle vertically (approx.)
	- bottom: places title and subtitle at the bottom of the slide
- img-caption: assumes the content is an image and a caption; makes the image
  take up the top of the slide (fullbleed) and puts the rest below, centered
- two-col-img-right: assumes you begin the content with an image, which takes up
  the right-hand 50% of the slide
- two-col-img-left: the same, but left-hand 50%
- img-fullbleed-right and img-fullbleed-left: ditto, but the image is
  full-height and full-bleed to the edge of the slide
- col: use together with col-2 and col-3
- col-2 and col-3: all but the first element in the slide is laid out in the
  specified number of columns

Additionally, there are the following utility classes:

- fullbleed: removes margins and paddings from the slide container and from
  `<p>` elements.
- debug{,-white,-black}: outlines elements for debugging
- debug-grid{,-16,-8-solid,-16-solid}: creates a grid background for layout

---
# Why Is It Named Apron?

For some reason, I named these slideshow layouts after iconic types of chairs
(monobloc, adirondack, etc).

The apron is the part of the chair upon which everything rests, so this
"supporting" set of CSS got the name "apron."

![Chair parts](chair-parts.png)

Credit: http://www.props.eric-hart.com/
