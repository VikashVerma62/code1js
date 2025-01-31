let sub=()=>{
    let inpname=document.querySelector("#name").value
    let inpnum=document.querySelector("#number").value
    let inpemail=document.querySelector("#email").value
    let inppass=document.querySelector("#password").value
    let inpcpass=document.querySelector("#cpass").value


let errorname=document.querySelector("#errorname")
let errornum=document.querySelector("#errornum")
let erroremail=document.querySelector("#erroremail")
let errorpass=document.querySelector("#errorpass")
let errorcpass=document.querySelector("#errorcpass")

if(inpname==""){
    errorname.innerHTML="please fill the name";
    errorname.style.color="red";
    return false;
}


if(inpnum==""){
    errornum.innerHTML="please fill the number";
    errornum.style.color="red";
    return false

}

if(inpemail==""){
    erroremail.innerHTML="please fill the email";
    erroremail.style.color="red"
    return false;
}

if(inppass==""){
    errorpass.innerHTML="please enter the password";
    errorpass.style.color="red";
    return false;
}


if(inpcpass==""){
    errorcpass.innerHTML="please enter conform password";
    errorcpass.style.color="red";
    return false;
}
}