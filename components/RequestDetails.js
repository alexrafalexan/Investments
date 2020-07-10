import React, {Component} from 'react';
import {Button, Form, Input, Message} from "semantic-ui-react";
import Investment from '../ethproject/investment';
import web3 from '../ethproject/web3';
import {Router} from '../routes';

class RequestDetails extends Component {
    state = {
        address: '',
        percentage: '',
        errMessage: '',
        successMessage:'',
        loading: false
    };

    onSubmit = async event => {
        event.preventDefault();
        this.setState({loading: true, errMessage: '', successMessage:''});
        try {
            const investment = Investment(this.props.address);
            let print = await investment.methods.getAvailableEtherPerOrganizationPerActivity(
                this.props.id,
                this.state.address).call();
            this.setState({successMessage: 'O οργανισμός με Address: "' +  print[0] + '" του έχει δοθεί ποσοστό: "' + print[2] + '%" και το διαθέσιμο υπόλοιπο ποσό του είναι: "' + web3.utils.fromWei(print[1],'ether') + '" Ether'});
            console.log(print);
        }catch(err){
            this.setState({errMessage: err.message});
        }

        this.setState({loading:false,value: ''})
    };

    render() {
        return (
            <Form success={!!this.state.successMessage} onSubmit={this.onSubmit} error={!!this.state.errMessage}>
                <Form.Field>
                    <label><h3>Εμφάνιση Ποσοστού και Διαθέσιμου ποσού για τον Οργανισμό</h3></label>
                    <label>Υποβολή address Οργανισμού</label>
                    <Input
                        value={this.state.address}
                        onChange={event => this.setState({address: event.target.value})}
                        label="address"
                        labelPosition={"right"}
                    />
                </Form.Field>
                <Message error
                         header="Opps!"
                         content={this.state.errMessage}/>
                <Message success
                         header='Πληροφορίες'
                         content={this.state.successMessage}/>
                <Button primary loading={this.state.loading}>
                    Εμφάνιση
                </Button>
            </Form>
        )
    }
}

export default RequestDetails;