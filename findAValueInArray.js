    var myarray = [];
    myarray[0]=[1, 3, 4, 5];
    myarray[1]=[2, 4, 6, 7];
    myarray[2]=[3, 8, 9, 10];

    for(var i=0; i < myarray.length ; i++) {
            for( var j =0; j< myarray[i].length; j++) {
                if(myarray[i][j]===8) {
                    console.log( 'value 8 is found at index ', i, j);
                }
            }
    }
