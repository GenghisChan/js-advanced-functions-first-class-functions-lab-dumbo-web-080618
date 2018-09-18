// Code your solution in this file!
const returnFirstTwoDrivers = function (arr) {
  return arr.slice(0, 2)
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplyValue) {
  return function (value){
    return (multiplyValue * value)
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = function (arrayOfDrivers, x) {
    return x(arrayOfDrivers)
}
