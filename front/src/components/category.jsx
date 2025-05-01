import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../App.css"


const Category = (props) => {
    const [data,setData] = useState([])

   useEffect(()=>{
    axios.get(`http://localhost:5500/category/${props.category}`).then((res)=>{
       setData(res.data)
    })
   },[props.category])

    return (
<div>
  <div className="container recipe-gallery py-5">
    <div className="row g-4">
    {data.map((element) => (
  <div className="col-lg-3 col-md-4 col-sm-6" style={{width:"250px"}} key={element.id}>
    <div className="recipe-card shadow-sm h-100">
      <div className="recipe-image-container">
        <img
          src={element.image || "/default-image.jpg"}
          className="card-img-top"
          alt={element.name || "Recipe image"}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="recipe-title mb-2">{element.name}</h5>
        <p className="recipe-description flex-grow-1">
          {element.description.length > 100
            ? `${element.description.substring(0, 100)}...`
            : element.description}
        </p>
     
      </div>
    </div>
  </div>
))}

    </div>
  </div>
</div>
       
      
    );
}






  

export default Category;
