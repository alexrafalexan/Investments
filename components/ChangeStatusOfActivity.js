import React , { Component } from 'react';
import {Button, Form, Input, Message} from "semantic-ui-react";
import Investment from '../ethproject/investment';
import web3 from '../ethproject/web3';
import {Router} from '../routes';

class ChangeStatusOfActivity extends Component {
    state ={
        stateactivity:'',
        errMessage: '',
        loading: false
    };

    onSubmit = async event => {
        event.preventDefault();
        console.log(this.state.stateactivity, this.props.id);
        this.setState({loading: true, errMessage: ''});
        try{
            const investment = Investment(this.props.address);
            const account = await web3.eth.getAccounts();
            await investment.methods.I_changeStatusOfActivity(
                this.props.id,
                this.state.stateactivity,
            ).send({
                from: account[0]
            });

            Router.pushRoute(`/investments/${this.props.address}/details/detailsactivities`);

        }catch(err){
            this.setState({errMessage: err.message});
        }

        this.setState({loading:false,value: ''})


    };

    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errMessage}>
                <Form.Field>
                    <label><h3>Αλλαγή κατάστασης για την Activity{this.props.id}</h3></label>
                    <label>Για να "Ακυρώση" επίλεξε 3 για "Ολοκλήρωση" επίλεξε 4</label>
                    <Input
                        value ={this.state.stateactivity}
                        onChange={ event => this.setState({stateactivity: event.target.value})}
                        label="3 or 4"
                        labelPosition={"right"}
                    />
                </Form.Field>
                <Message error header="Opps!" content={this.state.errMessage}/>
                <Button primary loading={this.state.loading}>
                    Αλλαγή
                </Button>
            </Form>
        )
    }
}

export default ChangeStatusOfActivity;