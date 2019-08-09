import React, { Component } from "react";
import { Box, Image, Heading, Paragraph, Text } from "grommet";
import { Money } from "grommet-icons";
import "./Item.css";
export interface ItemProps {}

export interface ItemState {
  id: number;
  name: string;
  description: string;
  price: number;
  discounted_price: number;
  image1: string;
  image2: string;
  thumbnail: string;
  display: number;
}

class Item extends Component<ItemProps, ItemState> {
  constructor(props: ItemProps) {
    super(props);
    this.state = {
      id: 1,
      name: "Item One",
      description:
        "This beautiful and iconic T-shirt will no doubt lead you to your own triumph.",
      price: 25.0,
      discounted_price: 19.0,
      image1: "string",
      image2: "string",
      thumbnail: "string",
      display: 0
    };
  }
  render() {
    return (
      <Box
        basis="1/4"
        animation="fadeIn"
        overflow="auto"
        elevation="small"
        key={this.state.id}
        width="small"
        height="medium"
        margin="xsmall"
        className="item"
        direction="column">
        <Box pad="small">
          <Heading margin="none" level="6">
            {this.state.name}
          </Heading>
        </Box>
        <Box height="small">
          <Image
            fit="cover"
            src="https://v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
          />
        </Box>
        <Paragraph margin="xsmall">{this.state.description}</Paragraph>
        <Box direction="row-responsive" pad="small">
          {this.state.discounted_price === 0 ? (
            <Box direction="row">
              <Box gap="xsmall">
                <Money />{" "}
                <Text size="large">
                  {this.state.price % 1 === 0
                    ? this.state.price + ".00"
                    : this.state.price}
                </Text>
              </Box>
            </Box>
          ) : (
            <Box direction="row" gap="xsmall">
              <Box
                direction="row"
                className="oldPrice"
                gap="xsmall"
                alignContent="center"
                justify="center">
                <Money />{" "}
                <Text margin="auto">
                  {" "}
                  {this.state.price % 1 === 0
                    ? this.state.price + ".00"
                    : this.state.price}{" "}
                </Text>
              </Box>
              <Box justify="center">
                <Text size="large">
                  {" "}
                  {this.state.discounted_price % 1 === 0
                    ? this.state.discounted_price + ".00"
                    : this.state.discounted_price}
                </Text>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    );
  }
}

export default Item;
