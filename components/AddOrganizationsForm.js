import React , { Component } from 'react';
import {Button, Form, Input, Message} from "semantic-ui-react";
import Investment from '../ethproject/investment';
import web3 from '../ethproject/web3';
import {Router} from '../routes';

class AddOrganizationsForm extends Component {
    state ={
        value: '',
        errMessage: '',
        loading: false,
        buttonenable: false
    };

    onSubmit = async event => {
        event.preventDefault();

        // Τα παρακάτω στοιχεία τα έπαιρνε απο το showinvestment. Πρέπει να ξαναφτιαχτούν.
        console.log(this.props.numOrganizations);
        console.log(this.props.nowOrganizationsAdded);

        const investment = Investment(this.props.address);

        if(this.props.nowOrganizationsAdded <this.props.numOrganizations){
            this.setState({loading: true, errMessage: '', buttonenable: false});
            console.log(false)
        }else {
            this.setState({loading: true, errMessage: '', buttonenable: false});
            console.log(true)
        }


        try{
            const account = await web3.eth.getAccounts();
            await investment.methods.B_AddOrganizations(this.state.value).send({
                from: account[0]
            });


            Router.replaceRoute(`/investments/${this.props.address}/`)

        }catch(err){
            this.setState({errMessage: err.message});
        }

        if(this.props.nowOrganizationsAdded <this.props.numOrganizations){
            this.setState({loading: false, value: '', buttonenable: false});
            console.log(false)
        }else {
            this.setState({loading: false, value: '', buttonenable: true});
            console.log(true)
        }
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errMessage}>
                <Form.Field>
                    <label>Διεύθυνση Οργανισμού</label>
                    <Input
                        value ={this.state.value}
                        onChange={ event => this.setState({value: event.target.value})}
                        label="address"
                        labelPosition={"right"}
                    />
                </Form.Field>
                <Message error header="Opps!" content={this.state.errMessage}/>
                <Button primary loading={this.state.loading}>
                    Προσθήκη
                </Button>
            </Form>
        )
    }
}

export default AddOrganizationsForm;