---

id: glossary
title: Glossary
---

If you're already familiar with our terminology, then you can
skip this for now.
If this is your first time working with our data, then we
recommend giving this a quick read
and revisiting it later.

## Terms referring to people

* **User**: A unique user account
* **Player**: A player object, not necessarily linked to a User
* **Participant** (aka "Attendee"): A player’s representation in a specific tournament.
This is for everyone that has registered or been added to a
tournament (Spectators and competitors)
* **Entrant**: When a User registers for an Event we create an Entrant.
The Entrant is the Participants representation in the Event.
An Entrant is either a Team or Player in an Event.

## Terms referring to parts of competition

* **League** (aka "Circuit"): A collection of Events which may have a leaderboard and a finale.
Typically takes place over a longer time period (weeks-months) and
may contain Sub-Leagues (which are also Leagues)
* **Tournament**: Page containing one or more Events
* **Event**: A competition containing one or more phases
* **Phase**: A collection of one or more Phase Groups
* **Phase Group** (aka "Pool"): A collection of one or more Sets
* **Set** (aka "Match"): A collection of one or more Games
* **Game**: A Game is the atom of competition.

## Terms referring to placement

* **Seed**: A Seed is a attached to an Entrant or a Progression.
A Seed is the Entrant's initial position in a Phase and Phase Group
* **Standing**: An entrant's current or final placement within a Phase Group (e.g. "first place in Pool A1")
or within an Event (e.g. "first place in Melee Singles")

## Terms referring to game data

* **Videogame**: The Videogame played in an Event (<a href="https://api.start.gg/videogames" target="\_blank">See List</a>)
* **Character**: If applicable, Characters may be reported for a Game.
Characters are what each Entrant was playing as in that Game (<a href="https://api.start.gg/characters" target="\\\_blank">See List</a>)
* **Stage** (aka "Map", "Level"): If applicable, a Stage may be reported for a Game.
It is the in-Videogame location where that Game was played (e.g. "Final Destination" in Super Smash Bros. Melee)

