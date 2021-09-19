/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
let parkingMap = {};
var ParkingSystem = function (big, medium, small) {
    parkingMap = {};
    parkingMap[1] = big;
    parkingMap[2] = medium;
    parkingMap[3] = small;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
    if (parkingMap[carType] > 0) {
        parkingMap[carType] -= 1;
        return true;
    } else {
        return false;
    }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
