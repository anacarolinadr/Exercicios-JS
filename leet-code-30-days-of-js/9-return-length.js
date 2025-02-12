// Write a function argumentsLength that returns the count of arguments passed to it.

var argumentsLength = function(...args) {
    let numberArgs = args.length;
    return numberArgs;
};

/* Tests
console.log(argumentsLength(3, 4, {}, "aa"))
*/