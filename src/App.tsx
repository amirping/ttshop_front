import React from "react";
import { Box, Grommet, Button, Heading, Stack, Text, Anchor } from "grommet";
import theme from "./theme";
import AppBar from "./components/AppBar/AppBar";
import { Cart, User, Login } from "grommet-icons";
import HomeStore from "./components/HomeStore/HomeStore";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import Order from "./components/Order/Order";
import NoMatch from "./components/NoMatch/NoMatch";
import "./App.css";
const App: React.FC = () => {
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
          <Heading level="4" margin="none">
            <Anchor
              color="light-1"
              className="noDeco"
              href="/"
              label="Turing Shop"
            />
          </Heading>
          <Box
            direction="row-responsive"
            gap="10px"
            justify="center"
            align="center">
            <Stack anchor="top-right" interactiveChild="first">
              <Button
                icon={<Cart />}
                href="/order"
                focusIndicator={false}
                onClick={() => {}}
                label="Cart"
              />
              <Box background="brand" pad={{ horizontal: "xsmall" }} round>
                <Text>8</Text>
              </Box>
            </Stack>

            <Button
              icon={<User />}
              plain
              href="/user"
              focusIndicator={false}
              label="Account"
            />
            <Button
              href="/order"
              focusIndicator={false}
              plain
              icon={<Login />}
              onClick={() => {}}
              label="Create Account / Login"
            />
          </Box>
        </AppBar>
        <Box direction="row" fill>
          <Router>
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route path="/home/:req?/:filter?" exact component={HomeStore} />
              <Route path="/item/:id" component={ItemDetails} />
              <Route path="/user/" component={Profile} />
              <Route path="/order/" component={Order} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Box>
      </Box>
    </Grommet>
  );
};

export default App;
