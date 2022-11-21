//document.getElementById('count').innerText=8;

let count=0
let countEl=document.getElementById('count');
 function increment(){
  count += 1
  console.log(count)
  countEl.innerText=count
 }

let saveEl=document.getElementById('save-el')
function save(){
  let saveCount= count + " - "
  saveEl.textContent += saveCount
  countEl.innerText = 0
}
 

