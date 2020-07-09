import React, {Component} from "react";
import {Button, Form, Message, Table} from 'semantic-ui-react';
import {Link, Router} from '../../../routes';
import Layout from "../../../components/Layout";
import Investment from "../../../ethproject/investment";
import DetailsActivitiesRow from "./detailsactiviriesrow";
import web3 from "../../../ethproject/web3";

class DetailsActivities extends Component {
    state = {
        errMessage: '',
        loading: false,
        buttondisable: false
    }

    static async getInitialProps(props) {
        const {address} = props.query;
        const investment = Investment(address)
        const investmentsummary = await investment.methods.getInvestmentSummary().call();
        const activitiesTableCount = await investment.methods.getActivitiesTableCount().call();
        const activitiesTable = await Promise.all(
            Array(parseInt(activitiesTableCount)).fill().map((element, index) => {
                return investment.methods.activitiesTable(index).call()
            })
        );
        return {
            address,
            activitiesTable,
            activitiesTableCount,
            activities: investmentsummary[8],
            activitiesTable_length: investmentsummary[9]
        };
    }

    componentWillMount() {
        if (this.props.activities === this.props.activitiesTable_length) {
            return this.buttondisable = true;
        } else {
            return this.buttondisable = false;
        }

    }

    onSubmit = async event => {
        event.preventDefault();
        this.setState({loading: true, errMessage: ''});
        try {
            const account = await web3.eth.getAccounts();
            const investment = Investment(this.props.address)
            await investment.methods.G_checkStatusOfActivities().send({
                from: account[0],
            });

            Router.replaceRoute(`/investments/${this.props.address}/details/detailsactivities`)

        } catch (err) {
            this.setState({errMessage: err.message});
        }

        this.setState({loading: false, value: ''})

    };

    onClick = async () => {
        Router.replaceRoute(`/investments/${this.props.address}/requests/newactivity`)
    }

    renderRows() {
        return this.props.activitiesTable.map((details, index) => {
            return <DetailsActivitiesRow
                key={index}
                id={index}
                details={details}
                address={this.props.address}
            />;
        })
    }

    render() {
        const {Header, Row, HeaderCell, Body} = Table;

        return (
            <Layout>
                <h3>Λεπτομέρειες Activity</h3>
                <Form onSubmit={this.onClick}>
                    <Button color={"red"} disabled={this.buttondisable} onClick={this.onClick} basic>Προσθήκη
                        Activity</Button>
                </Form>
                <p></p>
                <Form onSubmit={this.onSubmit} error={!!this.state.errMessage}>
                    <Button primary loading={this.state.loading}>Έλεγχος Activities</Button>
                    <Table>
                        <Header>
                            <Row>
                                <HeaderCell>ID</HeaderCell>
                                <HeaderCell>Λεπτομέριες</HeaderCell>
                                <HeaderCell>Ποσοστό Κάληψης Activity</HeaderCell>
                                <HeaderCell>Συνολικό Ποσό Activity</HeaderCell>
                                <HeaderCell>Διαθέσιμο Ποσό Activity</HeaderCell>
                                <HeaderCell>Κατάσταση</HeaderCell>
                                <HeaderCell>Έναρξη Activity (Χρον. Διάκεια)</HeaderCell>
                                <HeaderCell>Λήξη Activity (Χρον. Διάκεια)</HeaderCell>
                                <HeaderCell>Έναρξη Activity</HeaderCell>
                                <HeaderCell>Λήξη Activity</HeaderCell>
                                <HeaderCell>Διαμόρφωση Ποσοστού Κάλυψης</HeaderCell>
                                <HeaderCell>Αλλαγή Κατάστασης</HeaderCell>
                                <HeaderCell>Πραγματοποίησε Πληρωμή</HeaderCell>
                            </Row>
                        </Header>
                        <Body>
                            {this.renderRows()}
                        </Body>
                    </Table>
                    <Message error header="Opps!" content={this.state.errMessage}/>
                </Form>
            </Layout>
        );
    }
}

export default DetailsActivities;