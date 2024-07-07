const checkBtn = document.getElementById("check-btn")
const textInput = document.getElementById("text-input")
const resultText = document.getElementById("result")

function isPalindrome(inStr) {
  const str1 = inStr.toLowerCase()
  const str2 = str1.split("").reverse().join("")
  return str1 == str2
}

function checkInput() {
  const inStr = textInput.value
  if (inStr === "") {
    alert("Please input a value")
  }
  let procStr = inStr
  const re1 = /[^a-zA-Z0-9]/gi
  // Replace non-alphanumeric characters
  procStr = procStr.replace(re1, "")
  // Check if string is a palindrome
  if (isPalindrome(procStr)) {
    resultText.textContent = `${inStr} is a palindrome`
  } else {
    resultText.textContent = `${inStr} is not a palindrome`
  }
  // Clean up
  resultText.classList.remove("hidden")
  textInput.value = ""
}

checkBtn.addEventListener("click", checkInput)
textInput.addEventListener("keyup", (ev) => {
  if (ev.key === "Enter") {
    checkInput()
  }
})
