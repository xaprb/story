---
title: 'The Apron RemarkJS Theme'
date: "2018-04-25T09:50:00-07:00"
url: "/slides/apron/"
image: "/slides/apron/leo-serrat-533922-unsplash.jpg"
description: "The Apron RemarkJS theme lets you create sophisticated presentations with simple, clean Markdown code. There are a variety of layouts to suit most presentation needs."
ratio: "16:9"
theme: "apron"
---
class: title
background-image: url(leo-serrat-533922-unsplash.jpg)

# The Apron RemarkJS Theme
## Baron Schwartz &bullet; SomeOpenSourceConf 2018

---
# The Apron Theme for RemarkJS

Apron is a _layout_ theme for RemarkJS.

- It defines slide classes that set the position of content.
- Some sizing is also set.
- It does _not_ deal with typefaces or colors.
- Its goal: _minimal_ special markup other than slide classes.

This slide has only plain-vanilla Markdown content. It has no slide classes or
special markup to create anything such as `<div>` or similar.

Apron is minimal so that it can be composed with other themes that control
colors, fonts, and the like.

Apron also has the explicit design goal of minimal overriding or interfering
with RemarkJS's own CSS rules.

---
class: img-caption
![Image](will-turner-508747-unsplash.jpg)
# Full-Bleed Image And H1 Caption

---
# Apron's Image-Styling Functionality

Apron provides composable, functional CSS pseudo-classes for control over images
without sacrificing Markdown formatting.
It uses the image's URL fragment, which is the part after the hash character,
e.g.

```
![Image](tom-barrett-364228-unsplash.jpg# url fragment)
```

That image URL has two "words" in the fragment, delimited by whitespace. The
whitespace is important!

Apron's image CSS classes are patterned after [Tachyons](http://tachyons.io/).
For example, the following pseudo-classes will set the image's width to 33%,
display to `block`, and float to `left`. 

```
![Image](tom-barrett-364228-unsplash.jpg# w-33 db fl)
```

If the image's markup is repeated three
times, three copies of it will stack up across the slide:

![Image](tom-barrett-364228-unsplash.jpg# w-33 db fl)
![Image](tom-barrett-364228-unsplash.jpg# w-33 db fl)
![Image](tom-barrett-364228-unsplash.jpg# w-33 db fl)

---
# Apron's Image CSS Pseudo-Styles

There are too many CSS pseudo-styles to list comprehensively, but here's a guide
to them, generally. X stands for a variable/placeholder:

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

---
# Two-Column Layout

![](nasa-53884-unsplash.jpg# db fr w-50 ml4)

This slide illustrates one way to create a two-column layout with an image in
the right-hand side.

Simply shrink the image to 50% width, float it right, set its display to block,
and add margin to the lefthand side to prevent text from touching it.

The image markup is:

```
![](nasa-53884-unsplash.jpg# db fr w-50 ml4)
```

---
# Two-Column Layout Variation

![](nasa-53884-unsplash.jpg# db fl w-50 mr4)

This variation illustrates placing the image on the lefthand column.

The image markup is:

```
![](nasa-53884-unsplash.jpg# db fl w-50 mr4)
```

There's a small problem with doing this with floats.

If the text continues,

as this does,

it will go below the image

and wrap back to the left-hand

edge again. So the "column" ended too soon.

---
class: two-col-img-left

# Layout Class two-col-img-left

![](nasa-53884-unsplash.jpg)

In this convenience layout, the first paragraph in the content
(which can be an image, as in this case)
will form the left column.

The paragraph is floated left and sized to 50%, and should
prevent wrapping around underneath it.

Test.

Test.

Test.

Test.

Test.

Test.

Test.

Test.

---
class: two-col-img-right

# Layout Class two-col-img-right

![](nasa-53884-unsplash.jpg)

In this convenience layout, the first paragraph 
will form the right column.

--

The reason for these two-column image convenience slide classes is to avoid any
wrapper div's or similar.

--

This allows RemarkJS to do incremental slide builds, with the `--` separator
between stages of slides.

---
class: img-fullbleed-right

![](kari-shea-272383-unsplash.jpg)

# Layout Class img-fullbleed-right

This slide illustrates the img-fullbleed-right convenience class.

The first image in the slide is set to 40% of the width of the slide and set
full-bleed on the right-hand edge of the slide.

The image's position within the clipped container is set to `left`. This allows
you to create images that are 2x as wide as the area that's displayed, and pair
this layout with the next one.

---
class: img-fullbleed-left

![](kari-shea-272383-unsplash.jpg)

# Layout Class img-fullbleed-left

This slide illustrates the img-fullbleed-left convenience class.

The image is the same as on the previous slide, but the positioning within the
container is the opposite, so the other half of the image is shown.

The next slide illustrates an image collage with three images, full-bleed.

---
class: fullbleed
![](kari-shea-272383-unsplash.jpg# w-two-thirds h-100 ofv absolute)
![](leo-serrat-533922-unsplash.jpg# w-third h-50 t-0 r-0 ofv absolute)
![](will-turner-508747-unsplash.jpg# w-third h-50 b-0 r-0 ofv absolute)

---
# Apron's Slide Classes

Apron defines the following slide classes:

- debug{,-white,-black}: outlines elements for debugging
- debug-grid{,-16,-8-solid,-16-solid}: creates a grid background for layout
