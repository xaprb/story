---
title: Story's Music Notation
date: "2018-08-20 04:00:00"
url: "/music"
description: "Story can render music notation in your website."
credit: "https://unsplash.com/photos/UpdR5OaUJl0"
image: "img/jordan-mixson-372435-unsplash.jpg"
thumbnail: img/jordan-mixson-372435-unsplash.tn-500x500.jpg
classes:
- feature-music
categories:
- Demo
---
Story uses the [abcjs](https://github.com/paulrosen/abcjs) library to transform
[abc](https://www.abcnotation.com) music notation into "sheet music" dynamically.
This works well for displaying a wide variety of music notation in a web
browser conveniently, without embedding images or PDFs or the like.
<!--more-->

To generate sheet music within a page, enter it in a code listing with the language `abc`, like this:

    ```abc
    [ABC music notation goes here]
    ```

If you enable music notation rendering with the `feature-[no]music` flag, then Story's
JavaScript, which runs when the page loads, will search for every `abc` code listing and transform it.
Here's an example:

```abc
X: 76
T:Mazurka
C:F. Chopin
T: Op.33 No.1
M:3/4
L:1/4
Q:"Mesto"
K:B
%%staves {(RH1 RH2) (LH1 LH2)}
V: RH1 clef=treble name="Piano"
V: RH2 clef=treble
V: LH1 clef=bass
V: LH2 clef=bass
%
[V: RH1] (!p!LD | E/>D/ [^^CGB][^C^^FA] | G2-) (G/A/ | B/c/ d {/f}e | (d/g//)) z// (Ld2 |
[V: RH2] x  | x      x      x      | z [B,D] z  | x    x     x | x            z [G-B-]| 
[V: LH1] x  | x      x      x      | z [D,G,] x | x3           | x3 |
[V: LH2] z  | z      z      (D,,   | G,,2)   z  | z3           | z            z [G,-D-]|
%
[V: RH1] d/>c/ e      d) | {/c}(B/>A/ [EGc][DGB]) | (E/>D/ [^^CGB][^C^^FA] | G2 B | d/>c/e  d) |
[V: RH2] [GB]  [GA] [GB] | x3                     | x3 | z [B,D][B,D]            | z [GA] [GB] |
[V: LH1] x3 | x3 | x3 | z [D,G,] [D,G,] | x3 |
[V: LH2] [G,D] ([C,C] [G,,G,]) | z ([C,C,,] [G,,,G,,]) | z z (D,, | G,,2) x | z ([C,C] [G,,G,])
```

Story also has a `music` shortcode, which simply takes the name of an abc file as an argument, e.g. the following example code and the resulting music notation. This enables you to store your music files separately from your content and include them easily.

<pre><code>&#123;{< music "/cooleys.abc" >}}</code></pre>

{{< music "/cooleys.abc" >}}

Read next: [Story's beautiful typography](/typography/).
