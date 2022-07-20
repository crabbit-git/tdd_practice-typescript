export const decodedValue = (colors: string[]): number => {
  const colorKey = [
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
  ];
  let resistance: string = "";
  if (!colorKey.includes(colors[0]) || !colorKey.includes(colors[1])) {
    throw new Error("Invalid input");
  }
  for (const color of colors) {
    resistance += colorKey.indexOf(color).toString();
  }
  return parseInt(resistance.substring(0, 2));
}
