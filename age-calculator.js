function ageCalculator(name, yearOfBirth, currentYear) {
  //age calc
  const yourAge = (currentYear - yearOfBirth)
  const resString = name + " is " + yourAge + " years old."
  return resString;
}

console.log(ageCalculator("Miranda", 1983, 2015));