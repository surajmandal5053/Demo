/*function addnewWEField(){
 let newnode = document.createElement("textarea");
 newnode.classList.add("form-control");
 newnode.classList.add("weField");
 newnode.classList.add("mt-2");
 newnode.setAttribute("rows",3);
 newnode.setAttribute("placeholder","enter here");

 let weOb = document.getElementById("We");
 let weAddButtonOb = document.getElementById("weAddButton");

 weOb.insertBefore(newNode,weAddButtonOb);
}*/

function addNewAQField() {
    let newnode = document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("eqField");
    newnode.classList.add("mt-2");
    newnode.setAttribute("rows",3);
    newnode.setAttribute("placeholder","enter here");
   
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
   
aqOb.insertBefore(newNode, aqAddButtonOb);
}
