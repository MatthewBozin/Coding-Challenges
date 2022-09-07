//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

const highAndLow = numbers => {
  const sorted = numbers.split(" ").sort((a, b) => +b - +a);
  return `${sorted[0]} ${sorted[sorted.length - 1]}`;
}