let character = 'Hello';
// console.log(character);
// character = "World";
// console.log(character);
// let secondCharacter;
// secondCharacter = character;
// console.log(secondCharacter);

// let profession = "teacher"
// let age
// console.log(profession)
// console.log(age)

let count = 8
// console.log(count * 5)

let rows = ["Naomi", "Quincy", "CamperChan"]
// console.log(rows[0])
// rows[2] = 10
// rows[2] = rows[rows.length - 1]
let pushed = rows.push("freeCodeCamp")
console.log(pushed)
let popped = rows.pop()
console.log(popped)
// rows.push("SomeName", "AnotherName")
// rows.pop()
// rows.pop()
console.log(rows)

let cities = ["London", "New York", "Mumbai"]
console.log(cities)
cities[cities.length - 1] = "Mexico City"
console.log(cities)

const ch = "#"  // Character: Building block
const ct = 8    // Count
const r = []    // Rows

for (let i = 0; i < ct; i += 1) {
  r.push(ch.repeat(i+1)) // Arrays are mutable!
}
let result = ""
for (const row of r) {
  result = result + "\n" + row
}
console.log(result)

function addTwoNumbers(a, b) {
  return a + b
}
const sum = addTwoNumbers(5, 10)
console.log(sum)
// console.log(addTwoNumbers(5))