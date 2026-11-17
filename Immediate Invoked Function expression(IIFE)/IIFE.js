const a=5;
const b= 4;
const c= 3;


const fun3 = (function(a,b,c){
    const val= a*b*c;
    return val;
})(a,b,c);
console.log(fun3);
