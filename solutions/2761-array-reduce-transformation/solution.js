/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {

    var value; 

     if (nums.length === 0) {
        value = init;
        return value;
    } 

    for (let i=0; i < nums.length; i++) {

        if (i < 1) {
            value = fn(init, nums[0]);
        }
        else 
            value = fn(value, nums[i]);
    }

    return value;
};
