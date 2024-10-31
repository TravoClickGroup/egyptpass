export function decimalToPercentage(num) {
  if (isNaN(num)) return 0;
  const fraction = num % 1;
  const percentage = fraction * 100;
  return parseInt(percentage.toFixed(2));
}
