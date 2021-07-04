const Name = {
  name: "松浦早希子",
  university: "東京農工大学",
  age: 23,
  hobby: ["酒", "カヌレ", "緑茶"],
  like: "居酒屋",
  issakiko: true,
  sayHello: function() {
    alert(`${Name.like}好きです!!`)
  },
}
console.log(Name.name)
Name.sayHello()
console.log(Name.hobby[0])
