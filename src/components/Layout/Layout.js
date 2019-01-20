import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Drawer from "../Navigation/Drawer/Drawer";
import classes from "./Layout.css";

class Layout extends Component {
  state = {
    showDrawer: false
  };

  drawerClosedHandler = () => {
    this.setState({ showDrawer: false });
  };

  drawerToggleHandler = () => {
    this.setState(prevState => {
      return {
        showDrawer: !prevState.showDrawer
      };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.drawerToggleHandler} />
        <Drawer
          open={this.state.showDrawer}
          closed={this.drawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
