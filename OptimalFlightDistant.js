/*
Amazon Prime Air is developing a system that divides shipping routes
using flight optimization routing systems to a cluster of aircraft that can
fulfill these routes. Each shipping route is identified by a unique integer
identifier, requires a fixed non-zero amount of travel distance between
airports, and is defined to be either a forward shipping route or a return
shipping route. Identifiers are guaranteed to be unique within their own
route type, but not across route types.

Each aircraft should be assigned two shipping routes at once: one
forward route and one return route. Due to the complex scheduling of
flight plans, all aircraft have a fixed maximum operating travel distance,
and cannot be scheduled to fly a shipping route that requires more travel
distance than the prescribed maximum operating travel distance. The
goal of the system is to optimize the total operating travel distance of a
given aircraft  A forward/return shipping route pair is considered to be
"optimal" if there does not exist another pair that has a higher operating
travel distance than this pair, and also has a total less than or equal to the
maximum operating travel distance of the aircraft

Problem

For example, if the aircraft has a maximum operating travel distance of
3000 miles, a forward/return shipping route pair using a total of 2900
miles would be optimal if there does not exist a pair that uses a total
operating travel distance of 3000 miles, but would not be considered
optimal if such a pair did exist.

Your task is to write an algorithm to optimize the sets of forward/return
shipping route pairs that allow the aircraft to be optimally utilized, given
a list of forward shipping routes and a list of return shipping routes.
nput
The input to the function/method consists of three arguments:
maxTrave/Dist, an integer representing the maximum operating travel
distance of the given aircraft;
fort/I/ardRouteList, a list of pairs of integers where the first integer
represents the unique identifier of a forward shipping route and the
second integer represents the amount of travel distance required by this
shipping route;
returnRouteList, a list of pairs of integers where the first integer
represents the unique identifier of a return shipping route and the
second integer represents the amount of travel distance required by this
shipping route,

Output
Return a list of pairs of integers representing the pairs of IDs of forward
and return shipping routes that optimally utilize the given aircraft If no
route is possible, return an empty list.

reference: https://www.careercup.com/question?id=5750442676453376
*/

function optimalUtilization(maxTravelDist, forwardRouteLit, returnRouteList) {
    console.log("## --------------------------------------------------------->");
    console.log("## INPUT:", "maxTravelDist:", maxTravelDist,
        "\nforwardRouteLit:", forwardRouteLit,
        "\nreturnRouteList:", returnRouteList);

    let maxMiles = 0;
    let pairs = [];
    for (let i = 0; i < forwardRouteLit.length; i++) {

        let base = forwardRouteLit[i][1];

        for (let j = 0; j < returnRouteList.length; j++) {
            let value = returnRouteList[j][1];

            let total = base + value;
            if (total <= maxTravelDist) {
                if (total > maxMiles) {
                    maxMiles = total;
                    pairs = [];
                    pairs.push([i + 1, j + 1]);
                } else if (total == maxMiles) {
                    pairs.push([i + 1, j + 1]);
                }
            }

        }
    }

    console.log("## OUTPUT:", pairs);
}

let maxTravelDist = 20,
    forwardRouteLit = [[1, 8], [2, 7], [3, 14]],
    returnRouteList = [[1, 5], [2, 10], [3, 14]];
optimalUtilization(maxTravelDist, forwardRouteLit, returnRouteList);
maxTravelDist = 20,
    forwardRouteLit = [[1, 8], [2, 15], [3, 9]],
    returnRouteList = [[1, 8], [2, 11], [3, 12]];
optimalUtilization(maxTravelDist, forwardRouteLit, returnRouteList);