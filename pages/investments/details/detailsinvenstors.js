import React, {Component} from "react";
import {Form, Table, Message} from 'semantic-ui-react';
import Button from "semantic-ui-react/dist/commonjs/elements/Button";
import {Link, Router} from '../../../routes';
import Layout from "../../../components/Layout";
import Investment from "../../../ethproject/investment";
import DetailsInvenstorsRow from "./detailsinvenstorsrow";
import web3 from "../../../ethproject/web3";

class DetailsInvenstors extends Component {
    state = {
        errMessage: '',
        load: false
    };

    static async getInitialProps(props){
        const { address } = props.query;
            const investment = Investment(address);
            const investmentsummaryTemp = await investment.methods.getInvestmentSummary().call();
            const investorsAddressesCount = await investment.methods.getInventorsAddresses().call();
            const investorsAddresses = await Promise.all(
                Array(parseInt(investorsAddressesCount)).fill().map((element, index) => {
                    return investment.methods.investorsaddresses(index).call()
                })
            );

            return {
                address,
                investorsAddresses,
                investorsAddressesCount,
                contribution: investmentsummaryTemp[7]
            };
    }


    onSubmit = async event => {
        event.preventDefault();
        this.setState({loading: true, errMessage: ''});
        try {
        const investment = Investment(this.props.address);
        const account = await web3.eth.getAccounts();
        await investment.methods.F_MakeAppanage().send({
                from: account[0],
                value: this.props.contribution
        });
        }catch(err){
            this.setState({errMessage: err.message});
        }
        this.setState({loading:false,value: ''})
    };

    renderRows() {
        return this.props.investorsAddresses.map((details, index) => {
            return <DetailsInvenstorsRow
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
                <Form onSubmit={this.onSubmit} error={!!this.state.errMessage}>
                <h3>Επενδυτές Έρευνας</h3>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Επενδυτής</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderRows()}
                    </Body>
                </Table>
                <Button color="blue" basic loading={this.state.loading}>Γίνε Επενδυτής</Button>
                    <Message error header="Opps!" content={this.state.errMessage}/>
                </Form>
            </Layout>
        );
    }
}

export default DetailsInvenstors;