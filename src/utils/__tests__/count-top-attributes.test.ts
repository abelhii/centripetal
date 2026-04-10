import { expect, test } from "vitest";
import { countTopAttributes, type Intelligence } from "../count-top-attributes";

test("countTopAttributes returns the top 3 values for countryCode, seenBy, and threat attributes", () => {
  const data: Intelligence[] = [
    {
      ioc: "1.2.3.4",
      threat: "low",
      countryCode: "us",
      seenBy: ["usSS", "whiteHatsAnon"],
      lastSeen: 1650309845083,
    },
    {
      ioc: "1.2.3.5",
      threat: "high",
      countryCode: "us",
      seenBy: ["usSS"],
      lastSeen: 1650307825088,
    },
    {
      ioc: "gougle.com",
      threat: "high",
      countryCode: "ca",
      seenBy: ["usSS", "whiteHatsAnon", "ruWatch", "privateInc", "angiesList"],
      lastSeen: 1650609845087,
    },
    {
      ioc: "goople.com",
      threat: "high",
      countryCode: "ru",
      seenBy: ["usSS", "whiteHatsAnon", "angiesList"],
      lastSeen: 1650109815283,
    },
  ];

  const top3Values = countTopAttributes(data);

  expect(top3Values).toEqual({
    countryCode: {
      us: 2,
      ca: 1,
      ru: 1,
    },
    seenBy: {
      usSS: 4,
      whiteHatsAnon: 3,
      angiesList: 2,
    },
    threat: {
      high: 3,
      low: 1,
    },
  });
});
