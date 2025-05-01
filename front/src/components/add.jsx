import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";

const Add = (props) => {
  const [newdata, setNewdata] = useState([]);
  const [img, setNewimage] = useState("");
  const [name, setNewname] = useState("");
  const [description, setNewdescription] = useState("");
  const [category, setCategory] = useState("");
  const [price , setPrice] = useState("")
  const navigate = useNavigate();

  const hundelnewimage = (e) => {
    setNewimage(e.target.value);
  };

  const hundelnewname = (e) => {
    setNewname(e.target.value);
  };

  const hundelnewdescription = (e) => {
    setNewdescription(e.target.value);
  };
  const hundelnewPrice = (e)=>{
      setPrice(e.target.value)
  }

  const hundelcategory = (e) => {
    setCategory(e.target.value);
  };

  const addnewrecipe = async () => {
    try {
      const response = await axios.post("http://localhost:5500/add", {
        
        name,
        description,
        price ,
        category,
        img
       

      });
      setNewdata([...props.copyofdata, response.data]); /// "props.copyofdata" is the current data from main component
      props.newdata(newdata); ///// give the function hundelnewdata in the parent component the data after changing

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" w-50 mx-auto addform ">
      <div className="row mb-3">
        <label
          htmlFor="inputEmail3"
          className="col-sm-2 col-form-label fw-semibold"
        >
          Image :
        </label>
        <div className="col-sm-10">
          <input
            onChange={(e) => {
              hundelnewimage(e);
            }}
            placeholder="Put the url of the image..."
            type="text"
            className="form-control"
            id="inputEmail3"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label
          htmlFor="inputPassword3"
          className="col-sm-2 col-form-label fw-semibold"
        >
          Name :
        </label>
        <div className="col-sm-10">
          <input
            onChange={(e) => {
              hundelnewname(e);
            }}
            placeholder="Put the Name of Recipe..."
            type="text"
            className="form-control"
            id="inputPassword3"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label
          htmlFor="inputPassword3"
          className="col-sm-2 col-form-label fw-semibold"
        >
          Description:
        </label>
        <div className="col-sm-10">
          <input
            onChange={(e) => {
              hundelnewdescription(e);
            }}
            type="text"
            placeholder="Put the Description of the recipe..."
            className="form-control"
            id="inputPassword3"
          />
    
        </div>


      </div>



      <div className="row mb-3">
        <label
          htmlFor="inputPassword3"
          className="col-sm-2 col-form-label fw-semibold"
        >
          Price:
        </label>
        <div className="col-sm-10">
          <input
            onChange={(e) => {
              hundelnewPrice(e);
            }}
            type="number"
            placeholder="Put the Price of the recipe..."
            className="form-control"
            id="inputPassword3"
          />
    
        </div>


      </div>

      <label className="fw-bold" htmlFor="recipe-gender">
        You must specify the category :
      </label>

      <select
        onChange={(e) => {
          hundelcategory(e);
        }}
        className="btn btn-danger"
        value={category}
        style={{ marginRight: "50px", marginLeft: "10px" }}
        name="recipes"
        id="recipe-gender"
      >
        <option value="">Choose Here : </option>
        <option value="other recipes">other recipes</option>
        <option value="pasta">pasta</option>
        <option value="meat">meat</option>
      </select>

      <button
        onClick={() => {
          addnewrecipe();
        }}
        type="submit"
        className="btn btn-primary ms-4  "
      >
        Add New Recipe
      </button>
    </div>
  );
};

export default Add;
