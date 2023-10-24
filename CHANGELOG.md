# Thursday, September 28, 2023
✔️ Type BracketSetGameDataInput was added

✔️ Type BracketSetGameSelectionInput was added

✔️ Field character was added to object type GameSelection

✔️ Field resetSet was added to object type Mutation

✔️ Field markSetCalled was added to object type Mutation

✔️ Field reportBracketSet was added to object type Mutation

✔️ Field markSetInProgress was added to object type Mutation

✔️ Field entrant2Score was added to object type Game

✔️ Field entrant1Score was added to object type Game

✔️ Field stages was added to object type Videogame


# Friday, November 4, 2022
* Updated some documentation for Participant to be more accurate
* Added "Prefix" column to attendee export CSV. While not directly tied to API use, often used for developer experience.

# Tuesday, October 4, 2022
* Parameter `limit` added to field `recentStandings` on type `Player`

# Thursday, August 11, 2022
* Field `userEntrant` added to object type `Event`

# Thursday, August 4, 2022
* As of June 23, 2022, fixed bug where Tournament API Queries would return "Unknown error" if the complexity limit had been reached. Now, the error will inform users of the complexity limit and the exact complexity of the object they are querying.

# Wednesday, August 3, 2022
✔️ Sorting by `RECENT` on PaginatedSets will now sort first by `completedAt` instead of `startedAt`. This resolves an issue where sets with DQs would unexpectedly sort behind later sets since startedAt never gets set.

# Thursday, July 28, 2022
✔️ Field `recentStandings` was added to object type `Player`

# Wednesday, February 2, 2022
❌ Type `TeamType` was removed

❌ Type `TeamsPageFilter` was removed

❌ Type `TeamsPaginationQuery` was removed

✔️ Type `Character` was added

✔️ Field `initialSeedNum` was added to object type `Entrant`

⚠️ Enum value `XBOX` was added to `SocialConnectionType` enum

✔️ Field `competitionTier` was added to object type `Event`

✔️ Input Field `leagueEntrantId: ID` was added to input type `LeagueEventsFilter`

❌ Type for argument `query` on field `Tournament.teams` changed from `TeamsPaginationQuery!` to `TeamPaginationQuery!`

✔️ Field `characters` was added to object type `Videogame`

✔️ Input Field `eventIds: [ID]` was added to input type `TeamPaginationFilter`

✔️ Input Field `rosterComplete: Boolean` was added to input type `TeamPaginationFilter`

✔️ Input Field `eventId: ID` was added to input type `TeamPaginationFilter`

✔️ Input Field `rosterIncomplete: Boolean` was added to input type `TeamPaginationFilter`

❌ `TeamPaginationFilter.memberStatus` type changed from `TeamMemberStatus` to `[TeamMemberStatus]`

⚠️ Enum value `XBOX` was added to `AuthorizationType` enum

✔️ Field `entrant` was added to object type `Query`

✔️ Argument `slug: String` added to `Query.videogame`

# Thursday, September 9, 2021
✔️ Type `EventTeamConnection` was added

✔️ Type `TeamMember` was added

✔️ Type `TeamMemberType` was added

✔️ Type `TeamPaginationFilter` was added

✔️ Type `TeamPaginationQuery` was added

⚠️ Field `members` of type `[TeamMember]` was added to interface `Team`

✔️ Field `members` was added to object type `EventTeam`

✔️ Field `globalTeam` was added to object type `EventTeam`

✔️ Field `team` was added to object type `Entrant`

✔️ Field `members` was added to object type `GlobalTeam`

✔️ Field `eventTeams` was added to object type `GlobalTeam`

✔️ Field `leagueTeams` was added to object type `GlobalTeam`

# Wednesday, September 8, 2021
✔️ Type `ActionSet` was added

✔️ Type `EventTeam` was added

✔️ Type `GlobalTeam` was added

✔️ Type `TeamActionSet` was added

✔️ Type `TeamMemberStatus` was added

✔️ Type `TeamRosterSize` was added

✔️ Type `TeamType` was added

✔️ Field `teamRosterSize` was added to object type `Event`

✔️ Deprecation reason on field `Event.entrantSizeMax` changed from `None` to `Migrate to teamRosterSize`

✔️ Deprecation reason on field `Event.entrantSizeMin` changed from `None` to `Migrate to teamRosterSize`

✔️ Description for type `Team` changed from `A team, usually within the context of an event` to `A team, either at the global level or within the context of an event`

