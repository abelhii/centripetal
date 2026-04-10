import { countTopAttributes, sampleData } from "../utils/count-top-attributes";

export function Question2() {
  const top3Values = countTopAttributes(sampleData);

  return (
    <div>
      <p style={{ maxWidth: "50ch" }}>
        Output of the sampleData, you can test it in the console by running
        <code>countTopAttributes(sampleData)</code>
      </p>
      <pre>{JSON.stringify(top3Values, null, 2)}</pre>
    </div>
  );
}
