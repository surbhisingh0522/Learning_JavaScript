//print
console.log("Hello JS");
//declare variable
//JS only tells you that it is a variable
let a;
//undefined;
a=10;
a=10.1;
a="Hello I am a string";
console.log("variable contains ",a);
a=null;
a=true;
//variable types: primitive types:number, string, boolean,null,symbol

//if else, loops
let num=10;
for(let i=1;i<=num;i++){
    console.log("Number is ",i);
}

//is prime
let number=23;
let flag=true;
for(let div=2;div<number/2;div++){
    if(number%div==0){
        flag=false;
        break;
    }
}
if(flag==true){
    console.log(number ," is prime");
}else{
    console.log(number, "is not prime");
}