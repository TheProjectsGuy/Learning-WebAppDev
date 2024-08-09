let inputText = "(555)-555 5555"
const ISDRegex = /^(\d{3}|(\(\d{3}\)))[-\s]?\d{3}[-\s]?\d{4}$/
console.log(ISDRegex.test(inputText))