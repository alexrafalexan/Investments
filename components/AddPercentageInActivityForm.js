import React , { Component } from 'react';
import {Button, Form, Input, Message} from "semantic-ui-react";
import Investment from '../ethproject/investment';
import web3 from '../ethproject/web3';
import {Router} from '../routes';

class AddPercentageInActivityForm extends Component {
    state ={
        address: '',
        percentage: '',
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
            await investment.methods.D_AddPercentageInActivity(
                this.props.id,
                this.state.address,
                this.state.percentage,
            ).send({
                from: account[0]
            });

            Router.replaceRoute(`/investments/${this.props.address}/details/detailsactivities`)

        }catch(err){
            this.setState({errMessage: err.message});
        }

        this.setState({loading:false,value: ''})


    };

    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errMessage}>
                <Form.Field>
                    <label><h3>Προσθηκη Ποσοστού για την Activity {this.props.id}</h3></label>
                    <label>Προσθήκη ID Οργανισμού</label>
                    <Input
                        value ={this.state.address}
                        onChange={ event => this.setState({address: event.target.value})}
                        label="ID"
                        labelPosition={"right"}
                    />
                    <label>Προσθήκη Ποσοστού</label>
                    <Input
                        value={this.state.percentage}
                        onChange={event =>this.setState({percentage:event.target.value})}
                        label = "Ποσοστό"
                        labelPosition = 'right'
                    />
                </Form.Field>
                <Message error header="Opps!" content={this.state.errMessage}/>
                <Button basic color='red' loading={this.state.loading}>
                    Προσθήκη
                </Button>
            </Form>
        )
    }
}

export default AddPercentageInActivityForm;