/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var Obj = {};
    var value = init;

    var increment = function() {
            value = value+1;
            return value;

    }

    var decrement = function() {
        value = value-1;
        return value ;
    }

    var reset = function() {
        value = init;
        return value;
    }

    Obj.increment = increment;
    Obj.decrement = decrement;
    Obj.reset = reset;

    return Obj;
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
