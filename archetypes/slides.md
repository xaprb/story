---
title: {{ .Name | humanize | title }}
date: "{{ .Date }}"
url: "{{ .Dir }}"
image: "slides/{{ .Name }}/cover.jpg"
description: ""
ratio: "16:9"
themes:
- apron
- adirondack
- descartes
---
class: title
background-image: url(cover.jpg)

# {{ .Name | humanize | title }}
## Subtitle

---
# About Me

- Slides are at {{ "talks/" | absURL }}
- Ask questions anytime

---
# Slides and Contact Information

.qrcode.db.fr.w-40pct.ml-4[]

Slides are at {{ .Site.BaseURL }}talks/ or you can scan the QR code.

Contact:

