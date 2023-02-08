// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)

const slide = $('#slide');




slide.sortable();
slide.click((e) => {
   const minimizeIcon = e.target.closest('.icon-heading')
   if (minimizeIcon) {
      const content = minimizeIcon.parentNode.nextElementSibling;
      content.classList.toggle('close')
   }
})
const courses = $('.courses');
// courses.sortable();
$("#courses, #courses--chosen").sortable({
   connectWith: ".connectedSortable"
}).disableSelection();
courses.click((e) => {
   const course = e.target.closest('.course')
   if (course)
      course.classList.toggle('chosen')
})

function pull(selectorPull, selectorEnd) {
   const courses = $(selectorPull)
   const coursesEnd = $(selectorEnd);
   courses.each((index, course) => {
      coursesEnd.append(course)
      $(course).removeClass('chosen')
   })
}
const btnPullRight = $('.btn--pull-right');
btnPullRight.click(pull.bind(this, '.chosen', '#courses--chosen'))

const btnPullAllRight = $('.btn--pull-all-right');
btnPullAllRight.click(pull.bind(this, '.courses .course', '#courses--chosen'))

const btnPullLeft = $('.btn--pull-left');
btnPullLeft.click(pull.bind(this, '.chosen', '#courses'))

const btnPullAllLeft = $('.btn--pull-all-left');
btnPullAllLeft.click(pull.bind(this, '.courses--chosen .course', '#courses'))

const btnRemoveAll = $('#remove-all');
btnRemoveAll.click(pull.bind(this, '.courses--chosen .course', '#courses'))


// const btnRegister = $('#register')
// btnRegister.click(function(){
//    $('#form-register').validate();
//    var data = $('#form-register').serialize();
//    // console.log(data)
//    // $.get(`/?${data}`, data);
//  });