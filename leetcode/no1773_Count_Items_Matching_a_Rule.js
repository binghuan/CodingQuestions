/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {

    let numberOfMatches = 0;
    items.forEach((item) => {
        let _type = item[0];
        let _color = item[1];
        let _name = item[2];

        if (ruleKey == "type" && _type == ruleValue) {
            numberOfMatches += 1;
        } else if (ruleKey == "color" && _color == ruleValue) {
            numberOfMatches += 1;
        } else if (ruleKey == "name" && _name == ruleValue) {
            numberOfMatches += 1;
        }
    })

    return numberOfMatches;
};

// no1773_Count_Items_Matching_a_Rule.js
