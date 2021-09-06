
const carPassing = function (cars, speed) {
  // Your code in here ...
  //declare
  const timeNow = Date.now()
  let newObject = {
    time: timeNow,
    speed: speed
  }
  cars.push(newObject)
  return cars
}

