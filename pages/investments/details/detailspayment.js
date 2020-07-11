import React, {Component} from "react";
import {Button, Table} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Layout from "../../../components/Layout";
import Investment from "../../../ethproject/investment";
import DetailsPaymentrowRow from "./detailspaymentrow";
import web3 from "../../../ethproject/web3";

class DetailsActivities extends Component {
    static async getInitialProps(props){
        const { address } = props.query;
        const investment = Investment(address)
        const purchaseTableCount = await investment.methods.getDetailPurchaseCount().call();
        const purchaseTable = await Promise.all(
            Array(parseInt(purchaseTableCount)).fill().map((element,index)=>{
                return investment.methods.detailPurchase(index).call()
            })
        );
        return {address, purchaseTable, purchaseTableCount };
    }

    renderRows() {
        return this.props.purchaseTable.map((details, index) => {
            return <DetailsPaymentrowRow
                key={index}
                id = {index}
                details={details}
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
                            <HeaderCell>Συναλλαγή</HeaderCell>
                            <HeaderCell>Activity ID</HeaderCell>
                            <HeaderCell>Ποσό Πληρωμής(wei)</HeaderCell>
                            <HeaderCell>Λεπτομέριες</HeaderCell>
                            <HeaderCell>Οργανισμός που πραγματοποίησε την πληρωμή</HeaderCell>
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