

function sayName(){
    console.log("h")
    console.log("i")
    console.log("t")
    console.log("e")
    console.log("s")  
    console.log("h") 
}
// sayName()

//  function addTwoNumbers(number1 ,number2){  // number 1 and number 2 are parameters

//    console.log( number1+number2);
// }
// addTwoNumbers(3,4)     // 3 and null are arguments




function addTwoNumbers(number1 ,number2){  // number 1 and number 2 are parameters
let result= number1+number2;
return result;         
 }
// 3 and null are arguments
const result =addTwoNumbers(3,4)
console.log("result",result)

function userloginuser(username){
    if(username===undefined){
        console.log("please enter a username");
    }
    return `${username} just logged in `

}
console.log(userloginuser());



function calculateCartprice(...num1){
    return num1;

}
console.log(calculateCartprice(200 , 400, 600))

const user={
    username:"hitesh",
    prices:199

}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user); 