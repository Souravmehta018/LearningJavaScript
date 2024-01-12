//Immidiately Invoked Function Expression (IIFE)

    (function xyz() {                           //named iffe
        console.log("IIFE")
    })();
    //first () represent the function defined & second () represent the function call / function execution
    // We need to use ; to define the scope of the function to be immidiately executed

    // IIFE is a good practice to avoid global scope pollution

    (function(name) {
        console.log(name)
    })('Sourav')