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
<div style="width:500px;">
      <iframe src="https://smash.gg/tournament/${tournamentSlug}/register/embed"
      frameborder="1" height="600" width="100%" >
      </iframe>
</div>
```

When you add it to your webpage it should look something like this
 (Below is using an iframe width of 750 and a height of 1000):

<div style="width:750;">
      <iframe src="https://smash.gg/tournament/mitchell-s-unlisted-tournament/register/embed"
      	frameborder="1" height="1000" width="100%" >
      </iframe>
</div>

&nbsp;

Play around with more examples in 
<a href="https://codepen.io/matchellmarley/pen/JewajR" target="_blank">this CodePen here</a>.