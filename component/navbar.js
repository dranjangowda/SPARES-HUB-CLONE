function navBar(){
  return `  <div class="nav">
  <div class="nav">
    <nav>
      <div class="navUp">
        <div class="navUpLinks">
          <a href="../index/index.html" id="welcomeatspareshub">WELCOME AT SPARESHUB.COM</a>
          |
          <a href="">CONTACT US</a>
          |
          <a href="../login/login.html">SIGN IN </a>
          |
          <a href="../signup/signup.html">CREATE ACCOUNT</a>
        </div>
      </div>
      <div class="navMidContainer">
        <div class="navLeft">
            <div class="sparesImg">
            <img src="	https://spareshub.com/pub/media/logo/stores/1/200x50xlogo.png.pagespeed.ic.3_mBb67eog.webp" alt="">
            </div>
        </div>
        <div class="spaceBetweenNav"></div>
        <div class="navMid">
            <input
            class="input-field"
            type="text"
            placeholder="Search entire store here"
            name="search"
          />
          <i class="fa fa-search icon" id="search-icon"></i>
        </div>
        <div class="spaceBetweenNav"></div>
        <div class="navRight">
                <ul>
                    <li>call us - <a href="">919307901479</a></li>
                    <li>Whatsapp us -  <a href="">9307301476</a></li>
                    <li>Email us - <a href="">care@spareshub.com</a></li>
                </ul>
                <div class="icons" id="basket">
                <a href="../basket/basket.html"><i class="fas fa-shopping-basket"></i></a>
              </div>
        </div>
      </div>
      <div class="navBottom">
        <ul class="navBottom_links">
          <div class="dropdown">
            <li><a href=""> BRANDS </a></li>
            <div class="dropdown-content shopCategorie">
              <div class="products-menu-dropDown">
                   <ul class="products-menu-dropDown-links">
                     <li class="dropLink"><a href="../product/product.html"> </a></li>
                     <li><a href="../product/product.html">AUDI</a></li>
                     <li><a href="../product/product.html">BMW</a></li>
                     <li><a href="../product/product.html">CHEVROLET</a></li>
                     <li><a href="../product/product.html">DAEWOD</a></li>
                     <li><a href="../product/product.html">DATSUN</a></li>
                     <li><a href="../product/product.html">FIAT</a></li>
                   </ul>
                   <ul class="products-menu-dropDown-links">
                    <li class="dropLink"><a href="../product/product.html"> </a></li>
                    <li><a href="../product/product.html">FORCE MOTORS</a></li>
                    <li><a href="../product/product.html">FORD</a></li>
                    <li><a href="../product/product.html">HINDUSTHAN MOTORS</a></li>
                    <li><a href="../product/product.html">HONDA</a></li>
                    <li><a href="../product/product.html">ICML</a></li>
                    <li><a href="../product/product.html">JAGUAR</a></li>
                  </ul>
                  <ul class="products-menu-dropDown-links">
                    <li class="dropLink"><a href="../product/product.html"> </a></li>
                    <li><a href="../product/product.html">lANDROVER</a></li>
                    <li><a href="../product/product.html">MINI</a></li>
                    <li><a href="../product/product.html">MAHINDRA</a></li>
                    <li><a href="../product/product.html">MARUTI</a></li>
                    <li><a href="../product/product.html">MERCEDEZ BENZ</a></li>
                    <li><a href="../product/product.html">MITSUBISHI</a></li>
                  </ul>
                 </div>
              </div>
          </div>
          
          <div class="dropdown">
            <li><a href="">CATEGORIES</a></li>
            <div class="dropdown-content shopCategorie">
              <div class="products-menu-dropDown ">
                   <ul class="products-menu-dropDown-links">
                    <li class="dropLink"><a href="../product/product.html"> </a></li>
                    <li><a href="../product/product.html">BUSHES</a></li>
                    <li><a href="../product/product.html">BELTS</a></li>
                    <li><a href="../product/product.html">BODY PARTS</a></li>
                    <li><a href="../product/product.html">BRAKING SYSTEM</a></li>
                    <li><a href="../product/product.html">CLUTCH SYSTEM</a></li>
                    <li><a href="../product/product.html">ELECTRICALS</a></li>
                   </ul>
                   <ul class="products-menu-dropDown-links">
                    <li class="dropLink"><a href="../product/product.html"> </a></li>
                    <li><a href="../product/product.html">ENGINE PARTS</a></li>
                    <li><a href="../product/product.html">FILTERS</a></li>
                    <li><a href="../product/product.html">STEERING SYSTEM</a></li>
                    <li><a href="../product/product.html">HEATING&COOLING</a></li>
                    <li><a href="../product/product.html">LIGHTING SYSTEM</a></li>
                    <li><a href="../product/product.html">LUBES AND FLUIDS</a></li>
                   </ul>
                   <ul class="products-menu-dropDown-links">
                    <li class="dropLink"><a href="../product/product.html"> </a></li>
                    <li><a href="../product/product.html">SENSORS</a></li>
                    <li><a href="../product/product.html">SUSPENSION SYSTEM</a></li>
                    <li><a href="../product/product.html">TRANSMISSION</a></li>
                   </ul>
                 </div>
              </div>
          </div>
          <li><a href="">MANUFACTURERS</a></li>
          <li><a href="">FRANCHISE</a></li>
          <li><a href="">CARREERS</a></li>
        </ul>
      </div>
    </nav>
</div>`
}

export default navBar