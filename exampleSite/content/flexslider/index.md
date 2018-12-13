---
title: Flexslider
date: "2018-12-12"
url: "/flexslider"
description: "Story now also let you include nice images slideshows with FlexSlider"
classes:
- feature-justify
- feature-flexslider
categories:
- Demo
---
This article is a demo of Story's image slideshows feature based on [FlexSlider2](http://flexslider.woothemes.com/).
<!--more-->

### Integate a slide show
You can easily integrate pictures slides in just two easy steps:

1. Add the `feature-flexslider` class to your article's classes.
2. Create a bullet list of images within a `div` container of the class
`flexslider` as follows:

```
<div class="flexslider">

- ![alt text](kitchen_adventurer_cheesecake_brownie.jpg)
- ![alt text](kitchen_adventurer_donut.jpg)

</div>
```

 The above snippet will result in the below slide show:

  <div class="flexslider">

- ![alt text](kitchen_adventurer_cheesecake_brownie.jpg)
- ![alt text](kitchen_adventurer_donut.jpg)
  </div>

> Please note that you can also insert the slideshow structure in plain HTML as demonstrated below
> although this really defeats the purpose of using Markdown in the first time...
> 
> ```
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
Last but not least please note that you are not limited to a single slide show
par article. Here follows another slideshow base on another files set:

<div class="flexslider">
  <ul>
    <li><img src="kitchen_adventurer_cheesecake_brownie.jpg" /></li>
    <li><img src="kitchen_adventurer_lemon.jpg" /></li>
    <li><img src="kitchen_adventurer_donut.jpg" /></li>
    <li><img src="kitchen_adventurer_caramel.jpg" /></li>
  </ul>
</div>

Read next: [Story's built-in search features](/search-page/).
