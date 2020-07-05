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
                <h3>Λεπτομέρειες Πληρωμών</h3>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Δραστηριότητα</HeaderCell>
                            <HeaderCell>Ποσό Πληρωμής</HeaderCell>
                            <HeaderCell>Λεπτομέριες</HeaderCell>
                            <HeaderCell>Πωλητής</HeaderCell>
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