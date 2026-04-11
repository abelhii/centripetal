# Centripetal take home test

![Build](https://github.com/abelhii/centripetal/actions/workflows/deploy.yml/badge.svg)

Hi, thank you for taking the time to review my take-home test!  
You can view the deployed version on [Github Pages](https://abelhii.github.io/centripetal/).

or run it with npm or pnpm

## Quick start

with npm:

```bash
npm install
npm run dev
```

or with pnpm:

```bash
pnpm install
pnpm dev
```

## Testing

I have included tests for the core functions using Vitest. I focused on testing pure functions that contain the main logic for each question.

You can run the tests with:

`npm run test` or `pnpm test`

## Question 1

**Relevant Files:**

- [populate-grid.ts](./src/utils/populate-grid.ts)
- [Grid.tsx](./src/components/grid.tsx)
- [question1.tsx](./src/components/question1.tsx)

`populateGrid` is the main function that takes in an x an y value and returns a 2D array of numbers that are calculated based on the rules provided in the question.

I originally misunderstood the question and focused too much on the paths from the top left cell to the bottom right cell without realizing how the values in the sample grid correlated with one another until I noted the constraint "You can only move down or right.".
The way I'm populating the cells is by calculating the sum of the values of the cell above and to the left, as those are the only two ways that a cell can be reached.

## Question 2

**Relevant Files:**

- [count-top-attributes.ts](./src/utils/count-top-attributes.ts)
- [question2.tsx](./src/components/question2.tsx)

I decided to exclude the `ioc` and `lastSeen` attributes because they are unique values which didn't seem relevant to what the user is asking for.

The `countryCode`, `seenBy`, and `threat` attributes have values that repeat and can be tallied to show the top 3.

You can test it in the console by running `countTopAttributes(sampleData)`

You can also pass an options object as a second argument to specify which attributes you want to count and how many top values to return.

```ts
countTopAttributes(sampleData, {
  attributes: ["countryCode", "seenBy"], // default is ['countryCode', 'seenBy', 'threat']
  top: 5, // default is 3
});

```

This will return the top 5 values for the countryCode and seenBy attributes.
