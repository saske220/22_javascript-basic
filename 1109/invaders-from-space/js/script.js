//魔王画像
const satan = document.querySelector(".satan img");

//魔王を倒すボタン
const satanBtn = document.querySelector(".satansBtn");

//魔王を倒す
satanBtn.addEventListener("click", function () {
  satan.classList.toggle("hide");
});

//敵4体の画像を取得する
const enemyImg = document.querySelectorAll(".enemy img");

//敵4体のボタンを取得
const attackBtn = document.querySelectorAll(".enemyBtn");

//ボタンをクリックしたら、
for (let i = 0; i < attackBtn.length; i++) {
  attackBtn[i].addEventListener("click", function () {
    enemyImg[i].classList.toggle("hide");
  });
}
