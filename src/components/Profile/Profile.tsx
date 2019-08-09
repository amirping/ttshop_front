import React from "react";
import { Box } from "grommet";

export interface ProfileProps {}

export interface ProfileState {}

class Profile extends React.Component<ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
    super(props);
    //this.state = { :  };
  }
  render() {
    return (
      <Box flex align="center" justify="center">
        Profile
      </Box>
    );
  }
}

export default Profile;
