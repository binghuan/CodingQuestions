/**
 * @param {string[]} A
 * @return {string[]}
 */

const DBG = false;
var commonChars = function (A) {

    if (DBG) console.log("## INPUT: ", A);
    let charsTable = {};
    let commonTable = [];
    let MATCH_LENGTH = A.length;
    for (let i = 0; i < A.length; i++) {
        let word = A[i];
        for (let j = 0; j < word.length; j++) {
            let char = word[j];
            if (!charsTable.hasOwnProperty(char)) {
                charsTable[char] = {};
            }
            if (!charsTable[char].hasOwnProperty(i)) {
                charsTable[char][i] = 1;
            } else {
                charsTable[char][i] += 1;
            }
        }
    }

    if (DBG) console.log("charsTable: \n", charsTable);
    if (DBG) console.log("### OUTPUT: ");

    for (let i = 0; i < Object.keys(charsTable).length; i++) {
        let key = Object.keys(charsTable)[i];

        if (DBG) console.log("Check Key: ", key, charsTable[key]);
        if (Object.keys(charsTable[key]).length == MATCH_LENGTH) {

            let min = 0;
            if (Object.keys(charsTable[key]).length == MATCH_LENGTH) {
                let countArray = [];
                for (let j = 0; j < MATCH_LENGTH; j++) {
                    let element = Object.keys(charsTable[key])[j];
                    countArray.push(charsTable[key][element]);
                }
                min = countArray.sort(function (a, b) { return a - b; })[0];
                //console.log("countArray: ", countArray);

                for (let j = 0; j < min; j++) {
                    if (DBG) console.log("@@@ concat key:", key);
                    commonTable.push(key);
                }
            }
        }
    }

    //console.log("commonTable: ", commonTable);
    console.log(commonTable.sort());
    return commonTable;
};

let input = ["bella", "label", "roller"];
//input = ["cool", "lock", "cook"];
input = ["dbcdjbedfchcbhbecbadeaefefhcaagfghjaidaadeaabaaegj", "hfacgbgcieccadeejddegjffejdjegejbaddaiabdhahbjaiba", "igfaddihhceieadjgjhefaibcfcichcdecjcihfhcgfjeihidf", "jaehjjibbhfdcjjdhecicefjjjdabibahgdaeibfefbbffhjja", "degddigjijggagjgaaeeegfiahhcghbefcbdabeehbihjdeabi", "bjdfedddebaifgadhgdhfjjdafajhiabbjjiidhcdaagajiafh", "ihfjgjjcfeebebjgihdejjdheaeeddiajffjjdbfcfdaabgcei", "jdbhhhigagieacgdabbchegdaefgeebaccdeajiifgfecbdgig", "djhghabfejhcgbdejfcafjbagecbdggehaaddicgejhdgdahaf", "hbaaccbffecibeiabdfeggbahbiehjiejifjjjbbbiiejcejdf", "fadeddbhjehehhjiiehigjdaaiaaebjdaicbefacedfcgbegge", "djhidhibeghjfbdgabgeejgedifdageichiijachhjfeihfieb", "jdiagceichahjbjadhagegbbedhijhgefhfcbhdeefeahghfde", "chhbbaeaeacaccbjiegfadfhabbchjggidahbgdhcadafjfifa", "cdiabdbeaeefjiaadigdgiihajgcbghcfdhicjjfeiciaidjfh", "gfehabegchgidgjbhdighfjbeajhdfaebificjaeahiajjgeab", "agafjbjjhadjaichgfihehdhfaiiaffbijeahegjgfcidhhbed", "gchagffchcjjadhbhhjfiiagejchbgjabadjcbdigdfdfabgee", "ciacjdahajifafhbfbdaddbgbddedhjbbbdbbbfhcidfcbiijg", "dbjjbajjgehcbgfaibjjcbigaijdjaagbfbfcjebahjchdfacg", "bgfifecddgcfefijhccjiaiedhaeahihehiaedjfebejceibid", "hiiigbiddhhejdebjcgjgdfiaijieibbaiibecbjigadejaibj", "hafbbjafdjahdhdfiafedjjdgjghcfffcjedgjeffbeahfgbcf", "bfcjigdiadjhfjjbghcdhchgaiefdijgcbbcjfaehccgddigah", "aehfeiccfieaihijcgfahceadeiffefiegciageeaieghadgda", "eafcdbagdafjdbicbabhihfhiefdiehhiiijigfhajfcbgajff", "ecgdieegbfcijifhgicihhfhgbebgbjiiegbbfhijbcbecgigd", "idhjgaccgaaieidbeidbcadhidhdddgjceccjgehjcidebeidi", "bchhdjiiacccidhhcbchehcaddeccfecbcedidhhbjcigddhfg", "ieddgabeciffjfchdggifjcebadchbdcdgiagefhecifgifdcj", "bedcfhjehehdhafeadbdffbadjhgefjdchjghjedhgadihaedc", "cfhcigdaaaddfjifaadejdgdfdfdhfebicfedcefbcgbbdbibh", "jbddeaghjegebciaihfjffceiaehgaeecijefafficbajehgej", "dbejheeaeadbaifegcjjhahggdbgjbeieghbeijjedjdbfiecc", "dgdbefabibgeehgbdjggidagdfhjdgahbjidgejjfgcafcjddf", "hcbaggjggcbcgjbceihbghdhbediacdfgfheghddecedddjggf", "cdhhaaieachbfgcigidjfjcihecdegifedhadgacieciihafhf", "hhicegfcdihbddjaibadeacbjdjjhjdeegjjaedgjegbbbbifg", "bjcggafgaajegfcihfaicfhcdfdhgfegjfcbadighbciadhcfd", "cabdajhgciaihgdccghbjcbgfighjideehbejjhhihgdjebgje", "caaafahejcbedgibhadcfddaejhhaaicejefeghjhijcbfaegd", "fggbheafgcbgdcfibiajdachcifhcfdfebbfcjfgefebebbdcc", "gdiabbdaicaijehcjhhibbeeidjdjicdbddiaacciehehdbhch", "ddbahiacdhccafecfhihfhdeicghdjbfbdehcjdhjhjehdfjhc", "hadjggchcjdfaaicggigjgjaeegjfccccejeghbfcgajeccfee", "ghcafaieijddfiebcibdccjijafiieeidjdiadbcjhbdjaeiec", "gdfjagafhcaihhejfjcjecccfbcidhcidffebcigjdbafjgieh", "ifafgibebjghgiaachefhggeibejfdhfaiciighejbiahiihii", "caecdaaihahejaidgcecejgcdfhhdeghjacgeaefhjbijbbhgh", "hhfdeajjijgeechaieehfcfjaaaadjbejibjfajijcfhicbjhb"];
commonChars(input);
