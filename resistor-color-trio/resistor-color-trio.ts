export const decodedResistorValue = (colors: string[]): string => {
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
  let units: string = "ohms";

  for (let i: number = 0; i < colors.length; i++) {
    // If any input colours are not in colorKey, throw error:
    if (!colorKey.includes(colors[i])) {
      throw new Error("Invalid input");
    }
    // Write first two resistance values to resistance string:
    if (i <= 1) {
      resistance += colorKey.indexOf(colors[i]).toString();
    }
    // Third value determines number of zeroes to add from colorKey index:
    if (colors.length === 3 && i === 2) {
      let zeros = colorKey.indexOf(colors[i]);
      while (zeros > 0) {
        resistance += "0";
        zeros -= 1;
      }
    }
  }

  // If resistance is 1000 or more, convert units to kiloohms:
  if (resistance.length >= 4) {
    let offset: number = resistance.length - 3;
    resistance = resistance.substring(0, offset);
    if (parseInt(resistance.substring(offset)) >= 1) {
      resistance += `.${resistance.substring(1)}`;
    }
    units = `kilo${units}`;
  }

  return `${resistance} ${units}`;
}
