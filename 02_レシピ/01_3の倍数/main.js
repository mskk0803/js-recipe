const genkiFunction = function(number) {
  for (let n = 2; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(n + "!!!!!!!")
    } else {
      console.log(n)
    }
  }
}

const Fizzbuzz = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 15 === 0) {
      console.log("FizzBuzz")
    } else if (n % 5 === 0) {
      console.log("Fizz")
    } else if (n % 3 === 0) {
      console.log("Buzz")
    } else {
      console.log(n)
    }
  }
}

Fizzbuzz(100)
