export function twoFer(name?: string): string {
  if (name === undefined) {
    name = 'you';
  }
  return `One for ${name}, one for me.`
}
