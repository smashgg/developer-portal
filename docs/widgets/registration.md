---
id: registration
title: Embedded Tournament Registration
sidebar_label: Registration
---

You may embed registration for a tournament on your own site!
This is available from the Registration Settings page in tournament admin:

![image](https://imgur.com/ogpZdYJ.png)

It should look like this:
```html
<div style="width:500px; text-align:left;">
<iframe src="https://smash.gg/tournament/mitchell-s-unlisted-tournament/register/embed"
frameborder="0" height="600" width="100%" vspace="0" hspace="0" 
marginheight="5" marginwidth="5" scrolling="auto" allowtransparency="true"></iframe>
</div>
```

When you add it to your webpage it should look something like this 
(I used an iframe width of 800 for mine):

<div style="width:800; text-align:left;"><iframe src="https://smash.gg/tournament/mitchell-s-unlisted-tournament/register/embed" frameborder="0" height="600" width="100%" vspace="0" hspace="0" marginheight="5" marginwidth="5" scrolling="auto" allowtransparency="false"></iframe></div>

&nbsp;

Play around with more examples in 
<a href="https://codepen.io/matchellmarley/pen/JewajR" target="_blank">this CodePen here</a>.