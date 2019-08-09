import React, { Component } from "react";
import { Box } from "grommet";

export interface AppBarProps {}

export interface AppBarState {}

class AppBar extends Component<any, AppBarState> {
  constructor(props: AppBarProps) {
    super(props);
    //this.state = { :  };
  }
  render() {
    return (
      <Box
        tag="header"
        direction="row-responsive"
        align="center"
        justify="between"
        background="brand"
        pad={{ left: "medium", right: "small", vertical: "small" }}
        elevation="medium"
        style={{ zIndex: 1 }}
        {...this.props}
      />
    );
  }
}

export default AppBar;
