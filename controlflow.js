const isLoggedIn=true;

if(2==="2"){
    console.log("executed");

}

const temperature=45;
// if(temperature<50){
//     console.log("less than 50");
// }
// else{
// console.log("temperature is greater than 59")
// }
// console.log("Execute");
// < ,> , <=  , >= ,  == , != , ===  , !==

// const score=200;
// if(score>100){
//     const power="fly";
//     console.log(`user power : ${power}`);
// }


// const balance=1000;
// if(balance < 500){
// console.log("less than")    
// } 
// else if(balance<750){
//     console.log("less than 750");
// }
// else if(balance<900){
// console.log("less than 900")
// }
// else{
//     console.log("less than 1200");
// }


const userLOggIn=true;
const debitCard=true;
const isLoggedInGoogle=false;
const isLoggedInFromEmail=true;

if(userLOggIn && debitCard && isLoggedInGoogle){
    console.log("Allow to buy course");
}
if(isLoggedInFromEmail || isLoggedInGoogle){
    console.log("User loggged in");
}


//   switch

// switch(key){
//     case value:
//         // break;
//         case value:
//             break;
// }
 
const month=3;
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}