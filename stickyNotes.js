let texta=  document.querySelector("#textarea1");

let bg=document.querySelector('#bg');
let text=document.querySelector('#text');
let btn=document.querySelector('#btn');
let right=document.querySelector('#wrapper .right');
btn.addEventListener('click',coll);
let updetes;
 function coll(){
    let tex=texta.value;
  if(tex.trim().length === 0) return ;
  if(btn.innerHTML==="edit"){
    updetes.target.parentElement.children[0].innerHTML=texta.value;
    btn.innerHTML="add btn";
    texta.value="";
  }else{
  let div =document.createElement('div');
  div.classList.add('div')
  let span1=document.createElement('span')
 span1.innerHTML=tex;
 div.style.backgroundColor=bg.value;
 span1.style.color=text.value;
 span1.addEventListener('blur',contentblur);
 div.append(span1);
 let span2=document.createElement('span');
 span2.innerHTML="E";
 span2.classList.add('span2');
 span2.addEventListener('click',updete);

 div.append(span2);
 let span3=document.createElement('span');
 span3.innerHTML="&times";
 span3.classList.add('span3');
 span3.addEventListener('click',remove);
 div.append(span3)
 right.appendChild(div);
texta.value="";}
}




function remove(evt){
   evt.target.parentElement.remove();
}

function updete(e){
   if(e.target.innerHTML==="E"){
  texta.value = e.target.parentElement.children[0].innerHTML;
  texta.focus();
  btn.innerHTML="edit";
  updetes=e;}
}


function contentblur(ei){
ei.target.contentEditable=false;
}