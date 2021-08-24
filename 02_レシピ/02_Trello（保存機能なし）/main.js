const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

addButton.onclick = function(){
    // valueはあたい、もしくは中身と考える
    // addButtonをクリックすると、入力欄の文字列が
    // がtextという名前を持つ値として定義される
    const text = inputElement.value

    // cardというクラス名を持つdiv要素を作る
    const card = document.createElement("div")
    card.className = "card"


    // todoというクラス名を持つdiv要素を作り,
    // textに代入する
    const todo = document.createElement("div")
    todo.className = "todo"
    todo.textContent = text

    // todoをcard要素の中に入れる
    card.append(todo)
    // cardをcontiner要素の中に追加する
    container.append(card)
    // 入力らんを空にする
    inputElement.value = ""


    const deletButton = document.createElement("div")
    deletButton.className = "delete"

    deletButton.onclick = Function(){
        card.remove()
    }
    card.append(deleteButton)
}