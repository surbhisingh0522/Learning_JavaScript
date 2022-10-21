let cp=require("child_process");
const { Console } = require("console");
console.log("Trying to open calculator");
//cp.execSync("calc");  //-----will open calculator
//cp.execSync("code");  //-----will open vs code
//cp.execSync("start chrome https:\\www.pepcoding.com");     //will open pepcoding website in chrome browser
console.log("opened calculator");
let output=cp.execSync("node abc.js");
console.log("output "+output);