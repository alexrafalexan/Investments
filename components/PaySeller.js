import React , { Component } from 'react';
import {Button, Form, Input, Message} from "semantic-ui-react";
import Investment from '../ethproject/investment';
import web3 from '../ethproject/web3';
import {Router} from '../routes';

class PaySeller extends Component {
    state ={
        value: '',
        details: '',
        seller: '',
        errMessage: '',
        loading: false
    };

    onSubmit = async event => {
        event.preventDefault();
        console.log(this.props.id , this.state.address, this.state.percentage)
        this.setState({loading: true, errMessage: ''});
        try{
            const investment = Investment(this.props.address);
            const account = await web3.eth.getAccounts();
            await investment.methods.H_PaySeller(
                this.props.id,
                this.state.value,
                this.state.details,
                this.state.address,
            ).send({
                from: account[0]
            });
        }catch(err){
            this.setState({errMessage: err.message});
        }

        this.setState({loading:false,value: ''})


    };

    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errMessage}>
                <Form.Field>
                    <label><h3>Πληρωμή Πωλητή για την Activity{this.props.id}</h3></label>
                    <label>Προσθήκη Ποσού</label>
                    <Input
                        value ={this.state.value}
                        onChange={ event => this.setState({value: event.target.value})}
                        label="ether"
                        labelPosition={"right"}
                    />
                    <label>Περιγραφή Ενέργειας</label>
                    <Input
                        value={this.state.details}
                        onChange={event =>this.setState({details:event.target.value})}
                        label = "κείμενο"
                        labelPosition = 'right'
                    />
                    <label>Προσθήκη Διεύθυνσης Πωλητή</label>
                    <Input
                        value ={this.state.seller}
                        onChange={ event => this.setState({seller: event.target.value})}
                        label="address"
                        labelPosition={"right"}
                    />
                </Form.Field>
                <Message error header="Opps!" content={this.state.errMessage}/>
                <Button primary loading={this.state.loading}>
                    Πληρωμή
                </Button>
            </Form>
        )
    }
}

export default PaySeller;