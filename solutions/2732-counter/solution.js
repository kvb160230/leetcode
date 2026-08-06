/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    var counter = 0;
    return function() {

        if (counter == 0) {
            counter++;
            return n;
        }
        else {
            n++;
            return n;
        }
    };

};


 const counter = createCounter(10)
 counter() // 10
 //counter() // 11
 //counter() // 12

