// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log("DB Connected");
})();

// IIFE is used to prevent difficulties from global scope pollution
//Semi colon is necessary because IIFE does not know when to stop context

( () => {
    console.log("DB Connected 2");
})();

( (name) => {
    console.log(`DB Connected ${name}` );
})('abc');
