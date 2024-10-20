
$(document).ready(function() {
    // 初期状態で全てのdtとddを非表示にする
    $('.list dt, .list dd').hide();
  
    // .contents要素をクリックしたら、該当のdl内のdt要素を表示/非表示する
    $('.contents').click(function() {
      // クリックされたh1の次にあるdlのdt要素をスライド表示/非表示
      $(this).next('.list').find('dt').slideToggle();
    });
  
    // dt要素をクリックしたら、その次のdd要素を表示/非表示する
    $('.list dt').click(function() {
      $(this).nextUntil('dt', 'dd').slideToggle();
    });
  });