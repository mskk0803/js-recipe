const genkiFunction = function(number) {
  for (let n = 2; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(n + "!!!!!!!")
    } else {
      console.log(n)
    }
  }
}

const FizzBuzz = function(num) {
  for (let x = 1; x <= num; x++) {
    if (x % 15 === 0) {
      console.log("FizzBuzz")
    } else if (x % 5 === 0) {
      console.log("Buzz")
    } else if (x % 3 === 0) {
      console.log("zz")
    } else {
      console.log(x)
    }
  }
}
