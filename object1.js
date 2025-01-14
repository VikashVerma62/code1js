// const tinderUser=new object()=singletan object
const tinderUser={} 
 tinderUser.id="1234abc";
 tinderUser.name="sam";
 tinderUser.LoggedIN=false;
//  console.log(tinderUser);

const regularUser={
    email:"sam@344344",
    fullname:{
        firstname:"hitesh",
        lastname:"choudhary"


    }
}
// console.log(regularUser.fullname.firstname);


  const obj1={1:"a", 2:"b" }
  const obj2={3:"a", 4:"b"}
//   const obj3=Object.assign( {},obj1,obj2);
  // console.log(obj3);
  const obj3={...obj1,...obj2}
  // console.log(obj3); 
  
  console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));
  