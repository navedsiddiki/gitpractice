

var a=document.getElementById("tab").parentElement.style.background="cyan";
console.log(a);

a=document.getElementById("tab").children[0].style.background="blue";
console.log(a);

a = document.getElementById("tab").childNodes;
console.log(a);

a=document.getElementById("tab").lastChild;
console.log(a);

a = document.getElementById("tab").nextElementSibling;
console.log(a);

a = document.getElementById("tab").previousElementSibling.style.background="blue";
console.log(a);

var c=document.createElement("p");
console.log(c);

var b=document.createTextNode("This is a paragraph!");

var co=document.createComment("Hello");

console.log(b);

c.appendChild(b);

//document.getElementById("par1").appendChild(c);

var tar = document.getElementById("par1");
tar.insertBefore(c,tar.childNodes[0]);

var z=document.createElement("h2");
var t=document.createTextNode("This is heading!");
z.appendChild(t);

document.getElementById("par1").insertAdjacentElement("afterbegin",z);

document.getElementById("par1").insertAdjacentHTML("beforeend","<p>HEllo bhai kaise ho</p>");
document.getElementById("par1").insertAdjacentText("beforeend","Mast hai bhai!!");

z=document.createElement("a");
t=document.createTextNode("Naved");
z.appendChild(t);

tar=document.getElementById("n");
tar.replaceChild(z,tar.children[0]);

tar.removeChild(tar.children[1]);