const menuEmail= document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const IconshopCar = document.querySelector('.navbar-shopping-cart')
const shopCar = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', showDesktop);

menuHamIcon.addEventListener('click', showMobileMenu);

IconshopCar.addEventListener('click', showShopCar)



function showDesktop(){
    const isAsideClose = shopCar.classList.contains('inactive3');
    if(!isAsideClose){
        shopCar.classList.add('inactive3')
    }
    desktopMenu.classList.toggle('inactive')
}

function showMobileMenu(){
    const isAsideClose = shopCar.classList.contains('inactive3');

    if (!isAsideClose){
        shopCar.classList.add('inactive3')
    }
    mobileMenu.classList.toggle('inactive2')
}


function showShopCar (){
    const isMoibleMenuClosed = mobileMenu.classList.contains('inactive2')
    const isDesktopeMenuClosed = desktopMenu.classList.contains('inactive')

    if (!isMoibleMenuClosed){
        mobileMenu.classList.add('inactive2')
    }
    else if (!isDesktopeMenuClosed){
        desktopMenu.classList.add('inactive')
    }
    
    shopCar.classList.toggle('inactive3')
    
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Pantalla',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'PC',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')

    const img = document.createElement('img');
    img.setAttribute('src', product.image)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDive = document.createElement('div');


    const productPrice = document.createElement('p');
    productPrice.innerHTML= '$ ' + product.price

    const productName = document.createElement('p');
    productName.innerHTML= product.name

    productInfoDive.appendChild(productPrice);
    productInfoDive.appendChild(productName)


    const productInfoFigure = document.createElement('figure');
    const prodcutImgCart = document.createElement('img');
    prodcutImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
    productInfoFigure.appendChild(prodcutImgCart);

    productInfo.appendChild(productInfoDive);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);

}

