const ham = $('#js-hamburger');
const nav = $('#js-nav');

// ハンバーガーメニューをクリックしたら
ham.on('click', function (event) {
  event.stopPropagation(); // イベントのバブリングを防止
  ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外す
});

// ページのどこかをクリックしたとき
$(document).on('click', function () {
  if (nav.hasClass('active')) {
    ham.removeClass('active'); // ハンバーガーメニューからactiveクラスを削除
    nav.removeClass('active'); // ナビゲーションメニューからactiveクラスを削除
  }
});

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
  // ヘッダーの高さを変数として設定
  let headerHeight = $('.header__nav').outerHeight() +45; 

  // ヘッダー内のリンクをクリックしたときの動作
  $('.nav__items a').click(function(event) {
    event.preventDefault(); // デフォルトの動作を無効化

    // クリックされたリンクのhref属性の値を取得（#details-1など）
    let targetId = $(this).attr('href');

    // 移動先の要素の位置を取得し、ヘッダーの高さを引いた値に移動
    let targetPosition = $(targetId).offset().top - headerHeight;

    // スムーズにスクロールする
    $('html, body').animate({
      scrollTop: targetPosition
    }, 800); // スクロール速度（800ms）
  });
});