import React from "react";

const Slider = () => {
  return (
    <div className="carousel slide  " id="carouselDemo" data-bs-wrap ='true'   data-bs-ride='carousel'>
      <div style={{ marginBottom: "200px" }} className="carousel-inner  ">
       
       
       
       
       
       
        <div style={{height:'800px'}} className="carousel-item active" data-bs-interval="2000">
          <img
            src="https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-100"
          />
          <div style={{paddingBottom:'0px'}} className="carousel-caption">
            <h3>Authentic Italian Lasagna</h3>
            <p>
              Indulge in the rich layers of our authentic Italian lasagna, made
              with fresh pasta, savory Bolognese sauce, creamy béchamel, and a
              blend of premium cheeses. Perfectly baked to golden perfection,
              this classic dish brings the heart of Italy straight to your table
            </p>
          </div>
        </div>
        
        
        
        
        
        
        <div style={{height:'800px'}} className="carousel-item" data-bs-interval="2000">
          <img
            src="https://images.pexels.com/photos/6294205/pexels-photo-6294205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-100"
          />

<div style={{paddingBottom:'0px'}} className="carousel-caption">
            <h3>Classic Margherita Pizza</h3>
            <p>
            Experience the simplicity and elegance of a classic Margherita pizza.
             Featuring a thin, crispy crust topped with tangy tomato sauce, 
             fresh mozzarella, 
            and aromatic basil leaves, 
            this pizza captures the essence of traditional Italian flavors with every bite.
            </p>
          </div>
        </div>
       
       
       
       
       
       
       
       
        <div style={{height:'800px'}} className="carousel-item" data-bs-interval="2000">
          <img
            src="https://images.pexels.com/photos/6157045/pexels-photo-6157045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-100"
          />
          <div style={{paddingBottom:'0px'}} className="carousel-caption" >
          <h3>Creamy Tuscan Garlic Shrimp</h3>
            <p>
            Treat yourself to the luxurious taste of our creamy Tuscan garlic shrimp.
             This delightful dish combines succulent shrimp, sun-dried tomatoes, and fresh spinach in a rich,
              garlicky cream sauce, served over a bed of perfectly cooked pasta.
               A true taste of Tuscany in every forkful.
            </p>
          </div>
        </div>
       
       
       
       
       
       
       
       
        <div style={{height:'800px'}} className="carousel-item" data-bs-interval="2000">
          <img
            src="https://images.pexels.com/photos/6621424/pexels-photo-6621424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-100"
          />
              <div style={{paddingBottom:'0px'}} className="carousel-caption" >
          <h3>Rustic Mushroom Risotto</h3>
            <p>
            Savor the comforting flavors of our rustic mushroom risotto. Made with Arborio rice, 
            earthy mushrooms, and a splash of white wine, this creamy, 
            velvety dish is cooked to perfection and finished with a generous sprinkle of Parmesan cheese.
             An irresistible Italian classic that warms the soul.
            </p>
          </div>
        </div>
      </div>


   <button className="carousel-control-prev"
    type="button"
    data-bs-target = '#carouselDemo'
    data-bs-slide = "prev"
    
    >
    <span className="carousel-control-prev-icon"></span>
   </button>


<button className="carousel-control-next"
type="button"
data-bs-target = '#carouselDemo'
data-bs-slide = "next"
>

    <span className="carousel-control-next-icon"></span>


</button>
  

     

    </div>
  );
};

export default Slider;
