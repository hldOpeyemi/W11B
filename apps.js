let products = document.getElementById("products")

function addToCart(event) {
    
let buttonID = event.target.id
console.log(buttonID)

let array = buttonID.split("-")
console.log(array[1])
}


function injectBook(book){
    console.log(book)
    let card = `<div class="card" id="card-${book.id}"></div>`
        products.insertAdjacentHTML("beforeend", card)
        card = document.getElementById(`card-${book.id}`)
    let title = `<h1>${book.title}</h1>`
    let image = `<img class="image" src="${book.image}">`
    let author = `<h1>${book.author}</h1>`
    let description = `<h1>${book.description}</h1>`
    let price = `<h3>${book.price}</h3>`
    let button = `<button id="button-${book.id}">Add to Cart</button>`

    
    card.insertAdjacentHTML("beforeend", title)
    card.insertAdjacentHTML("beforeend", image)
    card.insertAdjacentHTML("beforeend", description)
    card.insertAdjacentHTML("beforeend", author)
    card.insertAdjacentHTML("beforeend", price)
    card.insertAdjacentHTML("beforeend", button)
    button = document.getElementById(`button-${book.id}`)
    button.addEventListener("click",addToCart)
}
  
let counter = 0
while (counter < books.length) {
    console.log(counter)
   
    injectBook(books[counter])

    counter++;
}







//console.log(books)