export function sumNumberArr(arr: number[]): number {
  return arr.reduce((_prev, cur, acc) => acc + cur, 0);
}
