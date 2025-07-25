export function toPercentage(n1: number, n2: number): [number, string] {
  if (n1 === 0 && n2 === 0) return [0, '%0']

  if (n2 === 0) return [100, '100%']

  const percentage = (n1 / (n1 + n2)) * 100
  const percentageText = `${percentage.toFixed(2)}%`

  return [percentage, percentageText]
}
