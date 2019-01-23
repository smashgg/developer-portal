---
author: Mitchell "furtive" Morley
authorURL: https://twitter.com/furtive_raccoon
authorImageURL: https://imgur.com/HgkWbZt.png
title: Seeding Mutation: our first write method!
sidebar_label: Seeding Mutation!
---

We're happy to announce our first write route for our public API!
You can now update phase seeding on smash.gg using a GQL mutation.
<!--truncate-->

# First

This is the first write method we are making available to our users.
It actually has already made its debut in the field for
 [Genesis 6](https://smash.gg/g6), where we worked alongside TOs to seed
  their largest events using this new method.
You can read about that in Dr. Z's blog post here: https://blog.smash.gg/b3a75c936dcb

## 3rd Party Platform

We will, eventually, redesign and revamp the entire seeding experience on smash.gg.
In the meantime, we are releasing this write method to enable our
 passionate 3rd party developer community to do what they are best at:
  **create excellent, custom-tailored experiences & tools for themselves and others.**
We love seeing these creations, and we are excited to support a wider range
 of possibilities with the addition of write methods!

If this is your first time visiting our dev portal: welcome!
We encourage you to join
 [our Discord](https://discord.gg/smashgg) and take part in our dev community.

## How do I use the New Seeding Write Method?

We wrote [a basic example](/docs/examples/update-phase-seeding)
 for how to update the seeding for a phase.
To use this write method, you will need to use an auth token belonging
 to an admin in your tournament.
*(If you do not already have an auth token, please read our doc on
   [authentication](/docs/authentication))*

In short, the steps to updating phase seeding are:
1) Acquire the current phase seeding
2) Make your changes to the phase seeding
3) Post the new phase seeding using a GQL mutation

If you have any questions, please let us know in our [Discord](https://discord.gg/smashgg)!