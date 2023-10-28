function injectBook(book, page){
    //console.log(book)
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
        if (page === "home") {
            card.insertAdjacentHTML("beforeend", button)
            button = document.getElementById(`button-${book.id}`)
        button.addEventListener("click",addToCart)
    }
       
}








function addToCart(event) {
    
    let buttonID = event.target.id
   
    let array = buttonID.split("-")
    
    let stringbookID = array[1]
    let bookID = parseInt(stringbookID)
    let found = books.find((book) => book.id === bookID)
    cart.push(found)
    console.log(cart)
    Cookies.set('selection', JSON.stringify(cart))

    //console.log(buttonID)
    //console.log(bookID)
    //console.log(found)
    // console.log(stringbookID)
    // console.log("array", typeof array, array)

}
