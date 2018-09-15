---
title: "Story's MailChimp Integration Features"
date: "2018-08-18"
url: "/mailchimp-features"
description: "Story makes it easy to grow a MailChimp subscriber list and send beautifully formatted emails to them automatically."
image: "img/jessy-hoffmann-720198-unsplash.jpg"
credit: "https://unsplash.com/photos/EsNkWAv6Vmw/"
thumbnail: "img/jessy-hoffmann-720198-unsplash.tn-500x500.jpg"
categories:
- Demo
---
If you're a blogger, you might use MailChimp to build a subscriber list, and
Story makes that easy. MailChimp also has the ability to automatically send your
new content to the list from an RSS feed, and guess what---Story helps you
create an RSS feed customized just for that if you like, too.
<!--more-->

First, MailChimp subscriber forms. If you want to add a subscription form at the
bottom of each page, just add your MailChimp URL as a parameter in your
configuration file. Here's a YAML example for `config.yaml`:

```yaml
params:
- mailchimp: "your URL here"
```

And here's an example for `config.toml`:

```toml
[params]
  mailchimp = "your URL here"
```

You can copy the URL from the address bar of your MailChimp subscriber form. It
becomes the `action` of the form, which will appear at the bottom of each page
near your author biography.

Next, an RSS feed. Story has an RSS layout customized to create summaries of
your content's title, description, featured image, and summary content. The
summary content is either delimited explicitly by the `<!--more-->` comment in
your Markdown source, or generated automatically by Hugo. (Read more
[here](https://gohugo.io/content-management/summaries/).)

To enable this, you need to create a special `.md` file that won't appear as
regular content, but will render an extra RSS feed file. Its content is ignored,
and only its front matter is important. For example, you could create it as
`content/mailchimp.md` with the following contents, using YAML front matter:

```yaml
---
skip: true
layout: mailchimp
outputs:
- rss
---
```

Now Hugo will build an extra feed at `/mailchimp/index.xml` and you can use it
to create [RSS campaigns in
MailChimp](https://mailchimp.com/help/share-your-blog-posts-with-mailchimp/). Of
course, you can also use your normal RSS feed, but Story's default is to put
full content into that, so it might be more than you want.

Read next: [Story's 'talks' feature for presentations](/talks/adirondack/).
