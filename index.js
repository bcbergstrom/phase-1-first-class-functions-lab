// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
    return array.slice(0,2)
}
const returnLastTwoDrivers = array => array.slice(array.length-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function (param)  {
        return param*int
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
function selectDifferentDrivers(drivers, driverFunction){
    return driverFunction(drivers)
}