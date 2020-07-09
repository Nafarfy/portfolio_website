const nav = document.querySelector('.main-nav');

// Add backgroud to navbar
window.addEventListener('scroll', function () {
  if (window.scrollY > 2) {
    nav.className = 'main-nav navbar';
  } else {
    nav.className = 'main-nav';
  }
});


// Smooth Scrolling
$('#navbar a, .btn-main').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 80
      }
    );
  }
});



// FORM
// No Numbers in Name input
function noDigits(event) {
  if ("1234567890".indexOf(event.key) != -1)
    event.preventDefault();
}

