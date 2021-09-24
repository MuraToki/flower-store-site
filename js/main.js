// カルーセルスライダー
$(function() {
  $("#slide").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '48px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 1
        }
      }
    ]
  });
})

$(function() {
  $("#sliding").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });
})



// product
$('#btn').click(function () {
  confirm("架空のサイトです。あなたが押したのはバラですね。");
});

$('#btn2').click(function () {
  confirm("架空のサイトです。あなたが押したのはひまわりですね。");
});

$('#btn3').click(function () {
  confirm("架空のサイトです。あなたが押したのはスイレンですね。");
});

$('#btn4').click(function () {
  confirm("架空のサイトです。あなたが押したのは菜の花ですね。");
});

$('#btn5').click(function () {
  confirm("架空のサイトです。あなたが押したのはユリですね。");
});

$('#btn6').click(function () {
  confirm("架空のサイトです。あなたが押したのはハイビスカスですね。");
});

$('#btn7').click(function () {
  confirm("架空のサイトです。あなたが押したのはキクですね。");
});

$('#btn8').click(function () {
  confirm("架空のサイトです。あなたが押したのはボタンですね。");
});

$('#btn9').click(function () {
  confirm("架空のサイトです。あなたが押したのはマーガレットですね。");
});

// contact send
function checkSubmit(){
  if(confirm('サンプルサイトです。なので、送信はされません。')) {
    return true;
  }
  else {
    return false;
  }
}

// My Web
$('#twitter').click(function () {
  confirm("ツイッターに行きます。覚悟はいいですか？");
});

$('#stand').click(function () {
  confirm("stand.fmに行きます。覚悟はいいですか？");
});
