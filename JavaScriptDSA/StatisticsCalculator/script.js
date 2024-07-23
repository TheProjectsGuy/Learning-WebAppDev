const getMean = (array) => array.reduce((acc, el) => acc + el, 0) 
                          / array.length

const getMedian = (array) => {
  const sorted = array.sort((a, b) => Number(a) - Number(b))
  if (array.length % 2 == 0) {
    return getMean([sorted[(array.length/2) - 1], sorted[array.length/2]])
  } else {
    return sorted[Math.floor(array.length/2)]
  }
}

const getMode = (array) => {
  const counts = {}
  array.forEach((el) => {
    if (el in counts) {
      counts[el] += 1
    } else {
      counts[el] = 1
    }
  })
  if ((new Set(Object.values(counts))).size === 1) {
    return null
  }
  const highest = Object.keys(counts)
                        .sort((a, b) => counts[b] - counts[a])[0]
  const mode = Object.keys(counts).filter((el) => counts[el] === counts[highest])
  return mode.join(", ")
}

const getRange = (array) => Math.max(...array) - Math.min(...array)

const getVariance = (array) => {
  const mean = getMean(array)
  const variance = array.reduce((acc, el) => {
    const difference = el - mean
    const squared = difference ** 2
    return acc + squared
  }, 0) / array.length
  return variance
}

const getStandardDeviation = (array) => {
  const variance = getVariance(array)
  const standardDeviation = Math.sqrt(variance)
  return standardDeviation
}

function calculate() {
  // event.preventDefault()  // Prevent reloading of page (with "?" parameters)
  const value = document.querySelector("#numbers").value
  const array = value.split(/,\s*/g)
  const numbers = array.map((el) => Number(el))
                        .filter((el) => !isNaN(el));
  // Calculate and assign results
  const mean = getMean(numbers)
  document.querySelector("#mean").textContent = mean
  const median = getMedian(numbers)
  document.querySelector("#median").textContent = median
  const mode = getMode(numbers)
  document.querySelector("#mode").textContent = mode
  const range = getRange(numbers)
  document.querySelector("#range").textContent = range
  const variance = getVariance(numbers)
  document.querySelector("#variance").textContent = variance
  const standardDeviation = getStandardDeviation(numbers)
  document.querySelector("#standardDeviation").textContent = standardDeviation
}

