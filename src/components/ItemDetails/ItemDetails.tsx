import React from "react";
import { Box, ResponsiveContext, Heading, Button, Layer, Collapsible, Image, Paragraph,Text } from "grommet";
import { Menu, FormClose, Money } from "grommet-icons";
import SideMenu from "../SideMenu/SideMenu";
import "./ItemDetails.css"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export interface ItemDetailsProps {}

export interface ItemDetailsState {
     showSidebar: boolean; price: number;
  discounted_price: number;
  images:Array<any>;
  isopenBox :boolean;
  indexImage:number
}

class ItemDetails extends React.Component<ItemDetailsProps, ItemDetailsState> {
  constructor(props: ItemDetailsProps) {
    super(props);
    this.state = { showSidebar: true,price: 25.0,
      discounted_price: 19.0,
      images : ['https://v2.grommet.io/assets/Wilderpeople_Ricky.jpg','https://v2.grommet.io/assets/Wilderpeople_Ricky.jpg'],
      indexImage: 0,
      isopenBox: false,
      } ;
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
              <Box margin={{ left: "45px" }} fill="horizontal">
                <Heading level="4">Department one > categorie two > bsdkfbkdskf bsk ssdf</Heading>
              </Box>
               <Box flex direction="row-responsive" fill pad="small" gap="10px">
                  <Box flex direction="column" className="picsSide" gap="20px">
                    <Box>
                     <Image fit="cover" src="https://v2.grommet.io/assets/Wilderpeople_Ricky.jpg" onClick={() => this.setState({ isopenBox: true })}/>
                    </Box>
                    <Box direction="row" gap="20px">
                        <Box>
                            <Image fit="cover" src="https://v2.grommet.io/assets/Wilderpeople_Ricky.jpg" onClick={() => this.setState({ isopenBox: true })}/>
                        </Box>
                        <Box>
                            <Image fit="cover" src="https://v2.grommet.io/assets/Wilderpeople_Ricky.jpg" onClick={() => this.setState({ isopenBox: true })}/>
                        </Box><Box>
                            <Image fit="cover" src="https://v2.grommet.io/assets/Wilderpeople_Ricky.jpg" onClick={() => this.setState({ isopenBox: true })}/>
                        </Box>
                    </Box>
                  </Box>
                  <Box flex direction="column">
                    <Heading level="4">
                        Product name
                    </Heading>
                    <Paragraph>
                        This beautiful and iconic T-shirt will no doubt lead you to your own triumph.
                    </Paragraph>
                    <Box direction="row-responsive" pad="small" justify="between">
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
          <Box direction="row-responsive" gap="10px">
            <Button plain hoverIndicator={false}> View : 0 </Button>
            <Button hoverIndicator={false} > Add to Basket </Button>
          </Box>
        </Box>
                  </Box>
               </Box>
            </Box>
            {this.state.isopenBox && (
          <Lightbox
            mainSrc={this.state.images[this.state.indexImage]}
            nextSrc={this.state.images[(this.state.indexImage + 1) % this.state.images.length]}
            prevSrc={this.state.images[(this.state.indexImage + this.state.images.length - 1) % this.state.images.length]}
            onCloseRequest={() => this.setState({isopenBox: false })}
            onMovePrevRequest={() =>
              this.setState({
                indexImage: (this.state.indexImage + this.state.images.length - 1) % this.state.images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                indexImage: (this.state.indexImage + 1) % this.state.images.length,
              })
            }
          />
        )}
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default ItemDetails;
