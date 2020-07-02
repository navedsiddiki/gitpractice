// var d;
// d=document.getElementById("tab").style.border="1px solid blue";
 d1=document.getElementById("tab").classList="naved";
// console.log(d1);
var d;
d=document.getElementById("tab").addEventListener("mouseenter",ccolor);
document.getElementById("tab").addEventListener("mouseleave", cccolor);
document.getElementById("tab").addEventListener("click", ccccolor);

function ccolor() {
    document.getElementById("tab").style.border="5px solid yellow";
}
function cccolor() {
    document.getElementById("tab").style.border = "5px solid red";
}
function ccccolor() {
    document.getElementById("tab").style.border = "5px solid blue";
}

var s=document.getElementById("tab").className;
console.log(s);
document.getElementById("tab").classList.add("siddiki");
var s = document.getElementById("tab").className;
console.log(s);
document.getElementById("tab").classList.remove("siddiki");
var s = document.getElementById("tab").className;
console.log(s);


document.getElementById("par1").addEventListener("click",co);

function co() {
    document.getElementById("par1").classList.toggle("abc");
}

