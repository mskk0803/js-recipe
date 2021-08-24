const { doc } = require("prettier");

const imageElement = document.getElementById("dog-image")

// サーバーにデータ取りに行く
fetch("https://dog.ceo/api/breeds/image/random")
.then((res) => {
    return res.json()　
    // 結果をjsonとして読み込んで、次の処理のわたす
})
.then((data) => {
    imageElement.src = data.message
    // 画像を表示する
})

// thenはデータを取得した後の処理

// =>はアロー関数という
// thisの振る舞いが異なる。ほぼfunctionと同じ