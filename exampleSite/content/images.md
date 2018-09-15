---
title: Story Image Formatting Controls
date: "2018-08-21"
url: "/images"
description: "Story gives you extra control over image formatting using only Markdown syntax."
classes:
- feature-figcaption
- feature-figcaption-hidden
- feature-3dbook-covers
- feature-tablecaption
categories:
- Demo
---
This article is a demo of Story's image-related features (other than [figure captions](/figures)).
Story can apply a variety of stylistic and layout transformations to your images.
These features are enabled by unobtrusive, accessibility-friendly tricks that give you more control over images than Markdown typically provides.
Story also has out-of-the-box support for header and preview images, for a visually stunning site.
<!--more-->

### Shrinking Large Images

Story's CSS automatically shrinks images to fit into the width of the article.

![Default header image](/img/default-header-img.jpg)

The image above is much wider than the content region, but it's sized to fit.

### Control Over Image Formatting

Story uses [URL fragment
techniques](https://www.xaprb.com/blog/how-to-style-images-with-markdown/) to
give you control over image styling.  The names of the url-fragment pseudo-classes are inspired by Tachyons.
Images that use this technique don't get converted into [figures with captions](/figures).

![Small Lily](/img/lily.jpg# fr)

For example, you can float an image right with the `fr` URL fragment:

```md
![Small Lily](/img/lily.jpg# fr)
```

There's a selection of these pseudo-classes built into Story.
The names are similar to the [Tachyons](http://tachyons.io/docs/) CSS library, which Story uses.

Table 1 shows the CSS pseudo-classes that you can use in the image's `src` URL fragment:

 Class | Meaning 
-------|----------
w-100 | Set the image's width to 100% of its container's width
fr | Float the image right
fl | Float the image left
ph1 | Set 0.25rem horizontal padding to the left and right of the image
pv1 | Set 0.25rem vertical padding above and below the image
pa1 | Set 0.25rem padding on all sides of the image
ba | Give the image a 1px solid black border
3dbook | Set the book cover image to a max-width of 160px and format it specially (see below)

_CSS pseudo-classes supported in the image's URL fragment_

If floated images interfere with headings, you can use [heading clear feature flags](/features) to fix this.

### Book Cover Mockups

[![Small Lily](/img/lily.jpg# 3dbook)](https://unsplash.com/photos/vHnVtLK8rCc)

A book cover image that's inside an `<a>` link can be floated right and given
a 3d look with the `3dbook` URL fragment pseudo-class. 

```
[![Small Lily](/img/lily.jpg# 3dbook)](https://unsplash.com/photos/vHnVtLK8rCc)
```

### Header Images

Story is designed for visual impact, with a featured image for each piece of content.
Use the `image` property in the article's front-matter to set the image.
Use the `credit` to give credit to the image's creator if you wish; Story will put a small camera icon in the header if it finds that parameter.
Use the `thumbnail` property to supply a smaller version of the image in list views.

A typical piece of content will have front matter like the following:

```yaml
image: "/img/unsplash-photos-QRkew0KwXSM.jpg"
thumbnail: /img/unsplash-photos-QRkew0KwXSM.tn-500x500.jpg
credit: "https://unsplash.com/photos/QRkew0KwXSM"
```

If there's no thumbnail, Story falls back to the full-size image.
If there's no article-specific image, Story uses its default, `/img/default-header-img.jpg`, or the thumbnail equivalent, `/img/default-header-img.tn-500x500.jpg`.
This page doesn't supply its own header image, so Story is using the default.

You can supply your own default header image by simply putting an image with the same name in your *site's* `/static/img` directory.
If Hugo finds that you've added an image of your own, it will take precedence.

You can also override section-specific header images in list
(non-individual-page) views with parameters in the `_index.md` content file in
that section.  (The `title` and `subtitle` parameters in those files can also
override what's shown in list page headers.)

### Imageless Layout Options

If you don't want header images or preview thumbnails in list views, you can set
the `feature-nohdr` feature. Set locally in a piece of content, it will display
no header/banner image. Here's an example of what a page looks like with and
without the header image:

![A page in Story, with and without the header](/img/page-header-formatting.png)

Set globally for the whole site, it will make the site simply ignore all header
and preview images:

![A site in Story, with and without header and preview images](/img/site-header-formatting.png)

To illustrate this feature, the [search page](/search) has this feature set, so
it has a plain, bannerless layout.

Read next: [Story's built-in search features](/search-page/).
