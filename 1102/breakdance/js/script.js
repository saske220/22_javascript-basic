// 変数にボタン（部品）を取得
const danceBtn = document.querySelector(".dancing");
const stopBtn = document.querySelector(".stop");
const changeBtn = document.querySelector(".change");

// 変数に画像（対象）を取得
const dancer = document.querySelector(".imgArea img");

// 各ボタンにクリックイベントと、処理を設定

danceBtn.addEventListener("click", function () {
  dancer.setAttribute("class", "dance");
});

stopBtn.addEventListener("click", function () {
  dancer.removeAttribute("class");
});

changeBtn.addEventListener("click", function () {
  dancer.setAttribute("src", "images/ballet_woman.png");
  dancer.setAttribute("alt", "バレリーナいらすと");
});
