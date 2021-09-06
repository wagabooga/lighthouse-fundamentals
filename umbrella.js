function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

var umbrella = {
  color: "pink",
  isOpen: true,
  open: function () {
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
    close: function() {
      if (umbrella.isOpen === true) {
        umbrella.isOpen = false;
        return "Julia closes the umbrella!";
      } else {
        return "The umbrella is already closed!";
      }
    }
  },
  // your code goes here
};