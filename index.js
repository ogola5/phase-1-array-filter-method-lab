// Code your solution here
function findMatching(drivers, attribute) {
    return drivers.filter(function (driver) { return driver.toLowerCase() === attribute.toLowerCase() })
  }

  function fuzzyMatch(drivers, attribute) {
    return drivers.filter(function (driver) { return driver[0] === attribute[0] })
  }

  function matchName(drivers, attribute) {
    return drivers.filter(function (driver) { return driver.name === attribute })
  }