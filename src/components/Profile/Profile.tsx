import React from "react";
import { Box, Heading, Form, Button, FormField, Select } from "grommet";

export interface ProfileProps {}

export interface ProfileState {
    ship_id:any
}

class Profile extends React.Component<ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
    super(props);
    this.state = { ship_id:"0"  };
  }
  render() {
    return (
      <Box flex justify="center" align="center" >
        <Box direction="column" width="large" pad="small" round="xsmall" elevation="small" overflow="auto">
            <Heading level="3" margin="none"> Profile </Heading>
            <Heading level="4"> Account data </Heading>
            <Form>
                <FormField name="name" placeholder="Name" />
                <FormField name="email" placeholder="Email" />
                <FormField name="password" placeholder="Password" />
<Box direction="row" justify="end">
                <Button  type="submit" primary label="Save" />
</Box>
            </Form>
            <Heading  level="4"> Payment & Shipping </Heading>
            <Form>
                <FormField name="c_card" placeholder="creadit card" />
                <FormField name="address_1" placeholder="address 1" />
                <FormField name="address_2" placeholder="address 2" />
                <FormField name="city" placeholder="city" />
                <FormField name="region" placeholder="region" />
                <FormField name="postal_code" placeholder="postal code" />
                <FormField name="country" placeholder="country" />
                <Select
                    labelKey="label"
                    valueKey="value"
                    options={[{
                    label: "Please Select",
                    value: "0"
                  },{
                    label: "US / Canada",
                    value: "1"
                  },{
                    label: "Europe",
                    value: "2"
                  },{
                    label: "Rest of World",
                    value: "3"
                  }]}
                     value={this.state.ship_id}
                     onChange={({ option }) => this.setState({ship_id:option})}
                 />
                <Box direction="row" justify="end">
                <Button  type="submit" primary label="Save" />
</Box>
            </Form>
             <Heading  level="4"> Contacts </Heading>
            <Form>
                <FormField name="day_phone" placeholder="day phone" />
                <FormField name="evening_day" placeholder="evening day" />
                <FormField name="mobile_phone" placeholder="mobile phone" />

                <Box direction="row" justify="end">
                <Button  type="submit" primary label="Save" />
</Box>
            </Form>



        </Box>
      </Box>
    );
  }
}

export default Profile;
