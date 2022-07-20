export const colorKey = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
] as const;
export type Color = typeof colorKey[number];

export function decodedResistorValue([band1, band2, band3]: Color[]): string {
  let resistanceUnits: string = "ohms";

  let resistanceValue: number = (
    (
      10 * colorKey.indexOf(band1) + colorKey.indexOf(band2)
    ) * (10 ** colorKey.indexOf(band3))
  );

  if (resistanceValue >= 1000) {
    resistanceUnits = "kilo" + resistanceUnits;
    resistanceValue = resistanceValue / 1000;
  }

  return `${resistanceValue} ${resistanceUnits}`;
}
