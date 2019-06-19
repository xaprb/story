---
title: Flexslider
date: "2018-08-21"
url: "/flexslider"
description: "Story now also let you include nice images slideshows with FlexSlider"
author: Lionel VICTOR
classes:
- feature-justify
- feature-highlight
- feature-flexslider
categories:
- Demo
---
This article is a demo of Story's image slideshows feature based on [FlexSlider2](http://flexslider.woothemes.com/).
<!--more-->

### Integate a slide show
You can easily integrate pictures slides with the `flexslider` shortcode. Just include a
list of images as demonstrated below:

<pre><code>&#123;{% flexslider %}}
- ![alt text](kitchen_adventurer_cheesecake_brownie.jpg)
- ![alt text](kitchen_adventurer_donut.jpg)
&#123;{% /flexslider %}}</code></pre>

> **Important**:
> Do not forget to enable the  [flexslider feature flag](/features) by setting the
> `feature-flexslider` class in your article's front matter.

This will give the following frame:
{{% flexslider %}}
- ![alt text](kitchen_adventurer_cheesecake_brownie.jpg)
- ![alt text](kitchen_adventurer_donut.jpg)
{{% /flexslider %}}

>**Note**: You can just as well include a list of images within a `<div>` tag.
> In that case just add the `flexslider` class to your `<div>` as follows:
>
> With _mixed_ HTML/Markdown:
> ```html
> <div class="flexslider">
> 
> - ![alt text](kitchen_adventurer_cheesecake_brownie.jpg)
> - ![alt text](kitchen_adventurer_donut.jpg)
> 
> </div>
> ```
>
> ... or with _full_ HTML:
> ```html
> <div class="flexslider">
>   <ul>
>     <li><img src="kitchen_adventurer_cheesecake_brownie.jpg" /></li>
>     <li><img src="kitchen_adventurer_lemon.jpg" /></li>
>     <li><img src="kitchen_adventurer_donut.jpg" /></li>
>     <li><img src="kitchen_adventurer_caramel.jpg" /></li>
>   </ul>
> </div>
> ```

### Multiple slideshows in the same page
Of course you are not limited to a single slide show par article.
Here follows another slideshow base on another files set:

{{% flexslider %}}
- ![alt text](kitchen_adventurer_cheesecake_brownie.jpg)
- ![alt text](kitchen_adventurer_lemon.jpg)
- ![alt text](kitchen_adventurer_donut.jpg)
- ![alt text](kitchen_adventurer_caramel.jpg)
{{% /flexslider %}}


Read next: [Story's built-in search features](/search-page/).
