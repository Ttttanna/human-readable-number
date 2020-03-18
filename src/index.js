module.exports = function toReadable (number) {
  let unity = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let dozen = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  let hundred = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];


  if (number < 20) { return unity[number]};

  if (20 <= number && number < 100) {
    if( number % 10 === 0) {
      return dozen[(Math.round(number/10))];
    } else {
      return (dozen[Math.floor(number/10)] + " " + unity[(number%10)]);
    }
  }
  
  if (number >= 100 && number < 1000) {
    if (number % 100 === 0) {
      return hundred[Math.round(number/100)];
    } else {
      let firstDigit = hundred[Math.floor(number/100)];
      let secondDigit = number - (Math.floor(number/100) *100);
      if (1 <= secondDigit && secondDigit < 20) {
        secondDigit = unity[secondDigit];
      } else {
        (secondDigit % 10 === 0) ? secondDigit = dozen[secondDigit/10] : secondDigit = dozen[Math.floor(secondDigit/10)] + " " + unity[secondDigit % 10];
      }
      return (firstDigit + " " + secondDigit);
    }
  }

}
