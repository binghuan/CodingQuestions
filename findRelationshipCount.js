// Array [N][N]
// input: A=B B=C D=F F=G
// Output: 2
// A=B=C D=F=G
//
// For example:
// (A , B)
// (C , D)
// ­­­2→A==BorC==D
//
// input[2] table ­­­>
//
// AB
// A B == 2? or == 1?
// ExpectedAnswerweillbe ==matchlist.lengt⇒ howmanymatchs. mathlist → 0 → N
// 檢查開發人 提交的代碼。
//
// (AB) =>means that A equal to B
// A B C
// D F G
// -> A == B, A == B == C

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function findRelationship() {

    var matchList = [];

    for(var i=0; i< input.length; i++) {
        var chars = input[i].split(",");
        var charsForRe = "";

        for(var j=0; j< chars.length; j++) {
            if(charsForRe.length > 0 ) {
                charsForRe += "|";
            }
            charsForRe += "" + chars[j];
        }

        var re = new RegExp(charsForRe, "i");

        var nextIndex = i+1;
        var relationship = [i];
        for(var k = 0; k< input.length ; k++) {
            if(k == i ) {
                continue;
            }

            var found = input[k].match(re);
            console.log("ready to check ", input[k], charsForRe, found);

            if(found != null) {
                    // setup relationship
                relationship.push(k);
            }
        }

        relationship = relationship.sort();
        console.log("get relationship: " + relationship, "size: " + relationship.length);

        matchList.push(relationship.toString());
    }

    console.log("return relationship: ",matchList);
    var result = matchList.filter(onlyUnique);

    console.log("==> return relationship count: ",result.length);

}

var input = ["A,B", "C,D"];
findRelationship(input);
