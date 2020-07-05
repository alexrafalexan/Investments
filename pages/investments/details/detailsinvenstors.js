import React, {Component} from "react";
import {Form, Table} from 'semantic-ui-react';
import Button from "semantic-ui-react/dist/commonjs/elements/Button";
import {Link, Router} from '../../../routes';
import Layout from "../../../components/Layout";
import Investment from "../../../ethproject/investment";
import DetailsInvenstorsrowRow from "./detailsactiviriesrow";
import web3 from "../../../ethproject/web3";

class DetailsInvenstors extends Component {
    state = {
        errMesag: '',
        load: false
    };

    static async getInitialProps(props){
        const { address } = props.query;
        const investment = Investment(address);
        const investmentsummary = await investment.methods.getInvestmentSummary().call();
        const investorsAddressesCount = await investment.methods.getInvestmentsAddresses().call();
        const investorsAddresses = await Promise.all(
            Array(parseInt(investorsAddressesCount)).fill().map((element,index)=>{
                return investment.methods.investorsaddresses(index).call()
            })
        );

        return {address,
            investorsAddresses,
            investorsAddressesCount,
            contribution: investmentsummary[7]
        };
    }


    onSubmit = async event => {
        event.preventDefault();
        const investment = Investment(this.props.address);
        const account = await web3.eth.getAccounts();
        await investment.methods.E_OrganizationsPayment().send({
                from: account[0],
                value: this.props.contribution
        });

    };

    renderRows() {
        return this.props.investorsAddresses.map((details, index) => {
            return <DetailsInvenstorsrowRow
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
                <h3>Επενδυτές Έρευνας</h3>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderRows()}
                    </Body>
                </Table>
                <Button color="green" basic primary onClick={this.onSubmit}>Γίνε Επενδυτής</Button>
            </Layout>
        );
    }
}

export default DetailsInvenstors;