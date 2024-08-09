// Buttons and elements
const userInputElement = document.getElementById("user-input")
const checkButton = document.getElementById("check-btn")
const clearButton = document.getElementById("clear-btn")
const resultsListElement = document.getElementById("results-list")
const resultsDivElement = document.getElementById("results-div")

// History section
const historySession = [[false, "555-5555"], [true, "1 555-557-5555"]]
const renderHistory = () => {
  // Render the history
  const historyCopy = [...historySession].reverse() // Reversed
  const resList = historyCopy.map((elem) => 
      `
      <li><span class=${elem[0] ? '"valid"' : '"invalid"'}>
              ${elem[0] ? "Valid" : "Invalid"} US number: ${elem[1]}
      </span></li>
      `
  ).join("")
  resultsListElement.innerHTML = resList
  // First element also goes to resultsDiv
  if (historyCopy?.length > 0) {
    const elem = historyCopy[0]
    if (elem[0] == true) {
      resultsDivElement.innerHTML = `Valid US number: ${elem[1]}`
      resultsDivElement.classList.add("valid")
      resultsDivElement.classList.remove("invalid")
    } else {
      resultsDivElement.innerHTML = `Invalid US number: ${elem[1]}`
      resultsDivElement.classList.remove("valid")
      resultsDivElement.classList.add("invalid")
    }
  }
}
function clearAndRenderHistory() {
  while (historySession.length > 0) {
    historySession.pop()
  }
  resultsDivElement.innerHTML = ""
  resultsDivElement.classList.remove("valid")
  resultsDivElement.classList.remove("invalid")
  renderHistory()
}
function checkInputAndRender() {
  let inputText = userInputElement.value
  if (inputText === "") {
    alert("Please provide a phone number")
    return
  }
  let validUSNumber = true
  const isdRegex = /^1\s?(\d{3}|(\(\d{3}\)))[-\s]?\d{3}[-\s]?\d{4}$/
  const localRegex = /^(\d{3}|(\(\d{3}\)))[-\s]?\d{3}[-\s]?\d{4}$/
  // Preliminary checks
  if ((inputText.match(/\d/g)?.length > 11) ||        // > 12 digits
      (inputText.match(/[^\d\-()\s]/g)?.length > 0)   // Has invalid chars
    ) {
    validUSNumber = false
  } else if (inputText.match(/\d/g)?.length === 11 &&
      (isdRegex.test(inputText))) {  // ISD code
    validUSNumber = true
  } else if (inputText.match(/\d/g)?.length === 10 &&
      (localRegex.test(inputText))) {
    validUSNumber = true
  } else {
    validUSNumber = false
  }
  historySession.push([validUSNumber, inputText])
  userInputElement.value = ""
  renderHistory()
}

// Callbacks
clearButton.addEventListener("click", clearAndRenderHistory)
checkButton.addEventListener("click", checkInputAndRender)
window.addEventListener("load", (event) => {
  clearAndRenderHistory()
})
