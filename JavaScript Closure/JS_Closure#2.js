function outerFunction(){
    let counter = 0;                  //outer variable 

    function innerFunction(){
        counter++;                    //Inner function is using outer variable
        console.log(counter);
    }
    return innerFunction;             //inner function ki value return krdega

}
const myCounter = outerFunction();    //outer function finish hiogya

myCounter();
myCounter();
myCounter();