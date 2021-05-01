// Code your solution in this file!


const returnFirstTwoDrivers = function(array){
    let newArr = array.slice(0,2);
    return newArr;
}
const returnLastTwoDrivers = function(array){
    let newArr = array.slice(-2);
    return newArr;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// let createFareMultiplier = {
//     fareDoubler: function(num){return num * 2},
//     fareTripler: function(num){return num * 3},

// }

function createFareMultiplier(num1) {
    return function(num2){
        return num1 * num2;
}}

const fareDoubler = function(num) { return num * 2};

const fareTripler = function(num) { return num * 3};

function selectDifferentDrivers(array, theFuntionYouAreReturning){ return theFuntionYouAreReturning(array)};


