---
title: '{{ replace .TranslationBaseName "-" " " | title }}'
date: "{{ .Date }}"
url: "/{{ .Dir }}{{ .Name }}/"
event: ""
location: ""
site: ""
video: ""
slides: "/slides/{{ .Name }}/"
thumbnail: "/slides/{{ .Name }}/thumbnail.jpg"
image: "/slides/{{ .Name }}/cover.jpg"
description: ""
---
