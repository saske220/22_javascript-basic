//初期化
const slide = document.querySelector(".slide");
const imgs = document.querySelectorAll(".slide img"); //グローバル変数

console.log(imgs);
//四枚目の画像がほしい
console.log(imgs[imgs.length - 1]);
//div="slide"の中に最後の画像[imgs.length -1]を最初の画像[0]の前
//insertBeforeはappendChildの逆、前に入れる
slide.insertBefore(imgs[imgs.length - 1], imgs[0]);

//btn
const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");

//右

leftBtn.addEventListener("click", () => {
  leftSlider();
});

const leftSlider = function () {
  //ローカル変数
  const slideImgs = document.querySelectorAll(".slide img");
  console.log(slideImgs); //クリックを押した時点でのhtml
  //左側の余分な画像を、最後に移動
  // slideImgs[0].style.marginLeft = "-100%";
  slide.appendChild(slideImgs[0]);
  //入ってるstyle属性を削除
  slideImgs[1].removeAttribute("style");
};
window.setInterval(leftSlider, 1000);

//左

rightBtn.addEventListener("click", () => {
  rightSlider();
});

const rightSlider = function () {
  const slideImgs = document.querySelectorAll(".slide img");
  console.log(slideImgs);
  slideImgs[1].removeAttribute("style");

  slideImgs[0].style.marginLeft = "0";
  slide.insertBefore(slideImgs[slideImgs.length - 1], slideImgs[0]);
};
