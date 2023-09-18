const grid = document.querySelector(".product-container");
let srchInput = document.getElementById("srch");
let gotosrch = document.getElementById("srch-icon");
fetch("shoes.json")
  .then((response) => response.text())
  .then((json) => (products = JSON.parse(json)))
  .then((products) => {
    for (let value of products) {
      let { id, current_price, carousel_images, name, gender, type } = value;
      grid.innerHTML += `<div class="prod" id ="${id}"  >
      <div class="box">
                    <img
                        src="${carousel_images[0]}">
                    <h2 class="item-name">${name}</h2>
                    <p>Lorem ipsum, dolor amet consect etur adipisicing sit elit.</p>
                    <span>${current_price}$</span>
                    <p class="gender">${gender}</p><span class="type">${type}</span>
                    <div class="rate">
                        <i class="filled fas fa-star"></i>
                        <i class="filled fas fa-star"></i>
                        <i class="filled fas fa-star"></i>
                        <i class="filled fas fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <div class="options">
                        <button class ="veiwproduct" data-product-id = "${id}"> View</button>
                        <button class ="add-to-cart">Add To Cart</button>
                    </div>
                </div>
                </div>`;
    }
  });
  
  //               fn of search
 gotosrch.addEventListener("click",()=>{
  srchInput.style.display="inline"
 })
  srchInput.addEventListener("keyup", () => {
    let srchvalue = srchInput.value;
    let cart = grid.querySelectorAll(".prod");
    for (let i = 0; i < cart.length; i++) {
      let span = cart[i].querySelector(".item-name");
      console.log( "this is span",span);
      let cond = span.innerHTML.indexOf(srchvalue);
      // console.log(cond);
      if (cond > -1) {
        cart[i].style.display = "initial";
      } else {
        cart[i].style.display = "none";
      }
    }
  });
  //                           fn of category 
  let allCatg =document.querySelector(".all")
  let maleCatg =document.querySelector(".male")
  let femaleCatg =document.querySelector(".female")
  let shoesCatg = document.querySelector(".shoes");
  let apparelCatg = document.querySelector(".apparel");

   allCatg.addEventListener("click", () => {
     let cart = grid.querySelectorAll(".prod");
     for (let i = 0; i < cart.length; i++) {
         cart[i].style.display = "initial";
     }
   });

  femaleCatg.addEventListener("click",()=>{
  let value = "Women";
  let cart = grid.querySelectorAll(".prod");
     for (let i = 0; i < cart.length; i++) {
       let span = cart[i].querySelector(".gender");
       let cond = span.innerHTML.indexOf(value);
       // console.log(cond);
       if (cond > -1) {
         cart[i].style.display = "initial";
       } else {
         cart[i].style.display = "none";
       }
     }
  })
 
  maleCatg.addEventListener("click", () => {
    let value = "Men";
    let cart = grid.querySelectorAll(".prod");
    for (let i = 0; i < cart.length; i++) {
      let span = cart[i].querySelector(".gender");
      let cond = span.innerHTML.indexOf(value);
      if (cond > -1) {
        cart[i].style.display = "initial";
      } else {
        cart[i].style.display = "none";
      }
    }
  });
   shoesCatg.addEventListener("click", () => {
     let value = "Shoes";
     let cart = grid.querySelectorAll(".prod");
     for (let i = 0; i < cart.length; i++) {
       let span = cart[i].querySelector(".type");
       let cond = span.innerHTML.indexOf(value);
       if (cond > -1) {
         cart[i].style.display = "initial";
       } else {
         cart[i].style.display = "none";
       }
     }
   });
    apparelCatg.addEventListener("click", () => {
      let value = "Apparel";
      let cart = grid.querySelectorAll(".prod");
      for (let i = 0; i < cart.length; i++) {
        let span = cart[i].querySelector(".type");
        let cond = span.innerHTML.indexOf(value);
        if (cond > -1) {
          cart[i].style.display = "initial";
        } else {
          cart[i].style.display = "none";
        }
      }
    });


  //                                add to carts 

let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");
let deletList=document.querySelector(".delet");

let listCards = [];
fetch("shoes.json")
  .then((response) => response.text())
  .then((json) => {
    products = JSON.parse(json);

    function addToCard(index) {
      if (listCards[index] == null) {
        // copy product from list to list card
        listCards[index] = JSON.parse(JSON.stringify(products[index]));
        // console.log("list cards ",listCards[index].current_price);
        listCards[index].quantity = 1;
      } else {
        listCards[index].quantity++;
      }
      reloadCard();
    }

    function reloadCard() {

      listCard.innerHTML = "";
      let count = 0;
      let totalPrice = 0;

      listCards.forEach((value, index) => {
        totalPrice += value.current_price;
        count = count + value.quantity;
        if (value != null) {
          let newDiv = document.createElement("li");
          let { id, current_price, carousel_images, name } = value;
          newDiv.innerHTML = `
            <div><img src="${carousel_images[0]}"/></div>
            <div>${name}</div>
            <div>${current_price}</div>
            <div>
             <button class="down">-</button>
                    <div class="count">${value.quantity}</div>
                    <button class="up">+</button>
            </div>`;
          listCard.appendChild(newDiv);
          let btnup = newDiv.querySelector(".up");
          let btndown = newDiv.querySelector(".down");
          
          btnup.addEventListener("click", () => {
            changeQuantity(index, value.quantity + 1);
          });
          btndown.addEventListener("click", () => {
            changeQuantity(index, value.quantity - 1);
          });
          deletList.addEventListener("click", () => {
          changeQuantity(index, 0);
            quantity.innerHTML = `0`;
            total.innerHTML = `total :0 $`;
          });
        }
      });
     const totalTest = listCards.reduce((current, item) => {
       current += item.current_price;
     }, 0);
      total.innerHTML  = `total :${totalPrice}$`;
      quantity.innerHTML = count;
    }

    function changeQuantity(index, quantity) {
      if (quantity == 0) {
        delete listCards[index];
      } else {
        listCards[index].quantity = quantity;
        listCards[index].current_price =
          quantity * products[index].current_price;
      }
      reloadCard();
    }

    // Add a click event listener to the "Add to Cart" button
    let addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        addToCard(index);
      });
    });
  });

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

//                        wiew product page 

fetch("shoes.json")
  .then((response) => response.json())
  .then((data) => {
    const productsContainer = document.querySelectorAll(".veiwproduct");
    productsContainer.forEach((veiw, index) => {
      veiw.addEventListener("click", (event) => {
        // Check if the clicked element is a product
        if (event.target.classList.contains("veiwproduct")) {
          // Retrieve the product index
          const productId = event.target.dataset.productId;
          // Find the corresponding product details in the JSON data
          const product = data.filter((veiw) => veiw.id == productId);
          console.log("pro", product);

          // Encode the data as query parameters
          const queryString = new URLSearchParams(product[0].id).toString();

          // Set the new URL with the encoded query parameters
          const newURL = "./cart.html?" + queryString;

          // Redirect to the new HTML file
          window.location.href = newURL;
        }
      });
    });
  });

//Dark Mode
const icon = document.querySelector('.fa-moon');
const pageBody = document.querySelector('body');
const landing = document.getElementById('landing');

icon.addEventListener('click', function() {
  pageBody.classList.toggle('dark-theme');
  landing.classList.toggle('dark-theme');
  
});
