import React from "react";
import Rating from "@material-ui/lab/Rating";

export default function SimpleRating() {
  const [value, setValue] = React.useState(5);

  return (
    <div>
      <Rating name="read-only" value={value} readOnly />
    </div>
  );
}
