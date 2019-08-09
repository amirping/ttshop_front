import React from "react";
import { Box } from "grommet";

export interface OrderProps {}

export interface OrderState {}

class Order extends React.Component<OrderProps, OrderState> {
  constructor(props: OrderProps) {
    super(props);
    //this.state = { :  };
  }
  render() {
    return (
      <Box flex align="center" justify="center">
        Orders
      </Box>
    );
  }
}

export default Order;
