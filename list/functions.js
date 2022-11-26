

/* edit element function */

function edit(itemCount){
    let targetToBeDited=items[itemCount].children[0]
    let oldContent=targetToBeDited.textContent
    let   input=document.getElementById('txt');
    input.value=oldContent
    /* create a new button to replace the button 'add' */
    let keepOldButton=document.getElementById('btn')
    let tmp=keepOldButton;
   tmp.value="Update"
   tmp.onclick=function (){
       targetToBeDited.innerText= input.value
   }
}