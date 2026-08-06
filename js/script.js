/*==========================================
Glow Beauty Store
script.js
==========================================*/

//==============================
// Shopping Cart Counter
//==============================

let cartCount = 0;

const cartIcon = document.querySelector(".fa-cart-shopping");

const cartBadge = document.createElement("span");

cartBadge.classList.add("cart-count");

cartBadge.textContent = cartCount;

cartIcon.parentElement.appendChild(cartBadge);

//==============================
// Add To Cart
//==============================

const addButtons = document.querySelectorAll(".product-info button");

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartBadge.textContent = cartCount;

        button.innerHTML = "✔ Added";

        button.style.background = "#43a047";

        setTimeout(() => {

            button.innerHTML = "Add To Cart";

            button.style.background = "";

        },1500);

    });

});

//==============================
// Favorite Button
//==============================

const productCards = document.querySelectorAll(".product-card");

productCards.forEach(card=>{

    const heart=document.createElement("i");

    heart.className="fa-regular fa-heart wishlist";

    card.appendChild(heart);

    heart.addEventListener("click",()=>{

        heart.classList.toggle("fa-solid");

        heart.classList.toggle("active");

    });

});

//==============================
// Sticky Header Shadow
//==============================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.boxShadow="0 15px 30px rgba(0,0,0,.08)";

    }

    else{

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.05)";

    }

});

//==============================
// Scroll To Top Button
//==============================

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.classList.add("show");

    }

    else{

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

//==============================
// Search Popup
//==============================

const searchIcon=document.querySelector(".fa-magnifying-glass");

const overlay=document.createElement("div");

overlay.className="search-overlay";

overlay.innerHTML=`

<div class="search-box">

<input type="text"

placeholder="Search products...">

<button>

<i class="fa-solid fa-magnifying-glass"></i>

</button>

</div>

`;

document.body.appendChild(overlay);

searchIcon.addEventListener("click",()=>{

    overlay.classList.add("open");

});

overlay.addEventListener("click",(e)=>{

    if(e.target===overlay){

        overlay.classList.remove("open");

    }

});

//==============================
// Fade Animation
//==============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});


const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");


menu.onclick = function(){

    nav.classList.toggle("active");

}

