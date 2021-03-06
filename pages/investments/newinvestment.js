import React, {Component} from "react";
import Layout from "../../components/Layout";
import {Form, Input , Button, Message} from 'semantic-ui-react';
import web3 from '../../ethproject/web3';
import creator from '../../ethproject/creator';
import {Link, Router} from "../../routes";

class InvestmentCreate extends Component {
    state = {
        NumResearchers: '',
        NumInvestors:'',
        MaxTimesOfProject: '',
        Contribution: '',
        Contributionorganization: '',
        Activities:'',
        errMesag: '',
        load: false
    };

    onSubmit = async event => {
        event.preventDefault();

        this.setState({load: true, errMesag: ''});
        try {
            const accounts = await web3.eth.getAccounts();
            await creator.methods.createInvestment(this.state.NumResearchers,
                this.state.NumInvestors,
                this.state.MaxTimesOfProject,
                web3.utils.toWei(this.state.Contribution,'ether'),
                this.state.Contributionorganization,
                this.state.Activities)
                .send({from: accounts[0]});

            Router.pushRoute('/investments/showinvestments');
        }catch (err) {
            this.setState({errMesag: err.message})
        }
        this.setState({load: false});
    };

    render() {
        return (
            <Layout>
            <h3>Δημιουργία καινούργιας Έρευνας</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errMesag}>    {/* !!-> make string to bool */}
                    <Form.Field>
                        <label>Αριθμός Συμμετεχόντων Οργανισμός</label>
                        <Input
                            label = "Αριθμός"
                            labelPosition = 'right'
                            value={this.state.NumResearchers}
                            onChange={event =>this.setState({NumResearchers:event.target.value})}
                        />
                        <label>Αριθμός Συμμετεχόντων Επενδυτών</label>
                        <Input
                            label = "Αριθμός"
                            labelPosition = 'right'
                            value={this.state.NumInvestors}
                            onChange={event =>this.setState({NumInvestors:event.target.value})}
                        />
                        <label>Μέγιστη Διάρκεια Έρευνας</label>
                        <Input
                            label = "Δευτερόλεπτα"
                            labelPosition = 'right'
                            value={this.state.MaxTimesOfProject}
                            onChange={event =>this.setState({MaxTimesOfProject:event.target.value})}
                        />
                        <label>Συνεισφορά Επενδυτών ανά Επενδυτή</label>
                        <Input
                            label = "ether"
                            labelPosition = 'right'
                            value={this.state.Contribution}
                            onChange={event =>this.setState({Contribution:event.target.value})}
                        />
                        <label>Συνεισφορά Οργανισμών σε ποσοστό</label>
                        <Input
                            label = "Ποσοστό"
                            labelPosition = 'right'
                            value={this.state.Contributionorganization}
                            onChange={event =>this.setState({Contributionorganization:event.target.value})}
                        />
                        <label>Αριθμός Activities της έρευνας</label>
                        <Input
                            label = "Αριθμός"
                            labelPosition = 'right'
                            value={this.state.Activities}
                            onChange={event =>this.setState({Activities:event.target.value})}
                        />
                    </Form.Field>
                    <Message error header="Προσοχή!" content={this.state.errMesag}/>
                        <Button loading={this.state.load} primary>Δημιουργία</Button>
                </Form>
            </Layout>
    );
    }
}

export default InvestmentCreate;