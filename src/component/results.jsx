import React from "react";

export const Results = (props) => {
  return (
    <div className={`container mt-5 ${props.searchTerm && "pt-5"}`}>
      <h3 className="text-start text-capitalize">
        {props.searchTerm ? props.searchTerm : "Featured Gifs"}
      </h3>
      <div className="card-columns">
        {(props.searchValue?.length > 0 || props.data === undefined
          ? props.searchValue
          : props.data
        ).map((values, index) => (
              <a href={values.itemurl} key={index}>
            <img
              src={values.media_formats.gif.url}
              className=" img-responsive py-2 w-100 cards"
              alt={values.content_description}
              style={{ borderRadius: "10px" }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};
