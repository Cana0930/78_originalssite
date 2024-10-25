const ham = $('#js-hamburger');
const nav = $('#js-nav');

// ハンバーガーメニューをクリックしたら
ham.on('click', function (event) {
  event.stopPropagation(); 
  ham.toggleClass('active');
  nav.toggleClass('active');
});

// ページのどこかをクリックしたとき
$(document).on('click', function () {
  if (nav.hasClass('active')) {
    ham.removeClass('active'); 
    nav.removeClass('active'); 
  }
});


//トップのスライド
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");

  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  
  slides[slideIndex - 1].style.display = "block";

  
  setTimeout(showSlides, 8000);
}



//ヘッダーのリンクをクリックして移動
$(document).ready(function() {
  
  $('.nav__items a').click(function(event) {
    event.preventDefault(); 

   
    let targetId = $(this).attr('href');

    
    let headerHeight = $('.header__inner').outerHeight() + 65;

    
    let targetPosition = $(targetId).offset().top - headerHeight;

    
    $('html, body').animate({
      scrollTop: targetPosition
    }, 800); 
  });
});





$(document).ready(function() {
  
  $('.choice a').click(function(event) {
    event.preventDefault(); 

   
    let targetId = $(this).attr('href');

    
    let headerHeight = $('.header__inner').outerHeight() + 20;

    
    let targetPosition = $(targetId).offset().top - headerHeight;

    
    $('html, body').animate({
      scrollTop: targetPosition
    }, 800); 
  });
});





//２ページ目の指定位置に移動
$(document).ready(function() {
  
  const headerHeight = $('header').outerHeight();
  const offset = 50;

  
  $('a[href="./indx2maime.html#title-index2"]').click(function(e) {
    e.preventDefault(); 
    window.location.href = $(this).attr('href'); 
  });
});