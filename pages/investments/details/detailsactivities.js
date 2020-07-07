import React, {Component} from "react";
import {Button, Table} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Layout from "../../../components/Layout";
import Investment from "../../../ethproject/investment";
import DetailsActivitiesRow from "./detailsactiviriesrow";
import web3 from "../../../ethproject/web3";

class DetailsActivities extends Component {
    static async getInitialProps(props){
        const { address } = props.query;
        const investment = Investment(address)
        const activitiesTableCount = await investment.methods.getActivitiesTableCount().call();
        const activitiesTable = await Promise.all(
          Array(parseInt(activitiesTableCount)).fill().map((element,index)=>{
              return investment.methods.activitiesTable(index).call()
          })
        );
        return {address, activitiesTable, activitiesTableCount };
    }

    onSubmit = async event => {
        event.preventDefault();
        const account = await web3.eth.getAccounts();
        const investment = Investment(this.props.address)
        await investment.methods.G_checkStatusOfActivities().send({
            from: account[0],
        });
    };

    renderRows() {
        return this.props.activitiesTable.map((details, index) => {
            return <DetailsActivitiesRow
            key={index}
            id = {index}
            details={details}
            address={this.props.address}
            />;
        })
    }

    render(){
        const {Header, Row, HeaderCell, Body} = Table;

        return (
            <Layout>
                <h3>Λεπτομέρειες Activity</h3>
                <Link route={`/investments/${this.props.address}/requests/newactivity`}>
                    <a>
                        <Button color={"red"} basic>Προσθήκη Activity</Button>
                    </a>
                </Link>
                <Button primary onClick={this.onSubmit}>Έλεγχος Activities</Button>
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
                            <HeaderCell>Διαμόρφοση Ποσοστού Κάλυψης</HeaderCell>
                            <HeaderCell>Πραγματοποίησε Πληρωμή</HeaderCell>
                            <HeaderCell>Αλλαγή Κατάστασης</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderRows()}
                    </Body>
                </Table>
            </Layout>
        );
    }
}

export default DetailsActivities;