---
title: '{{ replaceRE "[/-]" " " .Dir | title }}'
date: "{{ .Date }}"
url: "/{{ .Dir }}"
image: "/slides/{{ .Name }}/cover.jpg"
description: ""
ratio: "16:9"
theme: "monobloc"
---
layout: true
<div class="remark-slide-number" style="left: 20px; right: unset">@handle</div>

---
class: title
background-image: url(cover.jpg)
background-size: cover

.smokescreen[
# {{ replaceRE "[/-]" " " .Dir | title }}
## Subtitle
]

---
# About Me

- Slides are at {{ .Site.BaseURL }}talks/
- Ask questions anytime

---
class: two-column
# Slides and Contact Information

.col[
Slides are at {{ .Site.BaseURL }}talks/ or you can scan the QR code.

Contact:

]

.col[
<div id="qrcode"></div>
]
