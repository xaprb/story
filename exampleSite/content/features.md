---
title: Story Feature Flags
date: "2018-08-30"
url: "/features"
description: "This is a feature demo for the Story Hugo theme."
credit: "https://unsplash.com/photos/QRkew0KwXSM"
image: "/img/unsplash-photos-QRkew0KwXSM.jpg"
thumbnail: /img/unsplash-photos-QRkew0KwXSM.tn-500x500.jpg
classes:
categories:
- Demo
---
Feature flags, which are called _classes_ in the markup, control many of Story's features.
You can enable and disable them in your site config, or in an individual post's front matter.
This article documents Story's feature flags.
<!--more-->

### Enabling Feature Flags

Feature flags can be enabled globally or locally, and the combination of these determines content behavior.
This lets you enable them for the entire site, or for an individual post.
The combined list of features that applies to a piece of content is the union of the two lists.

Here's how to enable the "example" feature for the entire site, in your site's `config.yaml` file:

```yaml
params:
   classes:
   - feature-example
```

Here's how to enable the "misc" feature in an individual piece of content, via its YAML front matter:

```yaml
---
classes:
- feature-misc
---
```

The contents of both feature lists are combined and put into the `<body>` tag's `class` attribute, verbatim:

```html
<body class="feature-example feature-misc">...</body>
```

If you're using TOML, then the syntax in `config.toml` looks like this:

```toml
[params]
  classes = ["feature-example", "feature-misc"]
```

### Disabling Features

Many features can be _negated_ by prefixing the feature name with `no`, like this:

```yaml
---
classes:
- feature-noexample
---
```

If a feature is enabled globally and negated in a single piece of content's front matter, both the positive and negative form will appear in the CSS classes.
Features in Story are inside of code that checks not only whether flags are enabled, but also whether they're overridden with a negation.
One consequence of this is that if you disable a feature globally in `config.yaml`, you can't enable it locally in a single piece of content.
You can only enable globally and disable locally, not the other way around.

There's nothing special about a feature flag, and you can put arbitrary values into the configuration arrays.
Story only recognizes and supports specific values; it ignores others.
You can take advantage of this to add any values into the arrays that you want, if they're useful for your other purposes.
For example, you can use this ability to set any desired CSS class, for selection either with your custom CSS, or to work with something off-the-shelf that happens to look for a specific class.

### List Of Features

Features have varying implementations.
Some affect how Hugo processes content, some affect CSS presentation, and some are implemented in unobtrusive JavaScript after the page finishes loading.

Here's a list of all of Story's features and how they're implemented.
The first column links to a demo of those features.
For brevity, the `feature-` prefix is omitted, but all of Story's classes have that prefix to avoid naming conflicts.

| Feature            | Explanation                                                                                 | Implementation |
|--------------------|---------------------------------------------------------------------------------------------|----------------|
| [3dbook-covers](/images)      | Styles images to resemble a hardcover book                                                | JS + CSS       |
| [figcaption](/figures)         | Transforms images into captioned figures                                                    | JS + CSS       |
| [figcaption-hidden](/figures)  | Hides figure captions, revealing them on mouseover                                          | CSS            |
| [figcaption-visible](/figures) | Formats figure captions visibly                                                             | CSS            |
| [figlink](/figures)            | Links text like "Figure/Table 3" to the corresponding figure or table                       | JS             |
| [fignum](/figures)             | Auto-numbers figures and tables                                                             | CSS            |
| [h3-cl](/typography)           | Adds CSS `clear: left` to all `<h3>` tags | CSS |
| [h3-cr](/typography)           | Adds CSS `clear: right` to all `<h3>` tags | CSS |
| [h3-cb](/typography)           | Adds CSS `clear: both` to all `<h3>` tags | CSS |
| [highlight](/typography)          | Applies syntax highlighting to code blocks, using HighlightJS                               | JS + CSS       |
| [hrdinkus](/typography)           | Styles `<hr>` elements as a dinkus (three asterisks)                                      | CSS            |
| [hrfleuron](/typography)          | Styles `<hr>` elements as a fleuron (&#10086;)                                            | CSS            |
| [hyphenate](/typography)          | Enables line-breaks and hyphenation of text via the browser                                 | CSS            |
| [justify](/typography)            | Aligns text with full-justification                                                         | CSS            |
| [math](/math)               | Enables LaTeX math typesetting using KaTeX                                                  | JS             |
| [nohdr](/search)              | Disables header images locally; when applied globally, disables preview thumbnails in lists | Hugo           |
| [subtitle](/typography)        | Enabled by default; disable to hide page subtitles |
| [tablefig](/figures)           | Styles tables similar to scientific papers                                                | JS + CSS       |
| [tablefw](/figures)            | Sets table cells in a font with fixed-width numerals                                        | CSS            |
| titlecase          | Not enabled by default; Transforms All Content Titles to Titlecase                                                  | Hugo           |
