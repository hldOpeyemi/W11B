let cookie = Cookies.get("selection")
let products = document.getElementById("checkout")

let cart = JSON.parse(cookie)
console.log(cart)

let counter = 0
while (counter < cart.length) {
    //console.log(counter)
   
    injectBook(cart[counter],"checkout")
    counter++;
}