❌ `Team` kind changed from `OBJECT` to `INTERFACE`

✔️ Input Field `playerId: ID` was added to input type `TeamsPageFilter`

✔️ Input Field `videogameId: ID` was added to input type `TeamsPageFilter`

✔️ Input Field `type: TeamType` was added to input type `TeamsPageFilter`

✔️ Input Field `memberStatus: TeamMemberStatus` was added to input type `TeamsPageFilter`

# Monday, April 19, 2021
✔️ Field `totalPoints` was added to object type `Standing`

# Wednesday, March 31, 2021
✔️ Field `requiredConnections` was added to object type `Participant`

# Wednesday, December 9, 2020
✔️ Field `setRecordWithoutByes` was added to object type `Seed`

# Friday, July 17, 2020
✔️ Field `isFinal` was added to object type `Standing`

✔️ Field `isDisqualified` was added to object type `Entrant`

✔️ Field `url` was added to object type `Shop`

# Monday, June 1, 2020
✔️ Field `event` was added to object type `Phase`

✔️ Field `phaseOrder` was added to object type `Phase`

✔️ Field `state` was added to object type `Phase`

✔️ Field `startAt` was added to object type `PhaseGroup`

* Fixed bug with `ids` filter on input object type `TournamentPageFilter`

# Tuesday, May 26, 2020
✔️ Field `stage` was added to object type `Game` with description `The stage that this game was played on (if applicable)`

# Monday, May 11, 2020
✔️ Field `showByes` was added to input object type `SetFilters`

# Tuesday, April 21, 2020
✔️ Field `user` was added to object type `Player`

# Wednesday, March 11, 2020
✔️ Field `entrant` was added to object type `GameSelection`

✔️ Field `participant` was added to object type `GameSelection`

# Tuesday, March 10, 2020
✔️ Un-deprecated `Participant.contactInfo`

✔️ `Participant.contactInfo` description changed to `Contact Info selected during registration. Falls back to User.location and/or User.name if necessary. These fields are for admin use only and do not respect user privacy settings. DO NOT display this information publicly.`

# Monday, March 9, 2020
✔️ Type `StandingContainer` was added with description `The containing entity that contextualizes this standing. Event standings, for example, represent an entrant's standing in the entire event vs. Set standings which is an entrant's standing in only a single set within an event.`

✔️ Field `container` was added to object type `Standing`

✔️ Field `standing` was added to object type `Entrant`

✔️ Field `checkedIn` was added to object type `Participant`

✔️ Field `checkedInAt` was added to object type `Participant`

# Friday, March 6, 2020
✔️ Field `seed` was added to object type `SetSlot`

✔️ Field `phase` was added to object type `PhaseGroup`

✔️ Field `entrant` was added to object type `Team`

✔️ Field `event` was added to object type `Team`

# Thursday, March 5, 2020

## New / updated fields

### Participant
✔️ Field `user` was added to object type `Participant`

### Set
✔️ Field `stream` was added to object type `Set`

### Stream
✔️ `Stream.isOnline` description changed from `Unix timestamp for when the token expires` to `Whether the stream is currently live. May be slightly delayed.`

### Tournament
✔️ Field `owner` was added to object type `Tournament`

✔️ `Tournament.rules` description changed from `[Deprecated] General tournament rules` to `None`

✔️ `Tournament.tournamentType` description changed from `None` to `The type of tournament from TournamentType`

## Deprecations
### Event
⚠️ Deprecation reason on field `Event.rulesetSettings` changed from `None` to `Use ruleset`

### Participant
⚠️ Deprecation reason on field `Participant.contactInfo` changed from `None` to `Use User.location`

### ContactInfo
⚠️ Deprecation reason on field `ContactInfo.countryId` changed from `None` to `This entire type is deprecated. Use User.location`

⚠️ Deprecation reason on field `ContactInfo.state` changed from `None` to `This entire type is deprecated. Use User.location`

⚠️ Deprecation reason on field `ContactInfo.city` changed from `None` to `This entire type is deprecated. Use User.location`

⚠️ Deprecation reason on field `ContactInfo.nameLast` changed from `None` to `This entire type is deprecated. Use User.name`

⚠️ Deprecation reason on field `ContactInfo.name` changed from `None` to `This entire type is deprecated. Use User.name`

⚠️ Deprecation reason on field `ContactInfo.nameFirst` changed from `None` to `This entire type is deprecated. Use User.name`

⚠️ Deprecation reason on field `ContactInfo.country` changed from `None` to `This entire type is deprecated. Use User.location`

