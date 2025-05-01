import axios from 'axios';
import React, { useState } from 'react';

const Addblogs = () => {
  const [creator , setCreator] = useState("") ; 
  const [blog_img , setblogimg] = useState("") ; 
  const [title , setTitle] = useState("") ; 
  const [description , setDescription] = useState ("")
  const [blogoperation , setBlogoperation] = useState(false)

  const addBlog = function (){
    axios.post("http://localhost:5500/addblogs",{creator,blog_img,title,description}).then((res)=>{
      setBlogoperation(true) ; 
      setCreator("") ; 
      setblogimg("") ; 
      setTitle("") ; 
      setDescription("") ; 
      setTimeout(()=>{
         setBlogoperation(false)
      },2000)
    })
  }


    return (
        


        <div className=" w-75 mx-auto addform " style={{backgroundColor:"#2C3E50" , color:"white"}}>
  {blogoperation && <div className="alert alert-warning text-center w-50 mx-auto fw-medium" role="alert">
        You added a new blog successfully 🥳
</div>}
  
  <div className="row mb-3">
          <label
           
            className="col-sm-2 col-form-label fw-semibold"
          >
            Title:
          </label>
          <div className="col-sm-10">
            <input
           
              placeholder="Put the title of blog..."
              type="text"
              className="form-control"
             
              onChange={(e)=> setTitle(e.target.value)}
              value={title}
            />
          </div>
        </div>
  
  
        <div className="row mb-3">
          <label
         
            className="col-sm-2 col-form-label fw-semibold"
          >
            blog-Image:
          </label>
          <div className="col-sm-10">
            <input
           
              placeholder="Put the url of the image..."
              type="text"
              className="form-control"
            
              onChange={(e)=>setblogimg(e.target.value)}
              value={blog_img}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
          
            className="col-sm-2 col-form-label fw-semibold"
          >
            Creator :
          </label>
          <div className="col-sm-10">
            <input
          
              placeholder="Put your name..."
              type="text"
              className="form-control"
           
              onChange={(e)=>setCreator(e.target.value)} 
              value={creator}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
          
            className="col-sm-2 col-form-label fw-semibold"
          >
            Description:
          </label>
          <div className="col-sm-10">
            <textarea rows={10}
        
              type="text"
              placeholder="Put the Description of the blog..."
              className="form-control"
              
              onChange={(e)=> setDescription(e.target.value)}
              value={description}
            />
      
          </div>
  
  
        </div>
  
  
  
      
  
     
  
  
        <button
          onClick={addBlog}
          type="submit"
          className="btn btn-primary ms-4  "
        >
          Add New blog
        </button>
      </div>

        
    );
}

export default Addblogs;
