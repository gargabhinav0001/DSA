/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (arr, target) {
    let result = [], len = arr.length;

    function backtracking(path, start, sum) {

        if (sum === target) {
            result.push([...path])
            return;
        }

        for (let i = start; i < len; i++) {

            sum = sum + arr[i];
            path.push(arr[i]);

            if (sum > target) {
                sum = sum - arr[i];
                path.pop();
                continue;
            }

            backtracking(path, i, sum);
            sum = sum - arr[i];
            path.pop();


        }
    }
    backtracking([], 0, 0);

    return result;
};
