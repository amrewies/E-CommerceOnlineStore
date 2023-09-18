
fetch("./shoes.json")
  .then((response) => response.text())
  .then((json) => (products = JSON.parse(json)))
  .then((products) => {
    // console.log( "products" ,products[0].id)
    for (const key in products) {
      // Parse the query parameters from the URL
      const queryString = window.location.search;
      const param = queryString.split("?")[1].split("=")[0];
      if (param == products[key].id) {
        let {
          id,
          current_price,
          carousel_images,
          name,
          reviews,
          old_price,
          type,
          available_colors,
        } = products[key];
    
        document.body.innerHTML += `
    <div class = "card-wrapper">
      <div class = "card">
        <!-- card left -->
        <div class = "product-imgs">
          <div class = "img-display">
            <div class = "img-showcase">
              <img src = "${carousel_images[0]}" alt = "shoe image">
              <img src = "${carousel_images[1]}" alt = "shoe image">
              <img src = "${carousel_images[2]}" alt = "shoe image">
              <img src = "${carousel_images[3]}" alt = "shoe image">
            </div>
          </div>
          <div class = "img-select">
            <div class = "img-item">
              <a href = "#" data-id = "1">
                <img src = "${carousel_images[0]}" alt = "shoe image">
              </a>
            </div>
            <div class = "img-item">
              <a href = "#" data-id = "2">
                <img src = "${carousel_images[1]}" alt = "shoe image">
              </a>
            </div>
            <div class = "img-item">
              <a href = "#" data-id = "3">
                <img src = "${carousel_images[2]}" alt = "shoe image">
              </a>
            </div>
            <div class = "img-item">
              <a href = "#" data-id = "4">
                <img src = "${carousel_images[3]}" alt = "shoe image">
              </a>
            </div>
          </div>
        </div>
         <!-- card right -->
        <div class = "product-content">
          <h2 class = "product-title">${name}</h2>
          <a href = "./index.html" class = "product-link">visit adidas store</a>
          <div class = "product-rating">
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star-half-alt"></i>
            <span>4.7(${reviews})</span>
          </div>

          <div class = "product-price">
            <p class = "last-price">Old Price: <span>$${old_price}</span></p>
            <p class = "new-price">New Price: <span>$${current_price}</span></p>
          </div>

          <div class = "product-detail">
            <h2>about this item: </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
            <ul>
              <li>Color: <span>${available_colors}</span></li>
              <li>Available: <span>in stock</span></li>
              <li>Category: <span>${type}</span></li>
              <li>Shipping Area: <span>All over the world</span></li>
              
            </ul>
          </div>

        

          <div class = "social-links">
            <p>Share At: </p>
            <a href = "#">
              <i class = "fab fa-facebook-f"></i>
            </a>
            <a href = "#">
              <i class = "fab fa-twitter"></i>
            </a>
            <a href = "#">
              <i class = "fab fa-instagram"></i>
            </a>
            <a href = "#">
              <i class = "fab fa-whatsapp"></i>
            </a>
            <a href = "#">
              <i class = "fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </div>`;
      }
      const imgs = document.querySelectorAll(".img-select a");
      const imgBtns = [...imgs];
      let imgId = 1;

      imgBtns.forEach((imgItem) => {
        imgItem.addEventListener("click", (event) => {
          event.preventDefault();
          imgId = imgItem.dataset.id;
          slideImage();
        });
      });

      function slideImage() {
        const displayWidth = document.querySelector(
          ".img-showcase img:first-child"
        ).clientWidth;

        document.querySelector(".img-showcase").style.transform = `translateX(${
          -(imgId - 1) * displayWidth
        }px)`;
      }

      window.addEventListener("resize", slideImage);
    }
  });
