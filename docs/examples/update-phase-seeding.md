---
id: update-phase-seeding
title: Update Seeding for a Phase
---

In this example, we will update the seeding for a phase in one of our events.

## Step 1: Obtaining the current seeding via API

To obtain the current phase seeding via API, use a request like this one:

```GraphQL
query GetPhaseSeeds($phaseId:Int!) {
  phase(id:$phaseId){
    id
    numSeeds
    paginatedSeeds(query:{
      page: 1
      perPage: 60
    })
    {
      nodes{
        id
        seedNum
        entrant{
          id
          participants{
            id
            gamerTag
          }
        }
      }
    }
  }
}
```

Variables

```GraphQL
{
  "phaseId": 519453
}
```

Obviously, you have the freedom to request fields you want here and omit fields you don't want.
For example, you can add rankings data for a player.
Regardless of which data you choose, you can write this to a .csv and follow the below steps
 or store/manipulate it in some other application of your choosing.

## Step 1 Alternative: Obtaining the current seeding via phase export

To obtain the current phase seeding via phase export, go to the Bracket Setup page in tournament admin.
Then, for the phase you want to update seeding for, click the export button to download a .csv of its current seeding.

![export button](https://imgur.com/plcr1y4.png)

## Step 2: Manipulating the Seeding

Once you have the current seeding in a format to your liking, you can get started on editing it.
In this example, we'll be editing it in Google Sheets using the data from the .csv Phase Seeding Export download.
I've highlighted the columns which we'll need later when we post the updated seeding using a GQL mutation.

![google sheet](https://imgur.com/VaCZo2H.png)

Here, you would move seeds around to your liking.
Your worfklow is up to you!
In my case, I decided to:
1) Add a column to my sheet for 'power'
2) Assign a rough 1-10 'power' to each entrant in this column (1 worst - 10 best)
3) Order my seeds by this power in a descending order
4) Make any finer adjustments for the Top 8 or so as I see fit