import React from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Cart.css";
import { useStateValue } from "../../StateProvider";

const StyledBadge = withStyles((theme) => ({
  root: {
    color: "#ffffff",
  },
  badge: {
    right: -3,
    top: 13,
    padding: "0 4px",
    background: "#f3a847",
  },
}))(Badge);

export default function CustomizedBadges() {
  const [{ basket }, dispatch] = useStateValue();
  const itemNumber = basket?.length;
  return (
    <IconButton className="icon" aria-label="cart">
      <StyledBadge badgeContent={itemNumber ? itemNumber : "0"}>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
