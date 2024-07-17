const numberInput = document.getElementById("number")
const convertButton = document.getElementById("convert-btn")
const outputPara = document.getElementById("output")

function convertNumberToRoman(num) {
  num = parseInt(num)
  if (num < 1 || num >= 4000) {
    throw `Cannot generate roman for '${num}'`
  }
  const p3 = Math.floor(num/1e3)
  const p2 = Math.floor((num - p3*1e3)/1e2)
  const p1 = Math.floor((num - p3*1e3 - p2*1e2)/1e1)
  const p0 = num % 10
  const getDigitRepresentation = (digit, c1="C", c5="D", c10="M") => {
    if (digit < 0 || digit > 9) {
      throw `Invalid digit: ${digit}`
    } else if (digit == 0) {
      return ""
    } else if (digit < 4) {
      return `${c1}`.repeat(digit)
    } else if (digit == 4) {
      return `${c1}${c5}`
    } else if (digit < 9) {
      return `${c5}` + `${c1}`.repeat(digit - 5)
    } else if (digit == 9) {
      return `${c1}${c10}`
    }
  }
  let res = "M".repeat(p3)
  res += getDigitRepresentation(p2, "C", "D", "M")
  res += getDigitRepresentation(p1, "X", "L", "C")
  res += getDigitRepresentation(p0, "I", "V", "X")
  return res
}

function processInput() {
  outputPara.classList.remove("hidden")
  // Check input
  if (numberInput.value === "") {
    outputPara.textContent = "Please enter a valid number"
    return
  }
  const inputNum = parseInt(numberInput.value)
  if (inputNum < 1) {
    outputPara.textContent = 
        "Please enter a number greater than or equal to 1"
    return
  } else if (inputNum > 3999) {
    outputPara.textContent = 
        "Please enter a number less than or equal to 3999"
    return
  } else {
    outputPara.textContent = convertNumberToRoman(inputNum)
  }
}

convertButton.addEventListener("click", processInput)
numberInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    processInput()
  }
})
numberInput.value = ""  // Clear the input value
