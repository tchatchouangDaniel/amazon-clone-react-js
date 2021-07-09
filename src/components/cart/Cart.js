import React from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Cart.css";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    padding: "0 4px",
    background: "#f3a847",
  },
}))(Badge);

export default function CustomizedBadges() {
  return (
    <IconButton className="icon" aria-label="cart">
      <StyledBadge badgeContent={"0"}>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