⚠️ Deprecation reason on field `ContactInfo.zipcode` changed from `None` to `This entire type is deprecated. Use User.location`

⚠️ Deprecation reason on field `ContactInfo.stateId` changed from `None` to `This entire type is deprecated. Use User.location`

## Removing previously deprecated, now unused fields
### Station
❌ Field `streamLogo` was removed from object type `Stations`

❌ Field `streamGame` was removed from object type `Stations`

❌ Field `streamType` was removed from object type `Stations`

❌ Field `followerCount` was removed from object type `Stations`

❌ Field `streamStatus` was removed from object type `Stations`

❌ Field `streamName` was removed from object type `Stations`

❌ Field `streamTypeId` was removed from object type `Stations`

❌ Field `streamSource` was removed from object type `Stations`

❌ Field `isOnline` was removed from object type `Stations`

### Tournament
❌ Field `region` was removed from object type `Tournament`

### Set
- Use setSlot resolver to get all of this info now

❌ Field `entrant1Present` was removed from object type `Set`

❌ Field `entrant1Id` was removed from object type `Set`

❌ Field `entrant2Present` was removed from object type `Set`

❌ Field `entrant2Id` was removed from object type `Set`

❌ Field `entrant1Score` was removed from object type `Set`

❌ Field `entrant2Score` was removed from object type `Set`

## Removing entity ID fields
Use entity resolvers directly instead (i.e. Participant.user instead of Participant.userId)

### Station
❌ Field `clusterId` was removed from object type `Stations`

❌ Field `tournamentId` was removed from object type `Stations`

❌ Field `eventId` was removed from object type `Stations`

❌ Field `streamId` was removed from object type `Stations`

### Entrant
❌ Field `eventId` was removed from object type `Entrant`

### Event
❌ Field `videogameId` was removed from object type `Event`

### GameSelection
❌ Field `participantId` was removed from object type `GameSelection`

❌ Field `entrantId` was removed from object type `GameSelection`

### Participant
❌ Field `playerId` was removed from object type `Participant`

❌ Field `userId` was removed from object type `Participant`

### Seed
❌ Field `entrantId` was removed from object type `Seed`

### Game
❌ Field `setId` was removed from object type `Game`

### Stream
❌ Field `eventId` was removed from object type `Streams`

❌ Field `tournamentId` was removed from object type `Streams`

### SetSlot
❌ Field `seedId` was removed from object type `SetSlot`

❌ Field `setId` was removed from object type `SetSlot`

### Set
❌ Field `eventId` was removed from object type `Set`

❌ Field `streamId` was removed from object type `Set`

❌ Field `phaseGroupId` was removed from object type `Set`

❌ Field `stationId` was removed from object type `Set`

### Standing
❌ Field `entityType` was removed from object type `Standing`

❌ Field `entityId` was removed from object type `Standing`

### Team
❌ Field `eventId` was removed from object type `Team`

❌ Field `entrantId` was removed from object type `Team`

### PhaseGroup
❌ Field `waveId` was removed from object type `PhaseGroup`

❌ Field `phaseId` was removed from object type `PhaseGroup`

## Hiding private fields

### Stream
❌ Field `externalStreamId` was removed from object type `Stream`

### Station
❌ Field `createdAt` was removed from object type `Stations`

### Participant
❌ Field `claimed` was removed from object type `Participant`

❌ Field `phoneNumber` was removed from object type `Participant`

❌ Field `checkedIn` was removed from object type `Participant`

❌ Field `checkedInAt` was removed from object type `Participant`

❌ Field `createdAt` was removed from object type `Participant`

### Tournament and League
❌ Field `notifyAdmins` was removed from object type `Tournament` and `League`

❌ Field `reminderInterval` was removed from object type `Tournament` and `League`

❌ Field `paypalMode` was removed from object type `Tournament` and `League`

❌ Field `includeQRCheckIn` was removed from object type `Tournament` and `League`

❌ Field `qrCodeRedirect` was removed from object type `Tournament` and `League`

❌ Field `details` was removed from object type `Tournament` and `League`

❌ Field `ownerId` was removed from object type `Tournament` and `League`

❌ Field `stripeMode` was removed from object type `Tournament` and `League`

❌ Field `onsitePaymentMode` was removed from object type `Tournament` and `League`

❌ Field `stripeUserId` was removed from object type `Tournament` and `League`

❌ Field `emailNote` was removed from object type `Tournament` and `League`

