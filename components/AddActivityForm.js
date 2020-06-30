import React , { Component } from 'react';
import {Button, Form, Input, Message} from "semantic-ui-react";
import Investment from '../ethproject/investment';
import web3 from '../ethproject/web3';
import {Router} from '../routes';

class AddActivityForm extends Component {
    state ={
      value: '',
      timeStartActivity: '',
      duration: '',
      detail:'',
      errMessage: '',
      loading: false
    };

    onSubmit = async event => {
        event.preventDefault();

        const investment = Investment(this.props.address);

        this.setState({loading: true, errMessage: ''});

        try{
            const account = await web3.eth.getAccounts();
            await investment.methods. C_AddActivity(
                this.state.value,
                this.state.timeStartActivity,
                this.state.duration,
                this.state.detail
                ).send({
                from: account[0]
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
                    <label>Προσθήκη Activity</label>
                    <Input
                        value ={this.state.value}
                        onChange={ event => this.setState({value: event.target.value})}
                        label="address"
                        labelPosition={"right"}
                    />
                    <label>Μέγιστη Διάρκεια Έρευνας</label>
                    <Input
                        value={this.state.timeStartActivity}
                        onChange={event =>this.setState({timeStartActivity:event.target.value})}
                        label = "Δευτερόλεπτα"
                        labelPosition = 'right'
                    />
                    <label>Μέγιστη Διάρκεια Έρευνας</label>
                    <Input
                        value={this.state.duration}
                        onChange={event =>this.setState({duration:event.target.value})}
                        label = "Δευτερόλεπτα"
                        labelPosition = 'right'
                    />
                    <label>Μέγιστη Διάρκεια Έρευνας</label>
                    <Input
                        value={this.state.detail}
                        onChange={event =>this.setState({detail:event.target.value})}
                        label = "Κέιμενο"
                        labelPosition = 'right'
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

export default AddActivityForm;