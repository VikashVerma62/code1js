


// var state=[1,2,3,4];
// var arr2=state;
// arr2.pop();
// var arr=[1,2,3,4];
// var state1=[...arr]// this is real copy of arr not reference

// state1.pop();


var state={name:"harse", age:26}
var copy={...state}
copy.name="harshita";
state=copy;




// destructuring

var obj={name:"harsh", age:25, email:"lalallala@gmail.com"};
const {email}=obj;


var obj1=[12, function(){}, 13]
var [first,,sec]=obj1;



 // map    / map return all the value as it is but filter return all the value which gives true by the condition 
var arr=[1,2,3,4,5];
 const ans=arr.map(val=>val+1)



//  filter---> this return the value after the conditions


var array=[1,2,3,4,5];
const ans1=arr.filter(val=>val>4)