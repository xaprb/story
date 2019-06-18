---
title: "Creating Beautiful Presentations with Story"
date: 2018-05-08T16:00:00-05:00
event: "RemarkConf 2018"
location: "Mount Remarkable, 6346+F7 Wilmington, South Australia, Australia"
site: "https://www.environment.sa.gov.au/parks/find-a-park/Browse_by_region/flinders-ranges-outback/mount-remarkable-national-park"
slides: slides/adirondack/
video: "https://www.youtube.com/watch?v=aVS4W7GZSq0"
image: "slides/adirondack/leo-serrat-533922-unsplash.jpg"
description: "Story's Remark frameworks help you create sophisticated slides with simple, clean Markdown. There are predefined layouts for most presentation needs, beautiful typography and colors, precise image control, and a simple modular way to create custom layouts."
thumbnail: slides/adirondack/thumbnail.jpg
---
This is a "talk" page in Story, which is the permanent homepage for a talk
you've given at a specific event. It's designed to showcase your appearance by
bringing together information about the event, along with your slides and extra
information like a video of your talk. In this way you can build a portfolio of
your speaking history.
<!--more-->

Talks are designed to go together with slides. I (Baron, the author of Story)
create a talk page for every speaking appearance.

You can reuse slides between talks, so multiple talks pages link to the same
slides. You also can feature the cover image from the slides as the talks page's
featured image.

I normally put the speaking proposal / abstract into the body of the talks
page's content, where this text you're reading right now is stored.

> In case you missed that, this page normally wouldn't have an article.
> It'd have a talk abstract.

Talks are included in RSS feeds and in the homepage listing of the site, but
slides aren't. This way people find out about your speaking, but they see no
duplicate content.

You can create a screenshot of the first slide (title and all) and store it
in the slides directory, and use it as the `thumbnail` of the talks page. That's
what I've done on this page; its preview image on the [talks listing
page](/talks/) is different from the banner at the top of this page.

Front-matter content for a talks page can have quite a few items. Here's a
rundown, assuming YAML front matter:

```yaml
---
title: "Creating Beautiful Presentations with Story"
date: "Date of the presentation"
event: "name of the event, such as RemarkConf 2018"
location: "<physical address of the event>"
site: "<url to the homepage of the talk, for example the session page on a conference website>"
slides: "<usually /path/to/slides/in/the/slides/section/, but could be any link>"
image: "<usually something like /slides/my-slides/first-slide-background.jpg>"
description: "A description that will appear in social media shares"
thumbnail: "<usually something like /path/to/slides/thumbnail.jpg/>"
video: "a youtube or other video link"
---
```

Because talks and slides are designed to link so tightly together, their
archetypes (Hugo template files) work in lockstep, so you can create a pair of
talks and slides content items by running the `hugo new` command once, then
editing it and running again:

```sh
$ hugo new talks/my-exciting-talk.md
$ hugo new slides/my-exciting-talk/index.md
```

If you look at the content that results from those commands, most of the
defaults are basically prepopulated for you, such as links between them.

Story supports "future talks," meaning that you can post a talk with a future
date, and it'll appear only in the right places at the right times. Story also
supports PDF slides; you can host your own PDFs embedded with PDF.js. See [future
talks](/talks/a-future-talk/) for more on these topics.

Read next: [Story's amazing Markdown-based presentation engine](/slides/adirondack/).
