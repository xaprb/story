---
title: Story Figures, Captions, and Tables
date: "2018-08-22"
url: "/figures"
description: "This is a feature demo for the Story Hugo theme."
credit: "https://unsplash.com/photos/vHnVtLK8rCc"
image: "/img/unsplash-photos-vHnVtLK8rCc.jpg"
thumbnail: /img/unsplash-photos-vHnVtLK8rCc.tn-500x500.jpg
classes:
- feature-figcaption
- feature-figcaption-hidden
- feature-figlink
- feature-fignum
- feature-tablecaption
categories:
- Demo
---
This article is a demo of Story's features to create figures and tables with captions.
<!--more-->

### Image Captions and Figures

Story can automatically convert your images into figures with captions. 
This is controlled by the `feature-figcaption` and `feature-nofigcaption`
flags. There are several ways this can be done. In order of
precedence, here is what Story tries to do:

An image with an `<em>` _immediately following it in the same paragraph_ treats
the content of the `<em>` as the image caption. To enable this, the image and
the text must not have a blank line between them. Example:

```md
![Water Lily](/img/unsplash-photos-vHnVtLK8rCc.jpg)
_Water lily photo by Zoltan Tasi on Unsplash_
```

This markup results in a `<p><img...><em...></p>` markup that Story converts into a captioned figure.
Hover your mouse over the picture to see the caption:

![Water Lily](/img/unsplash-photos-vHnVtLK8rCc.jpg)
_Water lily photo by Zoltan Tasi on Unsplash_

If there's no `<em>` to use, Story uses the image's `title` attribute as a fallback:

```md
![Water Lily](/img/unsplash-photos-vHnVtLK8rCc.jpg "A water lily")
```

![Water Lily](/img/unsplash-photos-vHnVtLK8rCc.jpg "A water lily")

Finally, Story falls back to the `alt` attribute:

```md
![Water Lily](/img/unsplash-photos-vHnVtLK8rCc.jpg)
```

![Water Lily](/img/unsplash-photos-vHnVtLK8rCc.jpg)

### Table Styling

Story has multiple built-in table styles that you can apply with feature flags.
The default is similar to GitHub's table styling:

| Command | Description |
| --- | --- |
| `git status` | List all *new or modified* files |
| `git diff` | Show file differences that **haven't been** staged |
| `git commit` | Record changes to the repository |
| `git branch` | List, create, or delete branches |

There is _also_ a style designed for tables that are part of an
article with figures, resembling scientific papers or other more formal use
cases. This is enabled with `feature-tablefig`. Click <a
id="tablefig">here</a> to toggle.

| Item                                      | Estimated | Positive and Significant | Negative and Significant |
|-------------------------------------------|:---------:|:------------------------:|:------------------------:|
| Demographic Variables for Head            |           |                          |                          |
| Male                                      |     85    |            74            |            11            |
| Age                                       |     85    |            85            |             0            |
| Age Squared                               |     85    |             0            |            85            |
| Head's Education                          |           |                          |                          |
| Completed primary or incomplete secondary |     76    |            76            |             0            |
| Completed secondary or higher             |     60    |            60            |             0            |
| Completed secondary                       |     19    |            19            |             0            |
| Higher                                    |     20    |            20            |             0            |
| Unknown                                   |     12    |            12            |             0            |

Tables with columns of right-aligned numbers are more readable with fixed-width numerals; click to toggle <a id="tablefw">`feature-tablefw`</a>. Observe the table below and see how its columns are easier to read with fixed-width numerals. This is noticeable with Github-style table formatting, but not with academic-style.

Date          | Inclination, deg. | Longitude, Asc. Node, deg. | Mean Distance, au |  Eccentricity | Mean  Longitude, deg. |
--------------|------------------:|---------------------------:|------------------:|--------------:|----------------------:|
Jan.&nbsp;28  |            7.0052 |                     48.486 |          0.387097 |      0.205644 |              355.3943 |
Mar.&nbsp;9   |            7.0052 |                     48.487 |          0.387098 |      0.205646 |              159.0899 |
Apr.&nbsp;18  |            7.0052 |                     48.489 |          0.387097 |      0.205649 |              322.7854 |
May&nbsp;28   |            7.0052 |                     48.490 |          0.387097 |      0.205650 |              126.4812 |
July&nbsp;7   |            7.0052 |                     48.492 |          0.387098 |      0.205645 |              290.1771 |
Aug.&nbsp;16  |            7.0052 |                     48.493 |          0.387098 |      0.205645 |               93.8725 |
Sept.&nbsp;25 |            7.0052 |                     48.494 |          0.387098 |      0.205642 |              257.5683 |
Nov.&nbsp;4   |            7.0052 |                     48.495 |          0.387099 |      0.205635 |               61.2628 |
Dec.&nbsp;14  |            7.0052 |                     48.497 |          0.387099 |      0.205635 |              224.9579 |
Dec.&nbsp;54  |            7.0052 |                     48.498 |          0.387098 |      0.205633 |               28.6524 |
    
_Mercury's Heliocentric Osculating Orbital Elements Referred to the Mean Equinox and Ecliptic of Date for 2013_

### Caption Styling And Linking

Story uses JavaScript and CSS to make figures and tables more beautiful and
functional.

- Figures and tables get sequentially numbered `ID` attributes of `#fig-1` and so on, so
  you can link to them.
- The `feature-figlink` feature flag searches the article for text such as
  Figure 1 and automatically links it to the appropriate figure.
- If the `feature-fignum` feature is enabled, the text of the caption is
  prepended with the figure number. Click here to <a id="fignum">toggle this
  feature</a>, then inspect the captions again to see the effect.
- The `feature-figcaption-hidden` feature makes the captions hidden until you
  move the mouse over them. The `feature-figcaption-visible` feature flag
  overrides this and makes the captions visible immediately below the image.
  Click here to <a id="figvisible">toggle this feature</a>.

### Table Captions

Story doesn't convert tables to figures, but it can add captions to tables.
See Table 3, which is followed by a paragraph whose entire content is inside an `<em>` tag.
If the `feature-tablecaption` feature is enabled, Story will use unobtrusive JavaScript to move that paragraph's text into the table's `<caption>` element.

Tables can be autolinked and table captions can be numbered, similar to images.
These features are controlled by the same `feature-figlink` and `feature-fignum` flags that control image captioning and linking, so they'll be consistently applied.

<script type="text/javascript">
$( "#fignum" ).click(function() {
	$("body").toggleClass("feature-fignum");
});
$( "#figvisible" ).click(function() {
   $("body").toggleClass("feature-figcaption-visible");
});
$( "#tablefig" ).click(function() {
   $("body").toggleClass("feature-tablefig");
});
$( "#tablefw" ).click(function() {
   $("body").toggleClass("feature-tablefw");
});
</script>
