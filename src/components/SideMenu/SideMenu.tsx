import React from "react";
import {
  Box,
  TextInput,
  Button,
  Accordion,
  AccordionPanel,
  Text,
  RadioButtonGroup
} from "grommet";
import "./SideMenu.css";
import { Search } from "grommet-icons";
import { HashRouter, Route } from "react-router-dom";
export interface SideMenuProps {}

export interface SideMenuState {
  searchQuery: string;
  selectedDep: string;
  selectedCat: string;
}

class SideMenu extends React.Component<any, SideMenuState> {
  constructor(props: SideMenuProps) {
    super(props);
    console.log(this.props);
    this.state = {
      searchQuery: this.props.match.params.req || "",
      selectedDep: "1",
      selectedCat: "1"
    };
  }
  setSearchQ = (v: any) => {
    this.setState({ searchQuery: v });
  };
  startSearch = () => {
    // eslint-disable-next-line no-restricted-globals
    this.props.history.push("/home/" + this.state.searchQuery);
  };
  setDepartment = (selectedDep: any) => {
    this.setState({ selectedDep: selectedDep });
  };
  setCategory = (selectedCat: any) => {
    this.setState({ selectedCat: selectedCat });
  };
  render() {
    return (
      <Box direction="column" fill margin={{ top: "50px" }}>
        <Box className="searchBox" direction="row" pad="small">
          <TextInput
            name="searchQ"
            id="searchQ"
            plain
            focusIndicator={false}
            value={this.state.searchQuery}
            placeholder="Search for item"
            onChange={(event: any) => this.setSearchQ(event.target.value)}
          />
          <Button
            label="Search"
            icon={<Search />}
            plain
            focusIndicator={false}
            onClick={() => this.startSearch()}
          />
        </Box>
        <Box margin={{ top: "small" }} pad="small">
          <Text>Search By departments & categories</Text>
        </Box>
        <Accordion multiple={true}>
          <AccordionPanel label="department">
            <Box pad="small" background="light-2">
              <RadioButtonGroup
                name="department"
                options={[
                  {
                    disabled: false,
                    id: "ONE",
                    label: "one dep",
                    value: "1"
                  },
                  {
                    disabled: false,
                    id: "two",
                    label: "two dep",
                    value: "2"
                  },
                  {
                    disabled: false,
                    id: "three",
                    label: "three dep",
                    value: "3"
                  }
                ]}
                value={this.state.selectedDep}
                onChange={event => this.setDepartment(event.target.value)}
              />
            </Box>
          </AccordionPanel>
          <AccordionPanel label="category">
            <Box pad="small" background="light-2">
              <RadioButtonGroup
                name="categorie"
                options={[
                  {
                    disabled: false,
                    id: "onecat",
                    label: "one cat",
                    value: "1"
                  },
                  {
                    disabled: false,
                    id: "twocat",
                    label: "two cat",
                    value: "2"
                  },
                  {
                    disabled: false,
                    id: "threecat",
                    label: "three cat",
                    value: "3"
                  }
                ]}
                value={this.state.selectedCat}
                onChange={event => this.setCategory(event.target.value)}
              />
            </Box>
          </AccordionPanel>
        </Accordion>
      </Box>
    );
  }
}

export default SideMenu;
