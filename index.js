// Code your solution in this file!


const driverArray = ["Antonia", "Nuru", "Anari", "Mo"];

//Returns First Drivers

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
}

returnFirstTwoDrivers(driverArray);


//Returns Last Drivers

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2,4);
}

returnLastTwoDrivers(driverArray);


//Adding first two functions to an array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


//Fare Multiplier

const fareQuintupler = function (int) {
    return int * 5;
}

function createFareMultiplier(int) {

    return fareQuintupler;
}

createFareMultiplier(2);


//Fare Doubler

const fareDoubler = function (int) {
    return int * 2;
}

fareDoubler(2)


//Fare Tripler

const fareTripler = function (int) {
    return int * 3;
}

fareTripler(2)


//Select Different Drivers

function selectDifferentDrivers(drivers, driverFunction) {

    if (driverFunction === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    }
    else if (driverFunction === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers); 
    }

}

selectDifferentDrivers(driverArray, returnFirstTwoDrivers);
