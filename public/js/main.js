// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)

const slide = $('#slide');
slide.sortable();
slide.click((e)=>{
   const minimizeIcon = e.target.closest('.icon-heading')
   if(minimizeIcon){
      const content = minimizeIcon.parentNode.nextElementSibling ;
      content.classList.toggle('close')
   }
}) 