❌ Field `adminUrl` was removed from object type `Tournament` and `League`

❌ Field `qrCodeRedirectType` was removed from object type `Tournament` and `League`

❌ Field `hideAdmins` was removed from object type `Tournament` and `League`

❌ Field `approved` was removed from object type `Tournament` and `League`

❌ Field `contactTwitter` was removed from object type `Tournament` and `League`

❌ Field `contactPhone` was removed from object type `Tournament` and `League`

❌ Field `gettingThere` was removed from object type `Tournament` and `League`

❌ Field `attendeeFieldConfig` was removed from object type `Tournament` and `League`

❌ Field `includeQRCode` was removed from object type `Tournament` and `League`

❌ Field `generatedTabs` was removed from object type `Tournament` and `League`

❌ Field `emailDirections` was removed from object type `Tournament` and `League`

❌ Field `defaultTab` was removed from object type `Tournament` and `League`

❌ Field `contactEmail` was removed from object type `Tournament` and `League`

❌ Field `prizes` was removed from object type `Tournament` and `League`

❌ Field `paypalUser` was removed from object type `Tournament` and `League`

❌ Field `emailInstructions` was removed from object type `Tournament` and `League`

❌ Field `customMarkdown` was removed from object type `Tournament` and `League`

### Player
❌ Field `color` was removed from object type `Player`

❌ Field `gamerTagChangedAt` was removed from object type `Player`

### Address
❌ Field `updatedAt` was removed from object type `Address`

❌ Field `userId` was removed from object type `Address`

❌ Field `nameLast` was removed from object type `Address`

❌ Field `phoneNumber` was removed from object type `Address`

❌ Field `overrideAddress` was removed from object type `Address`

❌ Field `type` was removed from object type `Address`

❌ Field `nameFirst` was removed from object type `Address`

❌ Field `address2` was removed from object type `Address`

❌ Field `zipcode` was removed from object type `Address`

❌ Field `createdAt` was removed from object type `Address`

❌ Field `address` was removed from object type `Address`

### ProfileAuthorization
❌ Field `metadata` was removed from object type `ProfileAuthorization`

❌ Field `accessToken` was removed from object type `ProfileAuthorization`

❌ Field `externalId` was removed from object type `ProfileAuthorization`

❌ Field `expiresAt` was removed from object type `ProfileAuthorization`

### Image
❌ Field `entity` was removed from object type `Image`

❌ Field `uploadedBy` was removed from object type `Image`

❌ Field `isOriginal` was removed from object type `Image`

❌ Field `entityId` was removed from object type `Image`

### Stream
❌ Field `removesTasks` was removed from object type `Streams`

### Set
❌ Field `updatedAtMicro` was removed from object type `Set`

## ID type changes
❌ `RaceMatchConfig.id` type changed from `Int` to `ID`

❌ `BracketConfig.id` type changed from `Int` to `ID`

❌ `MatchConfig.id` type changed from `Int` to `ID`

❌ `RaceBracketConfig.id` type changed from `Int` to `ID`

---

# Tuesday, March 3rd, 2020

## Additions

### User
✔️ Field `authorizations` was added to object type `User`

✔️ Field `location` was added to object type `User`

✔️ Field `player` was added to object type `User`

✔️ Field `stream` was added to object type `User`

## Field removals

### Player
❌ Field `twitchStream` was removed from object type `Player`. Please use `User.authorizations`.

❌ Field `twitterHandle` was removed from object type `Player`. Please use `User.authorizations`.

❌ Field `youtube` was removed from object type `Player`. Please use `User.authorizations`.

❌ Field `region` was removed from object type `Player`.

❌ Field `state` was removed from object type `Player`. Please use `User.location`.

❌ Field `country` was removed from object type `Player`. Please use `User.location`.

❌ Field `nameDisplay` was removed from object type `Player`. Please use `User.name`.

❌ Field `images` was removed from object type `Player`. Please use `User.images`.

### User
❌ Field `address` was removed from object type `User`.

❌ Field `dob` was removed from object type `User`.

❌ Field `playerId` was removed from object type `User`.

❌ Field `cookiesAccepted` was removed from object type `User`.

❌ Field `language` was removed from object type `User`.

❌ Field `registrationState` was removed from object type `User`.

❌ Field `createdAt` was removed from object type `User`.

❌ Field `publishingSettings` was removed from object type `User`.

❌ Field `nameFirst` was removed from object type `User`.

❌ Field `nameLast` was removed from object type `User`.
