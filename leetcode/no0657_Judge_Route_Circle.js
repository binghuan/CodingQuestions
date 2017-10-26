/*
657. Judge Route Circle

Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

Example 1:
Input: "UD"
Output: true
Example 2:
Input: "LL"
Output: false
*/


/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    // assume the start point is 0,0

    var history = [];
    var x=0;
    var y=0;

    history.push(x + "," + y);

    for(var i=0; i< moves.length ; i++) {
        var move = moves[i];
        if(move == "U") {
            y += 1;
        } else if( move == "D") {
            y -= 1;
        } else if( move == "L") {
            x -= 1;
        } else if (move == "R") {
            x += 1;
        }
        var next = x + "," + y
        
        //console.log(pos, next , " --> ", history);
        if(i == moves.length -1) {
            var pos = history.indexOf(next);
            if(pos == 0) {
                console.log(true);
                return true;     
            }
            
        } 
        history.push(next);
    }

    console.log(false);
    return false;
};