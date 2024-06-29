// Get average
function getAverage(scores) {
  let total = 0
  for (const score of scores) {
    total += score
  }
  return total / scores.length
}
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

// Get Grade
function getGrade(score) {
  if (score === 100) {
    return "A++"
  } else if (score >= 90 && score <= 99) {
    return "A"
  } else if (score >= 80 && score <= 89) {
    return "B"
  } else if (score >= 70 && score <= 79) {
    return "C"
  } else if (score >= 60 && score <= 69) {
    return "D"
  } else {
    return "F"
  }
}
console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

// Check if it's passing
function hasPassingGrade(score) {
  if (getGrade(score) === "F") {
    return false
  } else {
    return true
  }
}
console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

// Student message
function studentMsg(totalScores, studentScore) {
  const avgScore = getAverage(totalScores)
  const grade = getGrade(studentScore)
  let result = `Class average: ${avgScore}. Your grade: ${grade}. `
  if (hasPassingGrade(studentScore)) {
    result += "You passed the course."
  } else {
    result += "You failed the course."
  }
  return result
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
