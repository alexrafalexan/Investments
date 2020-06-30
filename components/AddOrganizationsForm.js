import React , { Component } from 'react';
import {Button, Form, Input, Message} from "semantic-ui-react";
import Investment from '../ethproject/investment';
import web3 from '../ethproject/web3';

class AddOrganizationsForm extends Component {
    state ={
      value: ''
    };

    onSubmit = async event => {
        event.preventDefault();

        const investment = Investment(this.props.address);

        try{
            const account = await web3.eth.getAccounts();
            await investment.methods.B_AddOrganizations(this.state.value).send({
                from: account[0]
            });
        }catch(err){

        }
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label>Διεύθυνση Οργανισμού</label>
                    <Input
                        value ={this.state.value}
                        onChange={ event => this.setState({value: event.target.value})}
                        label="address"
                        labelPosition={"right"}
                    />
                </Form.Field>
                <Button primary>
                    Προσθήκη
                </Button>
            </Form>
        )
    }
}

export default AddOrganizationsForm;