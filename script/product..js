let product_div = document.getElementById("product_div")
function collectProduct() {
  
    function makeCopies(i, nam, p, b,id) {
        this.image = i;
        this.name = nam;
        this.price = p;
        this.brand = b;
        this.id = id;
    }
    let pro1 = new makeCopies("https://spareshub.com/pub/media/catalog/product/placeholder/default/no_image.png","Meyle Lower Arm Bush - Small For Audi Q3 Passat All",5400, "Audi", 1 )
    let pro2 = new makeCopies("https://spareshub.com/pub/media/catalog/product/placeholder/default/no_image.png","Meyle Lower Arm Bush Alu - Big For Audi Q3 Passat All",12500, "Audi" , 2)
    let pro3 = new makeCopies("https://spareshub.com/pub/media/catalog/product/placeholder/default/no_image.png","Sidem Front Axle Upper Arm Lh For Audi A8 Audi A8 4H Diesel",6000, "Audi", 3 )
    let pro4 = new makeCopies("https://spareshub.com/pub/media/catalog/product/placeholder/default/no_image.png","Sidem Front Axle Upper Arm Rh For Audi A8 Audi A8 4H Diesel",4500, "Audi", 4 )
    let pro5 = new makeCopies("https://spareshub.com/pub/media/catalog/product/placeholder/default/no_image.png","Continental Timing Kit For Audi Q5 2.0 Tdi Diesel" ,6542, "Audi",5)
    let pro6 = new makeCopies("https://spareshub.com/pub/media/catalog/product/placeholder/default/no_image.png","Imported Bonnet Shocker (Taiwan) For Bmw 3 Series Bmw E90 All ", 1530, "Bmw", 249, 6)
    let pro7 = new makeCopies("https://spareshub.com/pub/media/catalog/product/placeholder/default/no_image.png","Imported Bonnet Shocker (Taiwan) For Bmw 3 Series Bmw E90 All", 1800,  "Bmw", 270, 7)
    let pro8 = new makeCopies("https://spareshub.com/pub/media/catalog/product/placeholder/default/no_image.png","Febi Bilstein Lower Arm Bush For Bmw 3 Series 320D,Na All ", 3780,  "Bmw", 530, 8)
    let pro9 = new makeCopies("https://spareshub.com/pub/media/catalog/product/placeholder/default/no_image.png","Lemforder Engine Mounting (Hydraulic) For Bmw 3 Series 320D,Bmw E90 All",2240, "Bmw", 9 )
    let pro10 = new makeCopies("https://spareshub.com/pub/media/catalog/product/placeholder/default/no_image.png","Continental Alternator Belt For Bmw 5 Series 520D,E60 Diesel", 2260, "Bmw", 10)
    let pro11 = new makeCopies("https://spareshub.com/pub/media/catalog/product/placeholder/default/no_image.png","Aayub Rear Drum For Chevrolet Aveo Na All", 1830, "Chevrolet", 11)
    let pro12 = new makeCopies("https://spareshub.com/pub/media/catalog/product/placeholder/default/no_image.png","Ktech Brake Drum For Chevrolet Aveo Na All",12300, "Chevrolet", 12)
    let pro13 = new makeCopies("https://spareshub.com/pub/media/catalog/product/placeholder/default/no_image.png","Magical Caliper Pin Kit For Chevrolet Aveo All All", 3700, "Chevrolet", 13)
    let pro14 = new makeCopies("https://spareshub.com/pub/media/catalog/product/placeholder/default/no_image.png","Magical Caliper Pin Kit For Chevrolet Spark All All",1910, "Chevrolet", 14 )
    let pro15 = new makeCopies("https://spareshub.com/pub/media/catalog/product/placeholder/default/no_image.png","Magical Brake Calliper Pin Kit For Chevrolet Beat Beat (Pin &amp; Bolt Set) All",2200, "Chevrolet", 15 )
    let pro16 = new makeCopies("https://spareshub.com/pub/media/catalog/product/placeholder/default/no_image.png","Gates Micro V Belt For Honda Accord Diesel Diesel",16500,"honda",16)
    let pro17 = new makeCopies("https://spareshub.com/pub/media/catalog/product/placeholder/default/no_image.png","Gates Micro V Belt For Honda City Petrol Petrol", 3500, "honda", 17)
    let pro18 = new makeCopies("https://spareshub.com/pub/media/catalog/product/placeholder/default/no_image.png","Imported Winder Regulator Assly With Motor - [Sam] For Honda City Type-5 All",350, "honda", 18 )
    let pro19 = new makeCopies("https://spareshub.com/pub/media/catalog/product/placeholder/default/no_image.png","Imported Engine  Mount For Honda Accord Type-4 All",380, "honda", 19 )
    let pro20 = new makeCopies("https://spareshub.com/pub/media/catalog/product/placeholder/default/no_image.png","Imported Engine Mounting (Eva) For Honda City Na All",360, "honda",20 )
    
    let arr = [];

    arr.push(pro1)
    arr.push(pro2)
    arr.push(pro3)
    arr.push(pro4)
    arr.push(pro5)
    arr.push(pro6)
    arr.push(pro7)
    arr.push(pro8)
    arr.push(pro9)
    arr.push(pro10)
    arr.push(pro11)
    arr.push(pro12)
    arr.push(pro13)
    arr.push(pro14)
    arr.push(pro15)
    arr.push(pro16)
    arr.push(pro17)
    arr.push(pro18)
    arr.push(pro19)
    arr.push(pro20)

    // console.log("arr ", arr)

    if (localStorage.getItem('productlist') == null) {
        localStorage.setItem('productlist', JSON.stringify(arr));
    }
    
    
}
collectProduct();

