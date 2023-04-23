console.log("Welcome! Please enter what you want to calculate.");
const calc = prompt(">");

try {
  const result = eval(calc).toString();
  console.log(result)
} catch (error) {
  console.log(`Something went wrong: ${error}`)
}
