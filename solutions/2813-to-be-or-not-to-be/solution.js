/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    var Obj = {};
    
    var toBe = function (value) {
        if (val === value) {
            return true;
        }
        else {
            throw new Error("Not Equal");
        }
    }

    var notToBe = function (value) {
        if (val !== value) {
            return true;
        }
        else {
            throw new Error("Equal");
        }
    }

    Obj.toBe = toBe;
    Obj.notToBe = notToBe;

    return Obj;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

 expect(5).toBe(5); // true
 //expect(5).notToBe(5); // throws "Equal"
