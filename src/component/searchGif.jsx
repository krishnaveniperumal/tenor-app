import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export const SearchGif = (props) => {
  const [searchTerm, SetSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleName = (event) => {
    SetSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${searchTerm}`);
    window.location.reload()
  };

  return (
    <nav className="navbar navbar-light fixed-top bgInfo pb-3">
      <div className="container">
        <form onSubmit={handleSubmit} className="input-group ">
          <input
            className="form-control border-end-0 border"
            type="text"
            name="searchTerm"
            placeholder="Search gif"
            defaultValue={props.searchTerm ? props.searchTerm : searchTerm}
            onChange={handleName}
          />
          <span className="input-group-append">
            <button
              className="btn btn-outline-secondary bg-white border-start-0 border-bottom-0 border ms-n5"
              type="button"
            >
              <i className="fa fa-search"></i>
            </button>
          </span>
        </form>
      </div>
    </nav>
  );
};
