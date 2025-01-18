 document.getElementById('title'); //select an html element by id
 document.getElementById('title').id // to find id
 document.getElementById('title').className  // to find class name or class
 document.getElementById('title').getAttribute   // to find the attribute
 
 document.getElementById('title').setAttribute('class','test')  // it alway overight
 const title=document.getElementById('title');
 title.style.backgroundColor="green";
 title.style.padding="15px";



//  tittle.textContent   // it gives all hidden or visible values ex ========> display:"none"; is also visible in innerContent
// tittle.innerHTML     // it works only on available values
// title.innerText      


// difference between innerText and textContent

// document.querySelector("#id")
// document.querySelector(".class");
document.getElementsByClassName('class-name')