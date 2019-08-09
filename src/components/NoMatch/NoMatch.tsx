import React from "react";
import { Box } from "grommet";

export interface NoMatchProps {}

export interface NoMatchState {}

class NoMatch extends React.Component<NoMatchProps, NoMatchState> {
  constructor(props: NoMatchProps) {
    super(props);
    //this.state = { :  };
  }
  render() {
    return (
      <Box flex align="center" justify="center">
        You ARE LOST DUDE
      </Box>
    );
  }
}

export default NoMatch;
