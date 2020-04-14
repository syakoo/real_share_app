export interface coordinate {
  x: number
  y: number
}
// ____________________________________________________________________________
//
export const getRandomIntList = (n: number, q: number): number[] => {
  return [...Array(n)].map(() => Math.floor(Math.random() * q))
}

export const elInverse = (el: number, q: number): number => {
  if (el == 0) return 1
  return modExp(el, q - 2, q)
}

export const seekIntercept = (shares: coordinate[], q: number): number => {
  return 0
}
// __________________________
//
// https://gist.github.com/krzkaczor/0bdba0ee9555659ae5fe
const modExp = (a: number, b: number, n: number) => {
  a = a % n
  let result = 1
  let x = a

  while (b > 0) {
    const leastSignificantBit = b % 2
    b = Math.floor(b / 2)

    if (leastSignificantBit == 1) {
      result = result * x
      result = result % n
    }

    x = x * x
    x = x % n
  }
  return result
}
