import React, { Component } from "react";
import {
  Box,
  Button,
  Collapsible,
  ResponsiveContext,
  Layer,
  Heading
} from "grommet";
import { Menu, FormClose } from "grommet-icons";
import "./HomeStore.css";
import SideMenu from "../SideMenu/SideMenu";
import Item from "../Item/Item";
export interface HomeStoreProps {}

export interface HomeStoreState {
  showSidebar: boolean;
  items: Array<any>;
}

class HomeStore extends Component<any, HomeStoreState> {
  constructor(props: HomeStoreProps) {
    super(props);
    this.state = {
      showSidebar: true,
      items: [
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        }
      ]
    };
  }
  render() {
    const { showSidebar } = this.state;
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            direction="row"
            flex
            overflow={{ horizontal: "hidden" }}
            className="relative">
            {!showSidebar || size !== "small" ? (
              <Collapsible direction="horizontal" open={showSidebar}>
                <Box
                  flex
                  width="medium"
                  background="light-2"
                  elevation="small"
                  align="center"
                  justify="center">
                  <SideMenu {...this.props} />
                </Box>
              </Collapsible>
            ) : (
              <Layer>
                <Box
                  background="light-2"
                  tag="header"
                  justify="end"
                  align="center"
                  direction="row">
                  <Button
                    icon={<FormClose />}
                    onClick={() => this.setState({ showSidebar: false })}
                  />
                </Box>
                <Box fill background="light-2" align="center" justify="center">
                  <SideMenu {...this.props} />
                </Box>
              </Layer>
            )}
            <Box flex direction="column">
              <Button
                color="dark"
                className="sideShow-btn"
                icon={<Menu />}
                onClick={() =>
                  this.setState(prevState => ({
                    showSidebar: !prevState.showSidebar
                  }))
                }
              />
              <Box margin={{ left: "45px" }}>
                <Heading level="4">Department one > categorie two</Heading>
              </Box>
              <Box
                direction="row"
                flex
                pad="small"
                wrap={true}
                justify="center">
                {this.state.items.map(item => (
                  <Item {...this.props} />
                ))}
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default HomeStore;
