let fun=()=>{
    let pera=document.querySelector("#pera");
    //  pera.innerHTML="Mern is amazing Learning Mern is fun";
     if(pera.style.display=='none'){
        pera.style.display='block';
     }
     else{
        pera.style.display='none';
     }
}


// let fun2=()=>{
//    let fun= document.querySelector("#pera")
//    pera()
// }
// alert("hello guys") 
// prompt("hello hello guys")
// confirm("hello hello hello guys confirm")

// let fun1=()=>{


    // let num1=12;
    // let num2=12;
    // alert(parseInt("sum is" + (num1+num2)));
    // console.log(num1+num2);
//    confirm((Number (parseInt("the sum is" +(num1+num2)))));

// let num1=parseInt(prompt("enter 1 number"))
// let num2=parseInt(prompt("enter 2 number"));
// alert("sum is " +(num1+num2))



// let age=parseInt(prompt("enter age:"))
// if(age>=18){
//     alert("you are eligible for vote:")
// }
// else{
//     alert("you are not eligible for vote:")
// }

// let nm1=confirm("you are certified")
// let nm2=confirm("have you complete any course")
// if(nm1 && nm1){
//     alert("confirm and ok")
// }
// else{
//     alert("not completed")
// }


// let number=prompt("enter a number")
// if(number%2==0){
//     confirm("Even")
// }
// else{
//     alert("Odd")
// }

// let number1=prompt("enter a number")
// if(number1>0){  
//     alert("Number is positive")
// }
// else{
//     alert("Number is negative")
// }
// }

// let marks=prompt("enter your marks");
// if(marks>33){
//     alert("pass")
// }
// else{
//     alert("fail")
// }


// let nm1;
// for(let nm1=0; nm1<50; nm1++){
//     alert(nm1);
//     nm1=nm1+4;


// }
// }
// // fun1()



// let run=()=>{
//   let hello=  document.querySelector("#id")
//   hello.innerHTML="hello coading world";
//   hello.style.color="red";
//   hello.style.fontSize="100px";

// }


// let run1=()=>{
//     let button=document.querySelector("#iid")
//   let hello1=  document.querySelector("#id1")
//   if(hello1.style.display=='none' ){
    
//     hello1.style.display='block';
//   }
//   else{
//     hello1.style.display='none';
//   }
// }

// let run2=()=>{
//  let hello2= document.querySelector("#id2")
//  hello2.innerHTML="this is green color";
// }


let run4=()=>{
  let pera=document.querySelector("#id3");
  //  pera.innerHTML="Mern is amazing Learning Mern is fun";
   if(pera.style.display=='none'){
      pera.style.display='block';
   }
   else{
      pera.style.display='none';
   }

   pera.style.backgroundColor='green';


}

let run5=()=>{
 let p= document.querySelector("#id4")

}



let count=0;
let incr=()=>{
  count=count+5;
  let p=document.querySelector("#id4")
  p.innerHTML=count;
}


let dec=()=>{
  count=count-5;
  let p=document.querySelector("#id4")
  p.innerHTML=count;
}