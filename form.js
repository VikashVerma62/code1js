VANTA.CLOUDS({
    el: "#new",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00
  })



let sub=()=>{
    let inpname=document.querySelector("#name").value;
    let inpnum=document.querySelector("#number").value;
    let inpemail=document.querySelector("#email").value;
    let inppass=document.querySelector("#password").value;
    let inpcpass=document.querySelector("#cpass").value;


    let errorname=document.querySelector("#errorname");
    let errornum=document.querySelector("#errornum");
    let erroremail=document.querySelector("#erroremail");
    let errorpass=document.querySelector("#errorpass");
    let errorcpass=document.querySelector("#errorcpass");


    if(inpname==""){
        errorname.innerHTML="please fill the name";
        errorname.style.color="red";
        return false;
    }



    if(inpnum==""){
        errornum.innerHTML="please fill the number field";
        errornum.style.color="red";
        return false;
    }
     else if(isNaN(inpnum) ){
        errornum.innerHTML="please enter number only";
        errornum.style.color="red";
        return false;
     }
     else if(inpnum.length!=10){
        errornum.innerHTML="please enter 10 digit only";
        errornum.style.color="red";
        return false;
     }
    if(inpemail==""){
        erroremail.innerHTML="please enter the email";
        erroremail.style.color="red";
        return false;
    }


     else if(!(inpemail.includes("@") && inpemail.includes(".com"))){
        inpemail.innerHTML="please enter valid email";
        inpemail.style.color="red";
        return false;
     }

    if(inppass==""){
        errorpass.innerHTML="please enter the password field";
        errorpass.style.color="red";
        return false;

    }
    else if((inppass.match[/1234567890 /])&& inppass.match[/!@#$%^&*() /] && inppass.match[/ a-z/] && inppass.match[/ A-Z/]){
        errorpass.innerHTML="enter strong password";
        errorpass.style.color="red";
        return false;
    }         
    if(inpcpass==""){
        errorcpass.innerHTML="please fill the conform pass field";
        errorcpass.style.color="red";
        return false;
    }

    if(inppass!=inpcpass){
        errorcpass.innerHTML="password and conform password is not match";
        errorcpass.style.color="red";
      return false;
    }
}