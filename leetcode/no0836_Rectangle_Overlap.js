/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    
    let aLeft = Math.min(rec1[0],rec1[2]);
    let aRight = Math.max(rec1[0],rec1[2]);
    let aTop = Math.min(rec1[1],rec1[3]);
    let aBottom = Math.max(rec1[1],rec1[3]);
    
    let bLeft = Math.min(rec2[0],rec2[2]);
    let bRight = Math.max(rec2[0],rec2[2]);
    let bTop = Math.min(rec2[1],rec2[3]);
    let bBottom = Math.max(rec2[1],rec2[3]);
    
    let result = true;
    // case#1
    if(aLeft <= bLeft && aRight <= bLeft) {
        result = false;
        console.log("c1");
    }
    
    // case#2
    if(aRight >= bRight && aLeft >= bRight) {
        result = false;
        console.log("c2");
    }
    
    // case#3
    if(aTop <= bTop && aBottom <= bTop) {
        return false;
        console.log("c3");
    }
    
    // case#4
    if(aTop >= bBottom && aBottom >= bBottom) {
        return false;
        console.log("c4");
    }
    
    
    
    return result;
    
};