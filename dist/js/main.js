
// Add backgroud to navbar
window.addEventListener('scroll', function () {
  const nav = document.querySelector('.main-nav');
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

function checkform(f) {
  var errMSG = "";
  // цикл ниже перебирает все элементы в объекте f, 
  // переданном в качестве параметра
  // функции, в данном случае - наша форма.            
  for (var i = 0; i < f.elements.length; i++)
    // если текущий элемент имеет атрибут required
    // т.е. обязательный для заполнения
    if (null != f.elements[i].getAttribute("required"))
      // проверяем, заполнен ли он в форме
      if (isEmpty(f.elements[i].value)) // пустой
        errMSG += "  " + f.elements[i].name + "\n"; // формируем сообщение
  // об ошибке, перечисляя 
  // незаполненные поля
  // если сообщение об ошибке не пусто,
  // выводим его, и возвращаем false     
  if ("" != errMSG) {
    alert("Не заполнены обязательные поля:\n" + errMSG);
    return false;
  }
}

function isEmpty(str) {
  for (var i = 0; i < str.length; i++)
    if (" " != str.charAt(i))
      return false;
  return true;
}


// Avtive nav link
var sections = $('section, header')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function () {
    var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('nav-color');

      $(this).addClass('nav-color');
      nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('nav-color');
    }
  });
});