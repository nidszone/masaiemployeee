// fill in javascript code here
// fill in javascript code here
let myform= document.querySelector("form");
myform.addEventListener("submit" ,function(e){
e.preventDefault(); // we use prevent default to prevent autorefresh
// fetch all the data from form 

let name = document.getElementById("name").value;
let employeeID=document.getElementById("employeeID").value;
let department=document.getElementById("department").value;
let Experience=document.getElementById("exp").value;
let Email=document.getElementById("email").value;
let Mobile=document.getElementById("mbl").value;
// console.log(name +''+ employeeID+''+department +''+Experience+''+Email+''+Mobile
// )
let role;
if (Experience>5){
    role="senior";
}
else if(Experience>=2 && Experience<=5){
    role="junior";
}
else{
    role="freshers";
}
let tbody=document.querySelector("tbody");
 let row =document.createElement("tr");
 let data=[name,employeeID, department,Experience,Email,Mobile,role]
 data.forEach((ele)=>{
    let td=document.createElement("td")
    td.innerText=ele;
    row.appendChild(td);
 })
//  delete functionality
let deleteTd=document.createElement('td')
let deletebtn=document.createElement('button')
deletebtn.innerText="delete";
deletebtn.addEventListener("click",function(){
    tbody.removeChild(row);
    
})
deleteTd.appendChild(deletebtn);
row.appendChild(deletebtn)


 tbody.appendChild(row);

})