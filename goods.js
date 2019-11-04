var goods = [];
for (var i = 0; i < 10; i++) {
    goods[i] = document.createElement("button");
    goods[i].setAttribute("onclick", addToShoppingCart);
    goods[i].setAttribute("id", "good" + (i + 1));
    goods[i].price = Math.round(Math.random() * 900 + 100);
    goods[i].innerHTML = "Товар №" + (i + 1) + " Цена: " + goods[i].price;
    console.log(goods[i]);
}
console.log(goods);
for (var i = 0; i < 10; i++) {
    var shelf = document.getElementById("body");
    shelf.appendChild(goods[i]);
}
var basket = document.createElement("section");
basket.setAttribute("style", "border: 1px solid black");
var basket1 = document.getElementById("body");
basket1.appendChild(basket);


var goodsBought = document.getElementsByTagName("button");
for (var i = 0; i < goodsBought.length; i++) {
    goodsBought[i].onclick = addToShoppingCart;
}
var totalPrice=0;

function addToShoppingCart() {
    basket.appendChild(event.target);

    totalPrice = totalPrice+event.target.price;
    console.log(totalPrice);
    basket.innerHTML = "Всего: " +totalPrice;
}

