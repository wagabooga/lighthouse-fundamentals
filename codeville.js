//declare stations
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  // create array of good stations
  let goodStations = []
  // check number of people
  for (let station of stations) {
    let capacity = station[1]
    // check if valid capacity space
    if (capacity >= 20) {

      const type = station[2]
      if (type === "school" || type === "community centre") {
        goodStations.push(station[0])

      }
    }
  }
  return goodStations;
}
console.log(chooseStations(stations))