function createElement(el) {
    let individualProDiv = document.createElement("div");
    individualProDiv.setAttribute("id", "gDiv");
    let img = document.createElement("img");
    img.src = el.image;

    img.setAttribute('id', 'gridImage');
    // console.log(img);

    let addToCart = document.createElement("button");
  addToCart.innerHTML = "ADD TO CART";
  addToCart.setAttribute("id","addToCart")
    addToCart.addEventListener("click", function () {
      add_To_Cart(el);
    });

    let p_name = document.createElement('p');
    p_name.setAttribute("id","proName")
    p_name.textContent = el.name;

    let p_brand =document.createElement("h2");
    p_brand.setAttribute("id","proBrand")
    p_brand.textContent = el.b
    let allPricesSpan = document.createElement('div');
    allPricesSpan.setAttribute("id","floatAll")
    allPricesSpan.innerHTML = `&#x20B9 <h3 id = "h333">${el.price}</h3> &nbsp  &nbsp <h2> ${el.brand}</h2> `

    
    individualProDiv.append(img, addToCart, p_name, allPricesSpan,p_brand);
    product_div.append(individualProDiv);
}

function fatchProducts(d) {
    let data = d;
    product_div.innerHTML = null;

    data.forEach(function (el) {
        createElement(el);
    })
}
fatchProducts(JSON.parse(localStorage.getItem('productlist')));

/* AllProducts End */

/* -------------------------------------------------------------------- */

// To add to cart functionality start

function add_To_Cart(obj) {
  let arr;
  arr = localStorage.getItem("cart");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("cart"));
  }
  arr.push(obj);
  alert('Product added to cart successfully')
  localStorage.setItem("cart", JSON.stringify(arr));
}

function showCart() {
  window.location.href = "basket.html";
}


// filter

let productList = JSON.parse(localStorage.getItem("productlist"))

function sortHIghTOLow(){
      productList= productList.sort(function(a,b){
     return b.price- a.price
 })
 fatchProducts(productList)
}

function sortLowTOHigh(){
  productList = productList.sort(function(a,b){
    return a.price - b.price
  })
  fatchProducts(productList)
}

function priceRange(){
   let pr = productList.filter(function(el){
      if(el.price >= 1 && el.price <= 1000){
        // fatchProducts(el)
        return el
      //  console.log(el.price)
      }
    })
    product_div.innerHTML = null;
    pr.forEach(function (el) {
        createElement(el);
    })
    fatchProducts(pr)
}
function priceRange1(){
   let pr = productList.filter(function(el){
      if(el.price >= 1000 && el.price <= 5000){
        // fatchProducts(el)
        return el
      //  console.log(el.price)
      }
    })
    // console.log("messae",pr)
    product_div.innerHTML = null;
    pr.forEach(function (el) {
        createElement(el);
    })
    fatchProducts(pr)
}
function priceRange2(){
   let pr = productList.filter(function(el){
      if(el.price >= 5000){
        // fatchProducts(el)
        return el
      //  console.log(el.price)
      }
    })
    product_div.innerHTML = null;
    pr.forEach(function (el) {
        createElement(el);
    })
    fatchProducts(pr)
}
// fatchProducts(priceRange(productList))



function brandDisplay1(){
  let pr = productList.filter(function(el){
    if(el.brand === "Audi"){
      // console.log(el)
      return el
    }
  })
  product_div.innerHTML = null;
  pr.forEach(function(el){
    createElement(el);
  })
  fatchProducts(pr)
}
function brandDisplay2(){

  let pr = productList.filter(function(el){
    if(el.brand === "Bmw"){
      // console.log(el)
      return el
    }
  })
  product_div.innerHTML = null;
  pr.forEach(function(el){
    createElement(el);
  })
  fatchProducts(pr)
}
function brandDisplay3(){

  let pr = productList.filter(function(el){
    if(el.brand === "Chevrolet"){
      // console.log(el)
      return el
    }
  })
  product_div.innerHTML = null;
  pr.forEach(function(el){
    createElement(el);
  })
  fatchProducts(pr)
}
function brandDisplay4(){

  let pr = productList.filter(function(el){
    if(el.brand === "honda"){
      // console.log(el)
      return el
    }
  })
  product_div.innerHTML = null;
  pr.forEach(function(el){
    createElement(el);
  })
  fatchProducts(pr)
}