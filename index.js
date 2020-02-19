// Code your solution in this file!
function returnFirstTwoDrivers(arr){
  return [...arr].slice(0,2)
}
function returnLastTwoDrivers(arr){
  return [...arr].slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(num){
  return (num)=> {}
}
const fareQuintupler = createFareMultiplier((num) => num*num)
const fareDoubler = createFareMultiplier((num) => 2*num)
const fareTripler = createFareMultiplier((num) => 3*num)
