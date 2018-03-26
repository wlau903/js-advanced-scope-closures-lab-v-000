function produceDrivingRange(blockRange) {
  return function(startPoint, endPoint) {
    let trip = Math.abs(parseInt(startPoint) - parseInt(endPoint))
    if (trip < blockRange) {
      return `within range by ${blockRange - trip}`
    } else {
      return `${trip - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return fare * percentage
  }
}


function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
