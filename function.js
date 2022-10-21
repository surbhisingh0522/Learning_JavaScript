//Non-primitive=> array, objects, function
function sayHi(param){
    //console.log("Hello from sayHi");
    //console.log("param received",param);
    let rval=Math.random()>0.5?true:"less than 0.5";
    return rval;
}
//fn call
//sayHi(10);
//sayHi("Hello");
let rval=sayHi([1,2,3]);
console.log("rval",rval);

//sayHi([1,2,3,4,5]);