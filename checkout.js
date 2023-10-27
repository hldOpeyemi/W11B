let cookieJson = Cookies.get('selection');
console.log(cookieJson);

let error = document.getElementById("error");
let content = document.getElementById("content");
console.log(content)

let book = JSON.parse(cookieJson)

let div = "<div id='wrapper'></div>"
let title = `<h1 id='title'>${book.title}</h1>`
let author = `<h3 id='title'>${book.author}</h3>`
let img = `<img src="${book.img}">`
let p = `<p id="description"> ${book.description}</p>`
let price = `<price ="${book.price}">`

content.insertAdjacentHTML("beforeend", div);
let wrapper = document.getElementById("wrapper");
wrapper.insertAdjacentHTML("beforeend", title);
wrapper.insertAdjacentHTML("beforeend", author);
wrapper.insertAdjacentHTML("beforeend", img);
wrapper.insertAdjacentHTML("beforeend", p);
wrapper.insertAdjacentHTML("beforeend", price);

if (cookieJson !== undefined) {
error.remove();
}



