
/*
680. Valid Palindrome II

Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.


*/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {

    let ans = false;

    let compareStringByRemoveChar = function (input, ignoreCharIndex) {
        let output = "";
        let output2 = "";
        for (let i = 0; i < input.length; i++) {
            if (i != ignoreCharIndex) {
                output = output + input[i];
                output2 = input[i] + output2;
            }
        }

        //console.log("Compare:", ignoreCharIndex, "Remove ", input[ignoreCharIndex],output, output2);
        if (output == output2) {
            return true;
        } else {
            return false;
        }
    }

    for (let i = -1; i < s.length; i++) {

        let result = compareStringByRemoveChar(s, i);
        if (result == true) {
            ans = true;
            break;
        }
    }

    console.log("@@ OUTPUT: ", ans);
    return ans;
};


var s = "abca";
validPalindrome(s);

var s = "aba";
validPalindrome(s);

var s = "gveilrcbbktuhbtjdkwbgkwrxoltirxtbyfhsbmuoxixvnoidnxdfjunlwqnxdcialvuzbxlxgckmtoxdnfuygsuomtlkmqyrysxlvfdenmliwqmtjgcdxwmybfbssztnwkyyjqryscnvanqhcjnmpecuwapxivgacpdkiqucycvlrhwcvyyxrhjrqnhdxmldxwafigkijptrornrwtkpbssmwmittinzpetkfszeycftqoshxxhddazdapzjycvjjqlybhfcqiizsceqkycspkefdmhgtkdjzrypxdekirmggjgxkwkktmdncpqflactlrlnjrdwtnhojvmzqpljawdhbihbedvubmunidlwbjfogacropoueyjxunndejeprbyobuwomrqeycgqnlzqgilvrroibhigdrzliglblbdchzyetcpvyibvzfeacnbkiiwvnmgsgdpsewwfdjkcbaelvhcerimtqrecmiozptxngkjnzwgnhrkuiobdbvrknuvzyfgwwiskxapzvyjvyeohkfgujndhhfkrfpbbftshwvhilgvcfsrxuakrytfmrwshvsqzenkydebrfwoycnvmmxsdhkebyapgthudqjvnwpwwfbzsqqnkzuisndetqytjajwxjxkrwrxkdwqharaikyksxbfjaofmhsmjttocsnzgqadpqoifhlxyxevrgkpkjqiboktafkrdefrthdmruvwjgeqdauzbpymcuzftofolqestobheaahsokvxyzbztavndtgpvmmhhwcpvdknvbvvqjrqpvafxicpnxjqpnafmhrxalfmyimqpvqodxrytvxfqucsinfdgzbpbpohjxoakjjgafwmhutrxyivrxvvfpjczlwodelknbxgoavptkmvofuldokpoboznmljlhmsmaarotjzsivbirrfptkdimpbenmsdeobpdlebjpduymsamwxrdpotvvchojkcceoogmeyzajysffsyjazyemgooecckjohcvvtopdrxwmasmyudpjbeldpboedsmnebpmidktpfrribviszjtoraamsmhljlmnzobopkodlufovmktpvaogxbnkledowlzcjpfvvxrviyxrtuhmwfagjjkaoxjhopbpbzgdfniscuqfxvtyrxdoqvpqmiymflaxrhmfanpqjxnpcixfavpqrjqvvbvnkdvpcwhhmmvpgtdnvatzbzyxvkoshaaehbotseqlofotfzucmypbzuadqegjwvurmdhtrfedrkfatkobiqjkpkgrvexyxlhfioqpdaqgznscottjmshmfoajfbxskykiarahqwdkxrwrkxjxwjajtyqtednsiuzknqqszbfwwpwnvjqduhtgpaybekhdsxmmvncyowfrbedyknezqsvhswrmftyrkauxrsfcvglihvwhstfbbpfrkfhhdnjugfkhoeyvjyvzpaxksiwwgfyzvunkrvbdboiukrhngwznjkgnxtpzoimcerqtmirechvleabckjdfwwespdgsgmnvwiikbncaefzvbiyvpcteyzhcdblblgilzrdgihbiorrvligqzlnqgcyeqrmowuboybrpejednnuxjyeuoporcagofjbwldinumbuvdebhibhdwajlpqzmvjohntwdrjnlrltcalfqpcndmtkkwkxgjggmrikedxpyrzjdktghmdfekpscykqecsziiqcfhbylqjjvcyjzpadzaddhxxhsoqtfcyezsfktepznittimwmssbpktwrnrortpjikgifawxdlmxdhnqrjhrxyyvcwhrlvcycuqikdpcagvixpawucepmnjchqnavncsyrqjyykwntzssbfbymwxdcgjtmqwilmnedfvlxsyryqmkltmousgyufndxotmkcgxlxbzuvlaicdxnqwlnujfdxndionvxixoumbshfybtxritloxrwkgbwkdjtbhutkbbcrlievgu";
validPalindrome(s);