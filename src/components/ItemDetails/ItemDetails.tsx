import React from "react";
import { Box } from "grommet";

export interface ItemDetailsProps {}

export interface ItemDetailsState {}

class ItemDetails extends React.Component<ItemDetailsProps, ItemDetailsState> {
  constructor(props: ItemDetailsProps) {
    super(props);
    //this.state = { :  };
  }
  render() {
    return (
      <Box flex align="center" justify="center">
        Item details
      </Box>
    );
  }
}

export default ItemDetails;
