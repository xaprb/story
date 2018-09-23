---
title: Story's Mathematical Equation Typesetting
date: "2018-08-20"
url: "/math"
description: "If you ever write equations or mathematical formulas, Story has the features you need."
credit: "https://unsplash.com/photos/5mZ_M06Fc9g/download"
image: "img/unsplash-photos-5mZ_M06Fc9g.jpg"
thumbnail: img/unsplash-photos-5mZ_M06Fc9g.tn-500x500.jpg
classes:
- feature-math
categories:
- Demo
---
This article is a demo of Story's ability to typeset mathematical equations,
both inline and in block form.
<!--more-->

Story uses the [KaTeX](https://khan.github.io/KaTeX/) library to typeset
mathematical formulae in {{< math >}}\LaTeX{{< /math >}} notation. KaTeX is
similar to MathJax, but simpler and faster. It provides most of the features
needed for typesetting equations, both inline and in block form.

Story provides a `math` Hugo shortcode to help avoid problems that result from
Markdown processing. Here's an example of using the shortcode for inline math:

<pre><code>The quadratic equation is &#123;{< math >}}x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}&#123;{< /math >}}.</code></pre>

The quadratic equation is {{< math >}}x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}{{< /math >}}.

And in equation mode,

<pre><code>&#123;{< math >}}
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
&#123;{< /math >}}</code></pre>

{{< math >}}
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
{{< /math >}}

You don't have to use the shortcode, but it saves you from needing to
backslash-escape special characters, and fixes problems like backslashes and
spaces at the end of the line, which Hugo's Markdown processor will otherwise
mangle. This enables frustration-free typesetting of more advanced equations
such as the following:

{{< math >}}
\left\{
\begin{array}{c}
a_1x+b_1y+c_1z=d_1 \\
a_2x+b_2y+c_2z=d_2 \\
a_3x+b_3y+c_3z=d_3
\end{array}
\right.
{{< /math >}}

Math typesetting is controlled with the `feature-[no]math` flag.

Read next: [Story's beautiful typography](/typography/).
