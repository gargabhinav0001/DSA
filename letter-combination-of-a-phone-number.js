/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let stringMap = {
        "2": 'abc',
        "3": 'def',
        "4": 'ghi',
        "5": 'jkl',
        "6": 'mno',
        "7": 'pqrs',
        "8": 'tuv',
        "9": 'wxyz'
    };

    let results = [];

    function backtracking(path, index) {

        if (path.length === digits.length) {
            results.push([...path].join(""))
            return;
        }


        let choices = stringMap[digits[index]];

        for (let i = 0; i < choices.length; i++) {
            path.push(choices[i]);
            backtracking(path, index + 1);
            path.pop();
        }
    }
    backtracking([], 0);

    return results;
};
