// Cart Quantity Buttons

const quantityBoxes =
document.querySelectorAll(".cart-quantity");


quantityBoxes.forEach(box=>{


let input =
box.querySelector("input");


let buttons =
box.querySelectorAll("button");



buttons[1].onclick=function(){

input.value++;

}




buttons[0].onclick=function(){

if(input.value > 1){

input.value--;

}

}


});




// Remove Product

const removeButtons =
document.querySelectorAll(".remove");


removeButtons.forEach(btn=>{


btn.onclick=function(){

btn.closest(".cart-card").remove();

}


});