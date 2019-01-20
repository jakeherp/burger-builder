import React from "react";
import NavItems from "../NavItems/NavItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

import classes from "./Drawer.css";

const drawer = props => {
  let attachedClasses = [classes.Drawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.Drawer, classes.Open];
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <nav>
          <NavItems />
        </nav>
      </div>
    </Aux>
  );
};

export default drawer;
