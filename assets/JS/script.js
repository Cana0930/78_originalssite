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