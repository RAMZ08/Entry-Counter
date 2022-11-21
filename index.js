
let count=0;
let countEl=document.getElementById('count');
let saveEl=document.getElementById('save-el');

 function increment(){
  count += 1;
  console.log(count);
  countEl.innerText=count;
 }

function save(){
  let saveCount= count + " - ";
  saveEl.textContent += saveCount;
  countEl.innerText = 0;
}
 

