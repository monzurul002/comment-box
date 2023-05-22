const domaDom=document.getElementsByClassName("doma-dom")[0].style.border = "25px solid gray";
document.getElementsByClassName("doma-dom")[0].style.borderRadius = "25px ";

const sections = document.querySelectorAll("section")

for(const section of sections){
    section.style.border="20px solid red";
    section.style.margin="13px";

}
const body=document.getElementById("body")

const domaDomId=document.getElementById("doma-dom")
const li = document.createElement('li')
li.innerText="Jore bolo dom"
domaDomId.appendChild(li)


const section=document.createElement("section")
const h1= document.createElement("div")
h1.innerHTML=`
<h2>HI </h2>
<p>lorem <p>

`
section.appendChild(h1)

body.appendChild(section)