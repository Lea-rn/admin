import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "./slider.jsx";
import "../App.css";

const Main = (props) => {
  const [data, setData] = useState([]);
  const [Deletename, setDeletename] = useState("");
  const [deleteId, setDeleteId] = useState("");

  useEffect(() => {
    if (props.dataupdated.length && props.hundelget === true) {
      setData(props.dataupdated); /// update the data after adding
    }
    if (props.searchdata.length && props.hundelget === null) {
      setData(props.searchdata);
    } else {
      axios.get("http://localhost:5500/home").then((res) => {
        setData(res.data);
        props.handeldata(res.data); //// take a copie of data
      });
    }
  }, [data, props.dataupdated, props.searchdata, props.hundelget]);

  const deletefood = (id) => {
    axios.delete(`http://localhost:5500/delete/${id}`).then((res) => {
      setData(data.filter((element) => element._id !== id));
    });
  };

  //// handel the name of the food to delete in the popup of modal :
  const handleDeleteClick = (name, id) => {
    setDeletename(name);
    setDeleteId(id);
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <Slider />
      <div className="container recipe-gallery py-5">
  <div className="row g-4">
    {data.map((element, index) => (
      <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
        <div className="recipe-card shadow-sm h-100">
          <div className="recipe-image-container">
            <img
              src={element.image}
              className="card-img-top"
              alt={element.Name || "Recipe image"}
            />
          </div>
          <div className="card-body d-flex flex-column">
            <h5 className="recipe-title mb-2">{element.name}</h5>
            <p className="recipe-description flex-grow-1">{element.description}</p>
            <div className="d-flex justify-content-between align-items-center mt-auto">
              <span className="recipe-price fw-bold">{element.price} dt</span>
              <button
                onClick={() => handleDeleteClick(element.name, element.id)}
                type="button"
                className="btn btn-outline-danger btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <i className="bi bi-trash me-1"></i>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
    
    {/* Delete confirmation modal */}
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Confirm Delete
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p className="mb-0">
              Are you sure you want to delete <strong>{Deletename}</strong>?
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              data-bs-dismiss="modal"
              onClick={() => deletefood(deleteId)}
              type="button"
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Main;
