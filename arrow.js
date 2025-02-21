const user={
username:"hitesh",
price:99,

welcomemessage:function(){
    console.log(`${this.username}, welcome to website`)
    console.log(this)
}


}
// user.welcomemessage()
// user.username="sam";
// user.welcomemessage()
// console.log(this)



// 

function chai(){
let username="hitesh"
console.log(this.username) // undefind
}


 const chai1=function (){
    let username="hitesh"
    console.log(this.username) // undefind
    }
     console.log( this.username)




    //  basic arrow function
chai=()=>{

}



     const add2=(num1,num2)=>{
if(true)
        return num1+num2;
        let arr=[1,2,3,4,5,4]
        
     }
     console.log(add2(2,3));