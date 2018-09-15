---
title: Story Typography
date: "2018-08-19"
url: "/typography"
description: "Story uses gorgeous typefaces and is optimized for a pleasant reading experience on any device."
credit: "https://unsplash.com/photos/h-M3O25tyvI"
image: "img/unsplash-photos-h-M3O25tyvI.jpg"
thumbnail: img/unsplash-photos-h-M3O25tyvI.tn-500x500.jpg
classes:
- feature-hyphenate
- feature-justify
- feature-highlight
categories:
- Demo
---
This article is a demo of Story's beautiful typography.

Story is designed to showcase long-form content such as essays and technical
blog posts.  It is built for readability and grace in both screen and print
media at all sizes.  
<!--more-->

Try opening your print dialog and saving this page as a
PDF. Now try viewing this page on a cellphone.

Story supports text justification and hyphenation. Click here to toggle <a
id="hyph">hyphenation</a> and <a id="just">justification</a>. These features can
be enabled or disabled with the `feature-[no]hyphenate` and
`feature-[no]justify` feature flags.

### Moby-Dick; Or, The Whale: Heading Level 3

Story reserves H1 and H2 for its own use, and assumes you'll use H3 in your content.
To hide subtitles, use the `feature-nosubtitle` feature.

Floated images occasionally interfere with content, usually headings.
Story provides [feature flags](/features) to add clears (left, right, and both) to `<h3>` elements.

Call me Ishmael. Some years ago---never mind how long precisely---having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off---then, I account it high time to get to sea as soon as I can.

#### Fleuron and Dinkus: Heading Level 4

An `<hr>` tag can be rendered as a fleuron, with the `feature-hrfleuron` flag. It
can also be a dinkus if you like; use the `feature-hrdinkus` flag. Both are
negatable and implemented in CSS. Here's a demo. You can toggle these features
with <a id="fleuron">feature-hrfleuron</a> and <a id="dinkus">feature-hrdinkus</a>.

----

Call me Ishmael. Some years ago---never mind how long precisely---having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation.

Story has support for syntax highlighting inside of code blocks. It uses
[highlight.js](https://highlightjs.org/) for this. This feature is controlled with the `feature-[no]highlight` flag.

```javascript
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
             ` class="${cls}"`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }
}

export  $initHighlight;
```

Here is text with _emphasis_ and **boldness**; ~~strikethrough~~.^[A footnote]

> This is a blockquote. I thought I would sail about the unimaginative incomprehensibilities of the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. (This quote is a demo of justification and hyphenation.)
>
>> Blockquotes can nest.

Here is an unordered list:

- Item one
- Item two
- Item three is longer. I thought I would sail about a little and see the unimaginative incomprehensibilities of the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. (This is a justification and hyphenation demo.)

And an ordered list:

1. Item one
1. Item two
1. Item three is longer. I thought I would sail about a little and see the unimaginative incomprehensibilities of the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. (This is a justification and hyphenation demo.)

<script type="text/javascript">
$( "#hyph" ).click(function() {
   $("body").toggleClass("feature-hyphenate");
});
$( "#just" ).click(function() {
   $("body").toggleClass("feature-justify");
});
$( "#fleuron" ).click(function() {
   $("body").toggleClass("feature-hrfleuron");
});
$( "#dinkus" ).click(function() {
   $("body").toggleClass("feature-hrdinkus");
});
</script>

Read next: [Story's MailChimp subscribe forms and RSS feeds](/mailchimp-features).
