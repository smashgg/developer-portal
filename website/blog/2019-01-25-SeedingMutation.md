---
author: Mitchell "furtive" Morley
authorURL: https://twitter.com/furtive_raccoon
authorImageURL: https://imgur.com/HgkWbZt.png
title: 'Seeding Mutation: Our First Write Method'
sidebar_label: Seeding Mutation
---

We're happy to announce that our first write route for our public API
is a seeding mutation for updating phase seeding, which Genesis 6
[used for seeding their Ultimate Singles and Melee Singles
events](https://twitter.com/Genesis_Smash/status/1088640342310547456)!

<!--truncate-->

# First Write Method

This is the first write method we are making available to our users.
As we mentioned, it has already made its debut in the field for
[Genesis 6](https://start.gg/g6), where we worked alongside TOs to seed
their largest events using this new method.
You can read about that in [Dr. Z's blog post](https://blog.start.gg/b3a75c936dcb).

## 3rd Party Platform

We will, eventually, redesign and revamp the entire seeding experience on start.gg.
In the meantime, we are releasing this write method to enable our
passionate 3rd party developer community to do what they are best at:
**create excellent, custom-tailored experiences & tools for themselves and others.**
We love seeing these creations, and we are excited to support a wider range
of possibilities with the addition of write methods!

If this is your first time visiting our dev portal: welcome!
We encourage you to
[join our Discord](https://discord.gg/smashgg) and take part in our dev community.
All of the information for getting started can be found here in the dev portal,
starting with the [welcome page](/docs/intro).

## How do I use the Seeding Write Method?

We wrote [a basic example](/docs/examples/update-phase-seeding)
for how to update the seeding for a phase.
To use this write method, you will need to use an auth token belonging
to an admin in your tournament.
_(If you do not already have an auth token, please read our doc on
[authentication](/docs/authentication))_

In short, the steps to updating phase seeding are:

1. Acquire the current phase seeding
2. Make your changes to the phase seeding
3. Post the new phase seeding using a GQL mutation

There are obviously other applications you can use the seeding mutation for, like
[randomizing your phase seeding](/docs/examples/randomize-phase-seeding).
We also added a _second_ mutation for running our [conflict resolution
algorithm](/docs/examples/resolve-conflicts).

If you have any questions, please let us know in our [Discord](https://discord.gg/smashgg)!
