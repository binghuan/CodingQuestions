// reference: http://www.programmingsimplified.com/c/source-code/c-program-merge-two-arrays


var arrayA = [1, 4, 6];
var arrayB = [-1, 2, 3];



function methodOne(arrayA, arrayB) {

    console.log("input arrayA: ", JSON.stringify(arrayA) );
    console.log("input arrayB: ", JSON.stringify(arrayB) );

    var arrayC = arrayA.concat(arrayB);
    console.log("merge arrayA+arrayB first: ", JSON.stringify(arrayC) + ", length: " + arrayC.length);

    // sort the large array.

    var temp;
    for(var i=0; i< arrayC.length; i++) {
        for(var j=(i+1); j< arrayC.length; j++) {
            if( j < arrayC.length) {
                console.log("method1: check index " ,i,j);
                if(arrayC[j] < arrayC[i]) {
                    temp = arrayC[i];
                    arrayC[i] = arrayC[j]
                    arrayC[j] = temp;
                }

            }

        }

    }

    console.log("method1 ==> output arrayC: ", JSON.stringify(arrayC) );
}


function merge(arrayA, arrayB) {




    var lengthA = arrayA.length;
    var lengthB = arrayB.length;

    // allocate a array to be the final result
    var arrayC = [];

    var index =0;
    var indexA =0;
    var indexB =0;


    //methodOne();

}


// main -

methodOne(arrayA, arrayB);
//merge(arrayA, arrayB);
