/*
*
* Complete the 'howMany' function below.
*
*
* The function is expected to return an INTEGER. * The function accepts STRING sentence as parameter.
*/
function howMany(sentence) {
    let words = sentence.replace(/,|\.|\?|-/g, "").split(" ");
    console.log(words);
    let index = 0;
    let count = 0; function hasNumber(myString) {
        return /\d/.test(myString);
    }
    words.forEach((word) => {
        word = word.trim();
        console.log(`${index}: ${word}`);
        if (/^[a-zA-Z]/.test(word) && word.indexOf("[") == -1) {
            count += 1;
            index += 1;
        }
    });

    console.log("OUTPUT:", count);
    return count;
}

howMany("How many eggs are in a half-dozen, 13?");