// Date
// let myDate=new Date()
// console.log(myDate.toString())
// console.log(myDate.toLocaleString());
// let myCreatesDate =new Date(2023,0,23);
// console.log(myCreatesDate.toDateString());

let ok=()=>{
    let ans=new Date()

    let ans1=ans.getFullYear()
    console.log(ans1);

    let ans2=ans.getMonth()
    console.log(ans2);

    let ans3=ans.getDay()
    console.log(ans3)

    let ans4=ans.getDate()
    console.log(ans4);

    let ans5=ans.getHours();
    console.log(ans5);

    let ans6=ans.getMinutes()
    console.log(ans6);

    let ans7=ans.getSeconds()
    console.log(ans7);
    let ans8=ans.getMilliseconds()
    console.log(ans8)

    let hour=ans.getHours();
    if(hour>=5 && hour<12){
        console.log("good morning");
    }
    else if(hour>12 && hour<16){
        console.log("good afternon");
    }
    else if(hour>17 && hour<19){
        console.log("good evening ");
    }
    else if(hour>=20 && hour<24){
        console.log("good night");
    }


    let myTimeStamp=Date.now();
    console.log(myTimeStamp);
    
    let myCreatesDate=new Date("01-14-2024");
    console.log(myCreatesDate);
}
ok();