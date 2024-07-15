num = 50

function decToBinDirect(num) {
  let n = num // Always dividend (divisor = 2)
  let resStr = []
  while (n > 0) {
    let r = n % 2
    resStr.unshift(r)
    n = Math.floor(n / 2)
  }
  return resStr.join("")
}

function decToBinRecursion(num) {
  if (num < 2) {
    return `${num}`
  }
  return `${decToBinRecursion(Math.floor(num/2))}${num % 2}`
}

console.log(decToBinDirect(num))
console.log(decToBinRecursion(num))
