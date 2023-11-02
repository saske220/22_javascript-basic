      //画像ファイル名は、配列から取得します。
      const fujiImg_list = ["mt-fuji001.jpg", "mt-fuji002.jpg", "mt-fuji003.jpg"];

      //ここに処理を書きます。
      //画像のタグ<img>要素を変数に取得
      const imageArea = document.querySelector("#mt-fuji");

      //
      const btns = document.querySelectorAll(".image-fuji");
      for(let i = 0; i < btns.length; i++){
        btns[i].addEventListener('click',function (){
            imageArea.setAttribute("src", `images/${fujiImg_list[i]}`)
        })
      }