const name="hitesh";
const repoCount=50;
console.log(name + repoCount + " value");   //constatination of string;

console.log(`Hello my is ${name} and my repo count is ${repoCount}`);


const gameName=new String ('hiteshhc');
console.log(gameName.length);
console.log(gameName[0]);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

 const newString=gameName.substring(0,4);
 console.log(newString);
const anotherString= gameName.slice(-8,4);
console.log(anotherString);


const newString1="  hitesh   ";
console.log(newString1);
console.log(newString1.trim())

const url="http://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'));  // to check the keywords prensent in the string or not.

console.log(gameName.split())

let name1="vikash verma";
const number=55;
let new1="my name is ";
console.log(` ${new1} ${name1} and my number is ${number}`);



