/*
    Question: 
        Give a width = N , 
        N must be odd. 
        Please print hourglass with width = N 
        example: 
            ## INPUT
                width = 5; 
            ## OUTPUT
                *****
                 ***
                  *
                 ***
                *****
*/
/**
 * @param {number} x
 * @return null
 */
function printStars(width) {
    const DBG = false;
    console.log("## INPUT: width=", width);
    console.log(".....................................");

    let totalLines = 0;
    let maxStars = width;
    while (maxStars != 1) {
        maxStars -= 2;
        totalLines += 1;
    }

    totalLines = totalLines * 2 + 1;

    let offset = 0;
    let middleLine = parseInt(totalLines / 2) + 1;

    if (DBG) console.log("Total Lines: ", totalLines, "middleLine=", middleLine);

    for (let line = 0; line < totalLines; line++) {

        if (DBG) process.stdout.write(line.toString());
        for (let i = 0; i < offset; i++) {
            process.stdout.write(" ");
        }

        for (let i = 0; i < width - offset * 2; i++) {
            process.stdout.write("*");
        }
        if (DBG) process.stdout.write(offset.toString());

        if (line < middleLine - 1) {
            offset += 1;
        } else if (line >= middleLine - 1) {
            offset -= 1;
        }
        console.log("");
    }
    console.log(".....................................");
}

let input = 5;
printStars(input);
input = 7;
printStars(input);