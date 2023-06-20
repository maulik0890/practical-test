// menu
const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');

const liItems = document.querySelectorAll('.menu nav .inner-nav ul li');


toggle.addEventListener('click', function() {
  body.classList.toggle('active'); // Toggle the "active" class on the body element

  liItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.toggle('show');
    }, index * 200); // Add a delay for each list item
  });


});
// Slider

$(".single-item").slick();

