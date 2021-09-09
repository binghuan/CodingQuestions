/* 
    ## input

    width: 3
    height: 4
    enemies: 2

    Please implement a function to print following matric. 
    0, 0, 0, 
    0, 0, 1, 
    0, 1, 0, 
    0, 0, 0, 

    1: an enemy existed. 
    0: there is no enemy. 
*/

function printMatrix(width, height, enemies) {

    // allocate enemy in some box. 
    let enemyBox = [];
    for (let i = 0; i < width * height; i++) {
        if (i < enemies) {
            enemyBox.push(1);
        } else {
            enemyBox.push(0);
        }
    }
    //console.log("enemyBox:", enemyBox);
    function drawEnemy() {
        let randonBoxIndex = Math.floor(Math.random() * enemyBox.length);
        let isEnemyExisted = enemyBox[randonBoxIndex];
        // remove box by index
        enemyBox = enemyBox.filter(function (value, index, arr) {
            return index != randonBoxIndex;
        })
        return isEnemyExisted;
    }

    console.log("// --------------------------------------------------------->");
    let rows = [];
    for (let i = 0; i < height; i++) {
        let columns = [];
        for (let j = 0; j < width; j++) {
            columns.push(drawEnemy());
        }

        rows.push(columns);
        console.log(columns.toString() + ",");
    }
    console.log("// ---------------------------------------------------------<");
    console.log("OUTPUT", rows);
}
printMatrix(3, 4, 2);

// coding problem : from Amazon