import React from "react";
import Rating from "@material-ui/lab/Rating";

export default function SimpleRating(props) {
  const [value, setValue] = React.useState(props.rating);

  return (
    <div>
      <Rating name="read-only" value={value} readOnly />
    </div>
  );
}
