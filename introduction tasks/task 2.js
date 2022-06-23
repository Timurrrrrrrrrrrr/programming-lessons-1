let a=42;
console.log(typeof a,a);

let b='hello'
console.log(typeof b,b);

let c = true;
console.log(typeof c,c); // "boolean"

let d = undefined
console.log(typeof d,d); // "undefined"

let e = Symbol('klyg')
console.log(typeof e,e); // "symbol"
let f = new Object(123);
console.log(typeof f,f); // "object"
let g=null;
console.log(typeof g,g); // "object"

function showMessage(){
}
console.log(typeof showMessage, showMessage); // "function"

