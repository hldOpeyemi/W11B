let cart = []
let products = document.getElementById("products")


let counter = 0
while (counter < books.length) {
    //console.log(counter)
   
    injectBook(books[counter],"home")
    counter++;
}