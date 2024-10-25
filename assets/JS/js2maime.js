const ham = $('#js-hamburger');
const nav = $('#js-nav');

//ハンバーガーメニュー
ham.on('click', function (event) {
  event.stopPropagation(); 
  ham.toggleClass('active'); 
  nav.toggleClass('active'); 
});

//ページのどこかをクリックしたら消える
$(document).on('click', function () {
  if (nav.hasClass('active')) {
    ham.removeClass('active'); 
    nav.removeClass('active'); 
  }
});

//ヘッダーのリンクをクリックして移動
$(document).ready(function() {
  
  $('.nav__items a').click(function(event) {
    event.preventDefault(); 

    
    let targetId = $(this).attr('href');

    
    let headerHeight = $('.header__inner').outerHeight(); 

    
    console.log("ヘッダーの高さ: " + headerHeight);

    
    let targetPosition = $(targetId).offset().top - headerHeight - 65;

    
    $('html, body').animate({
      scrollTop: targetPosition
    }, 800); 
  });
});


//写真のスライド

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



//クリックにより隠れている要素が開く
$(document).ready(function() {
  
  $('#main-contents').hide();

 
  $('#title-index').click(function(e) {
    e.preventDefault();  
    $('#main-contents').slideToggle(); 
  });

  
  $('.list-2 dt, .list-2 dd, .list-3 dt, .list-3 dd, .list-4 dt, .list-4 dd').hide();

  
  $('#title-index2').click(function(event) {
    event.preventDefault(); 
    $('.list-2 dt').slideToggle();  
    $('.list-2 dd').slideUp();      
  });

  $('#title-index3').click(function(event) {
    event.preventDefault(); 
    $('.list-3 dt').slideToggle();  
    $('.list-3 dd').slideUp();   
  });

  $('#title-index4').click(function(event) {
    event.preventDefault(); 
    $('.list-4 dt').slideToggle();
    $('.list-4 dd').slideUp(); 
  });

 
  $('.list-2 dt, .list-3 dt, .list-4 dt').click(function() {
    $(this).nextUntil('dt', 'dd').slideToggle(); 
  });

  
  if (window.location.hash) {
    let targetId = window.location.hash; 
    $(targetId).trigger('click'); 
  }
});



//１ページ目のmoreをクリックして、指定の位置に移動

$(document).ready(function() {

  if (window.location.hash) {
    const headerHeight = $('header').outerHeight();
    const offset = 50;
    const targetId = window.location.hash; 
    const targetPosition = $(targetId).offset().top - (headerHeight + offset); // スクロール位置を計算

  
    $('html, body').animate({
      scrollTop: targetPosition
    }, 600); 
  }
});





// !!!!!!!!!!!!!!!!!!!!
$(document).ready(function(){

$(".photoofthis").hide();
  $("#title-index").on('click', () => {
    $(".photo_of_this").toggle('slow');
  });
  $("#title-index2").on('click', () => {
      $(".photo_of_this2").toggle('slow');
  });
  $("#title-index3").on('click', () => {
    $(".photo_of_this3").toggle('slow');
  });
  $("#title-index4").on('click', () => {
    $(".photo_of_this4").toggle('slow');
  });
});
