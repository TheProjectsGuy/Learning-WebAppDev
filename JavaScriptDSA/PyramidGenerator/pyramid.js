// Generate a pyramid-like graphic
/*
  Set the variables and generate a pyramid
*/
const character = "*"
const num_lines = 5
const invert = false
const addBorder = false

// Make the pyramid
const result = []

function getRow(row_num, num_lines) {
  return " ".repeat(num_lines - row_num) +
    character.repeat(2*row_num - 1) +
    " ".repeat(num_lines - row_num)
}

for (let i = 1; i <= num_lines; i++) {
  let rowStr = getRow(i, num_lines)
  if (addBorder) {
    rowStr = "|" + rowStr + "|"
  }
  if (invert) {
    result.unshift(rowStr)
  } else {
    result.push(rowStr)
  }
}
if (addBorder) {
  result.unshift("_".repeat(2*num_lines+1))
  result.push("-".repeat(2*num_lines+1))
}

for (const row of result) {
  console.log(row)
}
