let run1=()=>{
    localStorage.setItem("Name", "vikash");
    localStorage.setItem("age", "20")
    localStorage.setItem("cgpa", "6.5");
    localStorage.setItem("sgpa","7.5")

}
let show=document.querySelector("#show")
show.innerHTML=localStorage.getItem("Name")



let logout=()=>{
    localStorage.removeItem("Name");
    localStorage.removeItem("age");
}