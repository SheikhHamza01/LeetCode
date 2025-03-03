/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let val = init; // Store the current value

    return {
        increment: function() {
            return ++val; // Increment and update val
        },
        decrement: function() {
            return --val; // Decrement and update val
        },
        reset: function() {
            val = init; // Reset to initial value
            return val;
        }
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */