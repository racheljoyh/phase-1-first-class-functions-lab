// Code your solution in this file!

const returnFirstTwoDrivers = function () {
  let n = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  return n.slice(0,2);
}

const returnLastTwoDrivers = function () {
  let n = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  return n.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (x) {
  return function (y) {
    return x * y;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (n, nToReturn) {
  return nToReturn(n);
}
