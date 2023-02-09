
/**
John plays a game of battleships with his friend Sonia. 
The game is played on a square map of N rows, 
numbered from 1 to N. Each row contains N cells, 
labeled with consecutive English upper-case letters (A, B, C, etc.). 
Each cell is identified by a string composed of its row number followed by its column number: 
for example, "9C" denotes the third cell in the 9th row, 
and "15D" denotes the fourth cell in the 15th row.

John marks the positions of all his ships on the map (which is not shown to Sonia). 
Ships are defined by rectangles with a maximum area of 4 cells. Sonia picks map cells to hit some ships. 
A ship is considered to be hit if at least one of its constituent cells is hit. If all of a ship's cells are hit, the ship is sunk.

The goal is to count the number of sunk ships and the number of ships that have been hit but not sunk.

For example, the picture below shows a map of size N = 4 with two blue ships and five hits marked with the letter 'X':

In this example, one ship has been sunk and the other has been hit but not sunk. 
In the next picture, the sunken ship is shown in grey and the ship that has been hit but not yet sunk appears in red:

The positions of ships are given as a string S, 
containing pairs of positions describing respectively the top-left and bottom-right corner cells of each ship. 
Ships' descriptions are separated with commas. 
The positions of hits are given as a string T, containing positions describing the map cells that were hit: 
for the map in the example shown above, S = "1B 2C,2D 4D" and T = "2B 2D 3D 4D 4A".
Ships in S and hits in T may appear in any order.

Write a function:

def solution(N, S, T)
that, given the size of the map N and two strings S, T that describe the positions of ships and hits respectively, 
returns a string with two numbers: the count of sunken ships and the count of ships that have been hit but not sunk, 
separated with a comma.

For instance, given N = 4, S = "1B 2C,2D 4D" and T = "2B 2D 3D 4D 4A", 
your function should return "1,1", as explained above.

Given N = 3, S = "1A 1B,2C 2C" and T = "1B", your function should return "0,1", 
because one ship was hit but not sunk.

Given N = 12, S = "1A 2A,12A 12A" and T = "12A", your function should return "1,0", 
because one ship was hit and sunk.

Assume that:

N is an integer within the range [1..26];

string S contains the descriptions of rectangular ships of area not greater than 4 cells;

there can be at most one ship located on any map cell (ships do not overlap);

each map cell can appear in string T at most once;

string S and string T contains only valid positions given in specified format.

In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
 **/

function solution(N, S, T) {

    let getAreaOfShip = function (input, bombArea) {

        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

        let pos1 = input.split(" ")[0];
        let pos2 = input.split(" ")[1];
        console.log("getAreaOfShip:", pos1, pos2);
        let coordinates = [];

        if (pos1.length == 0 || pos2.length == 0) {
            coordinates.push("--");
        } else {

            pos1Num = pos1.match(/\d+/)[0]
            pos1 = [pos1Num, pos1.replace(pos1Num, "")]
            pos2Num = pos2.match(/\d+/)[0]
            pos2 = [pos2Num, pos2.replace(pos2Num, "")]

            if (pos1[1] != pos2[1]) {
                let diff = alphabet.indexOf(pos2[1]) - alphabet.indexOf(pos1[1]);
                for (let i = 0; i < diff + 1; i++) {
                    let index = alphabet.indexOf(pos1[1]) + i;
                    let x = alphabet[index];

                    for (let y = parseInt(pos1[0]); y < parseInt(pos2[0]) + 1; y++) {
                        let coordinate = `${y}${x}`;
                        console.log("1new coordinate: ", coordinate);
                        if (bombArea.has(coordinate)) {
                            console.log("HIT!");
                            coordinate = "00";
                        }
                        coordinates.push(coordinate);
                    }

                }
            } else if (pos1[0] != pos2[0]) {

                for (let y = parseInt(pos1[0]); y < parseInt(pos2[0]) + 1; y++) {

                    let diff = alphabet.indexOf(pos2[1]) - alphabet.indexOf(pos1[1]);
                    for (let i = 0; i < diff + 1; i++) {
                        let index = alphabet.indexOf(pos1[1]) + i;
                        let x = alphabet[index];
                        let coordinate = `${y}${x}`;
                        console.log("2new coordinate: ", coordinate);
                        if (bombArea.has(coordinate)) {
                            console.log("HIT!");
                            coordinate = "00";
                        }
                        coordinates.push(coordinate);
                    }
                }
            } else {
                if (bombArea.has(pos1)) {
                    console.log("HIT!");
                    coordinates.push("00");
                } else {
                    coordinates.push(pos1);
                }
            }
        }
        console.log(coordinates);
        return coordinates;
    }

    console.log("INPUT:", N, "S=", S, "T=", T);

    let bombArea = new Set(T.split(" "));
    console.log("bombArea:", bombArea);

    let totalSunk = 0;
    let totalHit = 0;

    let items = S.split(",");
    let areaList = [];
    for (let i = 0; i < items.length; i++) {
        let area = getAreaOfShip(items[i], bombArea);
        let areaLeft = area.join("").toString().replace(/0/g, "");
        console.log("area: ", area, "-->", areaLeft);

        if (areaLeft.length == 0) {
            totalSunk += 1;
            console.log("totalSunk+1");
        } else if (area.toString().indexOf("0") != -1) {
            totalHit += 1;
            console.log("totalHit+1");
        }

        areaList.push(area);
    }

    console.log("areaList:", areaList);

    let result = `${totalSunk},${totalHit}`;
    console.log("result=", result);
    return result;
}

//solution(4, "1B 2C,2D 4D", "2B 2D 3D 4D 4A")// "1,1" = 1 hit , 1 sunk
solution(3, "1A 1B,2C 2C", "1B", "0,1");// "0,1"  1 hit , 0 sunk
//solution(12, "1A 2A,12A 12A", "12A", "1,0");// "1,0" = 0 hit, 1 sunk
//solution(4, "1B 2C,2D 4D", "2B 2D 3D 4D 4A");
//solution(12, "12A 12B", "12A");// "0,1"
//solution(2, "", "2A");
