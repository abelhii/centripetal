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

I have included some basic tests for the utility functions using Jest. You can run the tests with: Ø`npm run test` or `pnpm test`

## Question 1

- [populate-grid.ts](./src/utils/populate-grid.ts)
- [Grid.tsx](./src/components/grid.tsx)
- [question1.tsx](./src/components/question1.tsx)

populateGrid is the main function that takes in an x an y value and returns a 2D array of numbers that are calculated based on the rules provided in the question.

## Question 2

- [count-top-attributes.ts](./src/utils/count-top-attributes.ts)
- [question2.tsx](./src/components/question2.tsx)

I decided to exclude the `ioc` and `lastSeen` attributes because they are unique values which didn't seem to fit what the user is asking for.

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
