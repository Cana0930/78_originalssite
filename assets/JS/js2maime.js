let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");

  // すべてのスライドを非表示にする
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  // 最後のスライドの次は最初に戻す
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // 現在のスライドを表示
  slides[slideIndex - 1].style.display = "block";

  // 画像の切り替え間隔（3秒ごとに切り替え）
  setTimeout(showSlides, 8000);
}


$(document).ready(function() {
  // 初期状態でmain-contents以下を非表示にする
  $('#main-contents').hide();

  // title-indexをクリックしたらmain-contentsを表示/非表示する
  $('#title-index').click(function(e) {
    e.preventDefault();  // デフォルトのリンク動作を防止
    $('#main-contents').slideToggle();  // スライドで表示・非表示を切り替える
  });
});


$(document).ready(function() {
  // 全てのdtとddを非表示にする
  $('.list-2 dt, .list-2 dd, .list-3 dt, .list-3 dd, .list-4 dt, .list-4 dd').hide();

  // 各indexのタイトルをクリックしたら該当するdlのdt要素を表示/非表示する
  $('#title-index2').click(function(event) {
    event.preventDefault(); 
    $('.list-2 dt').slideToggle();  // list-2 の dt 要素を表示/非表示
    $('.list-2 dd').slideUp();      // list-2 の dd 要素は一旦全て非表示
  });

  $('#title-index3').click(function(event) {
    event.preventDefault(); 
    $('.list-3 dt').slideToggle();  // list-3 の dt 要素を表示/非表示
    $('.list-3 dd').slideUp();      // list-3 の dd 要素は一旦全て非表示
  });

  $('#title-index4').click(function(event) {
    event.preventDefault(); 
    $('.list-4 dt').slideToggle();  // list-4 の dt 要素を表示/非表示
    $('.list-4 dd').slideUp();      // list-4 の dd 要素は一旦全て非表示
  });

  // dt要素をクリックしたら、その次のdd要素を表示/非表示する
  $('.list-2 dt, .list-3 dt, .list-4 dt').click(function() {
    $(this).nextUntil('dt', 'dd').slideToggle(); // 次のdd要素をスライド表示/非表示
  });
});