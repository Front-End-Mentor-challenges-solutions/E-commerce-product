const bigImg = document.querySelector(".main-img")
const smallImages = document.querySelectorAll(".small-image")
const cartImg = document.querySelector(".cart-img")
const cart = document.querySelector(".cart")
const value =  document.querySelector(".orderValue")
const btnDecrease = document.querySelector(".btn-decrease")
const btnIncrease = document.querySelector(".btn-increase")
const addBtn = document.querySelector(".btn-cart")
const cartContent = document.querySelector(".cart-content")
const indicator = document.querySelector(".indicator")
const closeLightBox = document.querySelector(".close-lightbox")
const lightbox = document.querySelector(".lightbox")
const hamburgerBtn = document.querySelector(".menu")
const mobileNav = document.querySelector(".nav-left ul")
const navClose = document.querySelector(".nav-close")
const previewImages = document.querySelectorAll(".preview-image")
const mainThumbnail = document.querySelector(".main-thumbnail")
const btnNext = document.querySelector(".img-next")
const btnPrev = document.querySelector(".img-prev")
const overlay = document.querySelector(".overlay")


smallImages.forEach(image=>{
    image.addEventListener("click",(e)=>{
        const src = e.target.src;
        console.log(src,bigImg)
        bigImg.src = src
        smallImages.forEach(image=>{
            if(image.classList.contains("clicked")){
                image.classList.remove("clicked")
            }
        })
        image.classList.add("clicked")
        
    })
})
previewImages.forEach(image=>{
    image.addEventListener("click",(e)=>{
        const src = e.target.src;
        mainThumbnail.src = src
        previewImages.forEach(image=>{
            if(image.classList.contains("clicked")){
                image.classList.remove("clicked")
            }
        })
        image.classList.add("clicked")
        
    })
})

cartImg.addEventListener("click",()=>{
   cart.classList.toggle("visible")
})

btnDecrease.addEventListener("click",()=>{
    if(Number(value.textContent) > 0){
        value.innerHTML = Number(value.textContent) - 1
    } 
})

btnIncrease.addEventListener("click",()=>{
        value.innerHTML = Number(value.textContent) + 1
})

function addItem() {
    if (value.textContent > 0) {
        const total = 125.00 * Number(value.textContent);
        console.log(total)
    // // wrp.classList.remove("empty");
    cartContent.innerHTML = `<div class="product">
                    <div>
                      <img src="./images/image-product-1-thumbnail.jpg" class="product-img" alt="product">
                      <div class="product-info">
                        <p class="product-title">Fall Limited Edition Sneakers</p>
                       <p><span>$125.00</span> × <span class="number">${value.textContent}</span> <b>$${total}</b></p>
                      </div>
                      <button class="delete-btn" onclick="deleteItem()"><img src="./images/icon-delete.svg" alt="delete"></button>
                    </div>
                    <button class="checkout-btn">Checkout</button>
                  </div>`;
    indicator.style.display = "block";
    indicator.innerText = value.textContent;
  }
}
addBtn.addEventListener("click", addItem);
function deleteItem() {
    // wrp.classList.add("empty");
    cartContent.innerHTML = `<p class="cart-empty-text">Your cart is empty</p>`;
    indicator.style.display = "none";
}

closeLightBox.addEventListener("click",()=>{
    lightbox.classList.add("hidden");
})

bigImg.addEventListener("click",()=>{
    lightbox.classList.remove("hidden")

})

hamburgerBtn.addEventListener("click",()=>{
    mobileNav.classList.toggle("open")
    console.log("opened")
    overlay.classList.add("view");
})

navClose.addEventListener("click",()=>{
    mobileNav.classList.remove("open")
    console.log("closed")
    overlay.classList.remove("view");
})

const imageArr = ["./images/image-product-1.jpg","./images/image-product-2.jpg","./images/image-product-3.jpg","./images/image-product-4.jpg"]
let currentImg =0;
function nextImage() {
    if (currentImg == 3) {
      currentImg = 1;
    } else {
      currentImg++;
    }
    bigImg.src = imageArr[currentImg];
}

function prevImage() {
    if (currentImg == 0) {
      currentImg = 3;
    } else {
      currentImg--;
    }
    bigImg.src = imageArr[currentImg];
}

btnNext.addEventListener("click", nextImage)
btnPrev.addEventListener("click", prevImage)