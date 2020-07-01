import React , { Component } from 'react';
import {Button, Form, Input, Message} from "semantic-ui-react";
import Investment from '../ethproject/investment';
import web3 from '../ethproject/web3';
import {Router} from '../routes';

class OrganizationsPayment extends Component {
    state ={
        value: '',
        errMessage: '',
        loading: false
    };

    onSubmit = async event => {
        event.preventDefault();

        const investment = Investment(this.props.address);

        this.setState({loading: true, errMessage: ''});

        try{
            const account = await web3.eth.getAccounts();
            await investment.methods. E_OrganizationsPayment().send({
                from: account[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            });

            Router.replaceRoute(`/investments/${this.props.address}`)

        }catch(err){
            this.setState({errMessage: err.message});
        }

        this.setState({loading:false,value: ''})
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errMessage}>
                <Form.Field>
                    <label><h3>Γίνει Επενδυτής</h3></label>
                    <label>Προσθήκη Αναγραφόμενου Ποσού</label>
                    <Input
                        value ={this.state.value}
                        onChange={ event => this.setState({value: event.target.value})}
                        label="wei"
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

export default OrganizationsPayment;