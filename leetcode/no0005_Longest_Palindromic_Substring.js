/**
 * @param {string} s
 * @return {string}
 */

const DBG = false;
var isPalindromicString = function (words) {


    let length = parseInt(words.length / 2);
    let lengthOfWords = words.length;
    if (DBG) console.log("lengthOfWords:", lengthOfWords, words);

    let result = true;
    for (let i = 0; i < length; i++) {
        let leftChar = words[i];
        let rightChar = words[lengthOfWords - i - 1];
        if (DBG) console.log("check L->", leftChar, ", R->", rightChar);
        if (leftChar != rightChar) {
            result = false;
            break;
        }
    }

    if (DBG) console.log(">> isPalindromicString: ", result, words);
    return result;
}

var longestPalindrome = function (s) {
    let length = s.length;

    if (length == 0) {
        return '';
    }

    if (length == 1) {
        return s;
    }

    if (length == 2 && !isPalindromicString(s)) {
        if (DBG) console.log(s[0]);
        return s[0];
    }

    let maxLengthOfWords = '';
    for (let i = 0; i < length; i++) {
        let words = s[i];
        if (DBG) console.log('!! start char:', words);
        for (let j = i + 1; j < length; j++) {
            words = words + s[j];
            if (DBG) console.log('--- check char:', words);
            if (words[0] == words[words.length - 1] &&
                words.length >= maxLengthOfWords.length &&
                isPalindromicString(words)) {
                if (DBG) console.log('>>', words);
                maxLengthOfWords = words;
            }
        }
    }

    if (maxLengthOfWords.length == 0) {
        maxLengthOfWords = s[0];
    }
    console.log('## OUTPUT:', maxLengthOfWords);
    return maxLengthOfWords;
};
let input = 'bb';
//input = 'ac';
//input = 'babad';
//input ='civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth';
//input = 'kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv';
longestPalindrome(input);
