---
title: Story JavaScript Search
date: "2018-08-21"
url: "/search-page"
description: "This is a feature demo for the Story Hugo theme."
image: "img/unsplash-photos-4zxSWESyZio.jpg"
credit: "https://unsplash.com/photos/4zxSWESyZio"
thumbnail: "img/unsplash-photos-4zxSWESyZio.tn-500x500.jpg"
categories:
- Demo
---
This article documents Story's built-in search features, which don't rely on external search engines.
Story uses the [LunrJS](https://lunrjs.com/) library to provide fast browser-based search.
This page first explains how search setup works, and then provides copy-paste
ready code samples for you to use.
<!--more-->

To get Story's search to work, you need to take a couple of steps:

1. Create a piece of content with the URL you want. Story assumes you want
	`/search/` and adds an icon for that in the top menu automatically. So you
	can simply create `content/search.md` and that should work.
2. Give this content the `search` layout, and a title.

There doesn't need to be any Markdown content; the `search` layout ignores it.

This will create the search page, but you also need to tell Hugo that it should
build the JSON index of the content in the site, which LunrJS uses. To do this,
configure the `home` output type to include JSON, which isn't included by
default. This will override the default output settings, so you'll need to
explicitly specify the defaults in addition. Here's a YAML config file section
for your `config.yaml` file to enable this:

```
outputs:
   home:
      - HTML
      - JSON
      - RSS
   page:
      - HTML
   section:
      - HTML
      - RSS
   taxonomy:
      - HTML
      - RSS
   taxonomyTerm:
      - HTML
      - RSS
```

If you use TOML, use this:

```
[outputs]
  home = ["HTML", "JSON", "RSS"]
  page = ["HTML"]
  section = ["HTML", "RSS"]
  taxonomy = ["HTML", "RSS"]
  taxonomyTerm = ["HTML", "RSS"]
```

There's more you can do. If you want to create a full-featured search page easily, just paste the following code into `content/search.md`

```
---
layout: search
url: /search/
title: Search
skip: true
classes:
- feature-nosubtitle
- feature-nohdr
---
```

This illustrates a couple of additional features in Story: skipping the content
in lists and RSS feeds; displaying it without a subtitle; displaying it without
a header image.

Read next: [Story's mathematical equation typesetting features](/math/).
