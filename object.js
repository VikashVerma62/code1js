//  singleton 

//  object literals

const jsUser={
"full name":"hitesh choudhary",
    name:"hitesh",
    age:18,
    location:"jaipur",
    email:"afgva@gmail.com",
    lastLogDays:["monday", "tuesday", "wensday"]

}

console.log(jsUser.name);// both are the way to access the object values 
console.log(jsUser["full name"]); 

jsUser.email="hitesh@1234.com";
// Object.freeze(jsUser);b
jsUser.email="hitesh@34433";
console.log(jsUser);
jsUser.greeting=function(){
    console.log("hello js user");

    jsUser.greetingTw=function(){
        console.log(`hello js user , ${this.name} `);
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());
}
