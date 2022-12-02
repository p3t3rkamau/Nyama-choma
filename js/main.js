let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')

cartIcon.onclick = () => {
    cart.classList.add("active");
    sign.classList.remove("active");
    sw.classList.remove("active");
    meal.classList.remove("active");
    login.classList.remove("active");
};
closeCart.onclick = () => {
    cart.classList.remove("active");
};

let menu = document.querySelector('#menu')
let sw = document.querySelector('.sw')
let closeWindow = document.querySelector('#close-window')

menu.onclick = () => {
    sw.classList.add("active");
    login.classList.remove("active");
    sign.classList.remove("active");
    meal.classList.remove("active");
    cart.classList.remove("active");
};
closeWindow.onclick = () => {
    sw.classList.remove("active");
};



let loginicon = document.querySelector('.btn2')
let login = document.querySelector('.login')
let closelogin = document.querySelector('#close-login')

loginicon.onclick = () => {
    login.classList.add("active");
    sign.classList.remove("active");
    cart.classList.remove("active");
    sw.classList.remove("active");
    meal.classList.remove("active");

};
closelogin.onclick = () => {
    login.classList.remove("active");
};






let mealicon = document.querySelector('#mealicon')
let meal = document.querySelector('.meal')
let closemeal = document.querySelector('#close-meal')

mealicon.onclick = () => {
    meal.classList.add("active");
    login.classList.remove("active");
    cart.classList.remove("active");
    sign.classList.remove("active");
    sw.classList.remove("active");
   
};
closemeal.onclick = () => {
    meal.classList.remove("active");
};






let signIcon = document.querySelector('#sign')
let sign = document.querySelector('.sign')
let closeSign = document.querySelector('#close-sign')

signIcon.onclick = () => {
    sign.classList.add("active");
    meal.classList.remove("active");
    login.classList.remove("active");
    cart.classList.remove("active");
    sw.classList.remove("active");
   
};
closeSign.onclick = () => {
    sign.classList.remove("active");
};


let mapicon = document.querySelector('#directions')
let map = document.querySelector('.map')
let closemap = document.querySelector('#close-map')

mapicon.onclick = () => {
    map.classList.add("active")
    sign.classList.remove("active");
    meal.classList.remove("active");
    login.classList.remove("active");
    cart.classList.remove("active");
    sw.classList.remove("active");
    About.classList.remove("active");
   
};
closemap.onclick = () => {
    map.classList.remove("active");
};

let abouticon = document.querySelector('#about')
let About = document.querySelector('.About')
let closeAbout = document.querySelector('#close-about')

abouticon.onclick = () => {
    About.classList.add("active")
    sign.classList.remove("active");
    meal.classList.remove("active");
    login.classList.remove("active");
    cart.classList.remove("active");
    sw.classList.remove("active");
    home.classList.remove('active')
   
};
closeAbout.onclick = () => {
    About.classList.remove("active");
};

let myAccountIcon = document.getElementById('my-account');

myAccountIcon.onclick = () => {
    alert('You dont have an account')
}


if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded",ready);
} else {
    ready();
}
function ready(){
    var removecartButtons = document.getElementsByClassName('cart-remove')
    console.log(removecartButtons)
    for (var i = 0; i < removecartButtons.length; i++){
        var button = removecartButtons[i]
        button.addEventListener("click", removeCartItem);
    }
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < removecartButtons.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);

    }

    var addCart = document.getElementsByClassName('add-cart')
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener('click',addCartClicked);

    }
    document.getElementsByClassName("btn-buy")[0].addEventListener("click",buyButtonClicked);
}

function buyButtonClicked(){
    alert('You first need to create an account to order');
    var cartContent = document.getElementsByClassName('cart-content')[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}


function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <=0) {
        input.value = 1;
    }
    updatetotal();
}

function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}
function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert("you have already added this item to cart"); 
            return;  
        }
    }
 
var cartBoxContent = `
<img class="cart-img" src="${productImg}"></img>
<div class="detail-box">
    <h2 class="cart-product-title">${title}</h2>
    <div class="cart-price">${price}</div>
    <input type="number" value="1" class="cart-quantity"/>
</div>
<i class='bx bxs-trash-alt cart-remove'></i>`;

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener("click",removeCartItem);
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener("change",quantityChanged);

}

function updatetotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("Ksh",""));
        var quantity = quantityElement.value;
        total = total + price * quantity;
    }
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName('total-price')[0].innerText = 'Ksh' + total;
    
}