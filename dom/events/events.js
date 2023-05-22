function makeSomeThing (){
document.body.style.backgroundColor="pink"
}
function makeAnotherThing (){
document.body.style.backgroundColor="white"
}

const blackColor=document.getElementById('black').addEventListener("click",()=>{
    document.body.style.backgroundColor="black"
})
const redColor=document.getElementById('red');
redColor.onclick = makeRed =>{
    document.body.style.backgroundColor="red"
}