let sub=()=>{
    let inpname=document.querySelector("#name").value
    let inpnum=document.querySelector("#number").value
    let inpemail=document.querySelector("#email").value
    let inpass=document.querySelector("#pass").value
    let inpcpass=document.querySelector("#cpass").value
    
    
    let errorname=document.querySelector("#errorname")
    let errornum=document.querySelector("#errornum")
    let erroremail=document.querySelector("#erroremail")
    let errorpass=document.querySelector("#errorpass")
    let errorcpass=document.querySelector("#errorcpass")
    
    
    if(inpname==""){
        errorname.innerHTML="please fill the name field"
        errorname.style.color="red";
        return false;
    }
    else if(isNaN(inpnum)){   // if Number than ans will be false 
        errornum.innerHTML="please enter number only";
        errornum.style.color="red";
        return false;
    }
    else if(inpnum.length!==10){
        errornum.innerHTML="please enter 10 digit only";
        errornum.style.color="red";
        return false;
    }
    else if(!(inpemail.includes("@"))&& (inpemail.includes(".com"))){
    
    erroremail.innerHTML="please enter valid email";
    return false;
    
    }
    else if((inpass.match([/1234567890 /])) && ([/!@#$%^&*() /]) &&(inpass.match([/a-z /])) &&(/A-Z/)){
    errorpass.innerHTML="enter strong password";
    errorpass.style.color="red";
    }
    
    
    if(inpnum==""){
        errornum.innerHTML="please fill the number field"
        errornum.style.color="red";
        return false;
    }
    
    if(inpemail==""){
        erroremail.innerHTML="please fill the number field"
        erroremail.style.color="red";
        return false;
    }
    
    if(inpass==""){
        errorpass.innerHTML="please fill the number field"
        errorpass.style.color="red";
        return false;
    }
    
    
    if(inpcpass==""){
        errorcpass.innerHTML="please fill the number field"
        errorcpass.style.color="red";
        return false;
    }
    // password and conform passward is same to submit the form
    
    if(inpass!=inpcpass){
        errorcpass.innerHTML="comform password is wrong";
        errorcpass.style.color="red";
        return false;
    }
    
    
    
    
    
    }