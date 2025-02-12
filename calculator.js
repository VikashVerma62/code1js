let store="";
let cal=(value)=>{
    store=store+value 
    let show=document.querySelector("#display")
    show.innerHTML=store;

}
let res=()=>{
    let show=document.querySelector("#display");
    show.innerHTML=eval(store)
    store.toString()
}

let AC=()=>{
    store="";
    let show=document.querySelector("#display");
    show.innerHTML=store
}

let del=()=>{
    let show=document.querySelector("#display")

    store=store.slice(0,-1);
    show.innerHTML=store; 

}