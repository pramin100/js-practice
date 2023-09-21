// Immediately Invoked function Expression(IIFE)

(function chai(){
    // name IIFE
    console.log('DB Connected');
})();

((name) => {
    // IIFE
    console.log(`DB connected Two ${name}`)
})("Pramin")