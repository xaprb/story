---
title: '{{ replaceRE "[/-]" " " .Dir | title }}'
date: "{{ .Date }}"
url: "/{{ .Dir }}"
image: "/slides/{{ .Name }}/cover.jpg"
description: ""
ratio: "16:9"
themes:
- apron
- adirondack
- descartes
---
class: title
background-image: url(cover.jpg)

# {{ replaceRE "[/-]" " " .Dir | title }}
## Subtitle

---
# About Me

- Slides are at {{ .Site.BaseURL }}talks/
- Ask questions anytime

---
class: col-2
# Slides and Contact Information

Slides are at {{ .Site.BaseURL }}talks/ or you can scan the QR code.

Contact:

<div id="qrcode"></div>
