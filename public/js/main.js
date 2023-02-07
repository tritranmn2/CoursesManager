var newsHeading1=document.querySelector('.new-heading1');
var newsHeading2=document.querySelector('.new-heading2');
var newsHeading3=document.querySelector('.new-heading3');
var newsHeading4=document.querySelector('.new-heading4');
var content1=document.querySelector('.content-1')
var content2=document.querySelector('.content-2')
var content3=document.querySelector('.content-3')
var content4=document.querySelector('.content-4')


newsHeading1.addEventListener('click',function(){
   if(content1.classList.contains('close')){
      content1.classList.remove('close')
   }
   else{
      content1.classList.add('close');

   }
})
newsHeading2.addEventListener('click',function(){
   if(content2.classList.contains('close')){
      content2.classList.remove('close')
   }
   else{
      content2.classList.add('close');

   }
})
newsHeading3.addEventListener('click',function(){
   if(content3.classList.contains('close')){
      content3.classList.remove('close')
   }
   else{
      content3.classList.add('close');

   }
})
newsHeading4.addEventListener('click',function(){
   if(content4.classList.contains('close')){
      content4.classList.remove('close')
   }
   else{
      content4.classList.add('close');

   }
})
