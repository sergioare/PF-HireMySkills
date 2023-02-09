import React from "react";
import ReactStars from "react-rating-stars-component";

const Stars = (props) => {
  // console.log(props.type, "props");
  const starCount = parseInt(props.value);
  const secondExample = {
    // count: 5,
    value: starCount,
    edit: false,
    color: "black",
    activeColor: "#ecea4c",
  };
  return (
    <div>
      <ReactStars {...secondExample} />
    </div>
  );
};

export default Stars;
