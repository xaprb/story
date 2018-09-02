---
author: Elvis Presley
title: Story Author Pages
url: /author-pages
date: "2018-08-29"
description: "This is a feature demo for the Story Hugo theme."
image: "/img/unsplash-photos-TzMi5Ov7QeM.jpg"
credit: "https://unsplash.com/photos/TzMi5Ov7QeM"
thumbnail: "/img/unsplash-photos-TzMi5Ov7QeM.tn-500x500.jpg"
categories:
- Demo
---
Story supports author profiles, so you can highlight your bio and link to a page
with full details.
It's possible to set this globally for the entire site, or individually for each
piece of content. Or you can set a global default and override it on individual
pieces of content.
Scroll to the bottom of any page on this site to see how author profiles are
styled.
<!--more-->

Story's author profile system is a slightly simplified (incomplete)
implementation of the ideas laid out in [Netlify's how-to
document](https://www.netlify.com/blog/2018/07/24/hugo-tips-how-to-create-author-pages/).
It allows only one author per piece of content, and doesn't require Hugo to
create the authors taxonomy.  Because it's incomplete, it's a) missing a few of the
features Netlify describes, and b) easier to set up.

### Global And Per-Content Authors

If you want to specify an author in the front matter of each post, it's
simply specified like this (YAML example):

```
---
author: "Elvis Presley"
---
```

If you want to set a global author parameter for the entire site, which will serve as
the default in case any pieces of content don't specify their own, use your
config file's `params` array:

```
params:
   author: "Baron Schwartz"
```

That's exactly what this sample site you're reading right now does: Baron is the
author by default, but Elvis is the author of _this_ content you're reading now.

### Creating Author Profiles

To create author profiles, you need to create the author hierarchy under
`content`, and a slugified directory for each author. Then, place an `_index.md`
file into each of those directories, and give it the content needed to describe
the author.

For example:

```
└── content/
    └── authors/
        ├── elvis-presley/
        │   └── _index.md
        ├── aretha-franklin/
        │   └── _index.md
        └── stevie-wonder/
            └── _index.md
```

You can put any content you want in the file, but Story has CSS to nicely format
a square image followed by a paragraph of text. This page you're viewing right
now has "Elvis Presley" as its author, and the content of
`content/authors/elvis-presley/_index.md` is:

```
---
---
![Elvis](/img/elvis.jpg)

Elvis Aaron Presley (January 8, 1935 – August 16, 1977) was an American singer
and actor. Regarded as one of the most significant cultural icons of the 20th
century, he is often referred to as the "King of Rock and Roll" or simply "the
King".
```

### Global Fallback Content

Even if you don't have an author directory and a specific author's file as
described above, you can create content that will serve as a fallback across the
whole site. If Story doesn't find a specific author's profile page, it'll look
for the default `_index.md` content for the section it's currently rendering.
The top-level default for the whole site is `content/_index.md`, which this demo
site uses to provide Baron Schwartz's author information. This information will
appear on all pages _other than_ the current page, which is authored by Elvis
Presley. This fallback information from `content/_index.md` looks like the
following:

```
[![Baron Schwartz](/img/baron-square.jpg)](https://www.xaprb.com)

Baron Schwartz is the founder and CTO of [VividCortex](https://vividcortex.com), author of
several books, and creator of various open-source software. He writes about topics
such as technology, entrepreneurship, and fitness. [More about
Baron](https://www.xaprb.com/).
```

This content is a (non-author-specific) fallback for the entire site.
You can see it on all the other pages of this site.
