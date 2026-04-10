export const sampleData: Intelligence[] = [
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

export type Intelligence = {
  ioc: string;
  threat: string;
  countryCode: string;
  seenBy: string[];
  lastSeen: number;
};

type CountTopAttributesOptions = {
  attributes: Exclude<keyof Intelligence, "ioc" | "lastSeen">[];
  top: number;
};

export function countTopAttributes(
  data: Intelligence[],
  options?: CountTopAttributesOptions,
) {
  const { attributes = ["countryCode", "seenBy", "threat"], top = 3 } =
    options || {};
  const result: Record<string, Record<string, number>> = {};

  for (const attribute of attributes) {
    const valueTally: Record<string, number> = {};

    data.forEach((obj) => {
      const val = obj[attribute];

      if (Array.isArray(val)) {
        // if value is an array then tally the subValues (to handle seenBy)
        val.forEach((subVal) => {
          if (!valueTally[subVal]) valueTally[subVal] = 0;
          valueTally[subVal]++;
        });
      } else {
        // else, tally the values
        if (!valueTally[val]) valueTally[val] = 0;
        valueTally[val]++;
      }
    });

    // Sort in desc order to get the top 3 values per attributes
    const sorted = Object.entries(valueTally)
      .sort(([, aCount], [, bCount]) => bCount - aCount)
      .splice(0, top); // get top values

    result[attribute] = sorted.reduce(
      (prev, [value, count]) => ({ ...prev, [value]: count }),
      {},
    );
  }

  return result;
}
