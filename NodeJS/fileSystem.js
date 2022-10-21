//filesystem
//FILES -> CREATE     ,READ          ,UPDATE         ,DELETE
//    open -w,         readfileSync     appendFile      unlinkSync
//writefileSync
let fs=require("fs");
//READ
let buffer=fs.readFileSync("abc.js");
//console.log("bin data "+buffer);
//CREATE
//fs.openSync("abc.txt","w");
//writeFileSync,openSync{ no file->create and if content exists-> content replace}
//fs.writeFileSync("abc.txt","Hum aaj bahut khush  nahi hai");
//UPDATE
//fs.appendFileSync("abc.txt","Bhai khush kyu nahi hai");

//FOLDER(directory)
//create -> mkdirSync
//read  -> readdirSync
//delete  -> rmdirSync
//fs.mkdirSync("meriDirectory");
//fs.writeFileSync("meriDirectory/meriFile.txt","Mera content");
// let content=fs.readdirSync("meriDirectory");
// console.log(content);
// for(let i=0;i<content.length;i++){
//     console.log("file ",content[i],"is removed");
//     //REMOVE FILE
//     fs.unlinkSync("meriDirectory/"+content[i]);
// }

//REMOVE FOLDER
//fs.rmdirSync("meriDirectory");
//fs.existSync -> if a file exist at a path ->true/false
// let doesPathExist=fs.existsSync("abc.txt");
// console.log(doesPathExist);
// //fs.lstatSync -> the path u are giving is of a file or a folder
// let detailsObj=fs.lstatSync(__dirname +"\\fileSystem.js");
// let ans=detailsObj.isDirectory();
// console.log(ans);
// ans=detailsObj.isFile();
// console.log(ans);


for(let i=1;i<=10;i++){
    let dirPathToMake=`Lecture -${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake+"\\"+"readme.md",`# readme for ${i}`);
}