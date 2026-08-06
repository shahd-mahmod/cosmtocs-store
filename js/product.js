function changeImage(src){

document.getElementById("mainProductImage").src = src;

}



let quantity = 1;


function increaseQty(){

quantity++;

document.getElementById("quantity").value = quantity;

}



function decreaseQty(){

if(quantity > 1){

quantity--;

}

document.getElementById("quantity").value = quantity;

}