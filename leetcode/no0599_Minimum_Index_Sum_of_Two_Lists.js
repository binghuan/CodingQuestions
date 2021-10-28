/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {

    let set = new Set();
    let restaurantsInBothList = [];
    let restaurantMap = {};

    let index = 0;
    list1.forEach((restaurant) => {
        set.add(restaurant)
        if (restaurantMap[restaurant] == null) {
            restaurantMap[restaurant] = index;
        } else {
            restaurantMap[restaurant] += index;
        }
        index += 1;
    })

    index = 0;
    list2.forEach((restaurant) => {
        if (set.has(restaurant)) {
            restaurantsInBothList.push(restaurant);
        }

        if (restaurantMap[restaurant] == null) {
            restaurantMap[restaurant] = index;
        } else {
            restaurantMap[restaurant] += index;
        }

        index += 1;
    })

    let restaurantsObjArray = [];
    restaurantsInBothList.forEach((restaurant) => {
        restaurantsObjArray.push({
            "name": restaurant,
            "sum": restaurantMap[restaurant]
        });
    })

    restaurantsObjArray.sort((a, b) => {
        return a.sum - b.sum;
    })

    let minIndexSum = restaurantsObjArray[0].sum;
    let result = [];
    for (let i = 0; i < restaurantsObjArray.length; i++) {
        if (restaurantsObjArray[i].sum == minIndexSum) {
            result.push(restaurantsObjArray[i].name);
        }
    }

    return result;
};