// Write a function createHelloWorld. 
// It should return a new function that always returns "Hello World".

var createHelloWorld = function() {
    return () => "Hello World"
};

/* Tests
console.log(createHelloWorld()()) 

I used () twice because I needed to call both functions
*/

