---
title: Story's Charts and Diagrams
date: "2018-08-20"
url: "/charts"
description: "Story supports flowcharts, sequence diagrams, charts and graphs, and more."
credit: "https://unsplash.com/photos/HcZXiWL_piM"
image: "img/rawpixel-983726-unsplash.jpg"
thumbnail: "img/rawpixel-983726-unsplash-tn.500x500.jpg"
classes:
- feature-mermaid
categories:
- Demo
---
This article is a demo of Story's support for various types of diagrams,
graphs, and charts.
<!--more-->

Story includes JavaScript libraries that interpret plaintext descriptions of diagrams
and render them as images. You'll need to enable the correct feature flags to activate these
features, depending on what types of charts or diagrams you want to create.
At this time, Story supports [Mermaid](https://mermaidjs.github.io/).
You can use the following flowchart to help you determine which one you need:

<div class="mermaid">
graph TD
A(Need Visualization) -->B{What Kind?}
B -->|Flowchart| D(Mermaid)
B -->|Sequence| D
B -->|Gantt| D
B -->|Git Timeline| D
B -->|UML| D
</div>

### Chart.js

I'm hoping to find time to add support for [Chart.js](https://www.chartjs.org/) at some point.
When that's done, a number of other visualizations will be possible. Pull requests are welcome.

These features are controlled with the following flags: `feature-[no]mermaid`.

Read next: [Story's music notation](/music/).
