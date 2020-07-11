import React, {Component} from "react";
import {Button, Form, Table} from 'semantic-ui-react';
import {Link, Router} from '../../../routes';
import Layout from "../../../components/Layout";
import Investment from "../../../ethproject/investment";
import DetailsOrganizationRow from "./detailsorganizationrow";
import DetailsOrganizationRowByMaster from "./detailsorganizationrowbymaster";
import web3 from "../../../ethproject/web3";

class DetailsOrganizations extends Component {
    state = {
        buttondisable : false,
        orgbuttondisable: false
    };

    static async getInitialProps(props){
        const { address } = props.query;
        const investment = Investment(address);
        const investmentsummary = await investment.methods.getInvestmentSummary().call();
        const organizationsAddressesCountByMaster = await investment.methods.getOrganizationsAddressesByMaster().call();
        const organizationsAddressesByMaster = await Promise.all(
          Array(parseInt(organizationsAddressesCountByMaster)).fill().map((element, index)=>{
              return investment.methods.organizationsaddressesdeclairemaster(index).call()
          })
        );

        const organizationsAddressesCount = await investment.methods.getOrganizationsAddresses().call();
        const organizationsAddresses = await Promise.all(
            Array(parseInt(organizationsAddressesCount)).fill().map((element, index)=>{
                return investment.methods.organizationsaddressesdeclairemaster(index).call()
            })
        );



        return {address,
            organizationsAddressesByMaster: organizationsAddressesByMaster,
            organizationsAddressesCountByMaster: organizationsAddressesCountByMaster,
            organizationsAddressesCount : organizationsAddressesCount,
            organizationsAddresses : organizationsAddresses,
            numOrganizations :  investmentsummary[1],
            nowOrganizationsAddedDeclaireMaster : investmentsummary[2],
            nowOrganizationsAdded:  investmentsummary[3],
            contributionorganization: investmentsummary[4],
        };
    }

    componentWillMount() {
        if((this.props.numOrganizations === this.props.nowOrganizationsAddedDeclaireMaster) && (this.props.numOrganizations === this.props.nowOrganizationsAdded) ){
            return (this.buttondisable = true , this.orgbuttondisable = true);
        }else if ((this.props.numOrganizations === this.props.nowOrganizationsAddedDeclaireMaster) && !(this.props.numOrganizations === this.props.nowOrganizationsAdded)){
            return (this.buttondisable = true , this.orgbuttondisable = false);
        }else{
            (this.buttondisable = false , this.orgbuttondisable = false);
        }
    }

    onSubmit =  async () => {
        Router.replaceRoute(`/investments/${this.props.address}/requests/neworganization`)

    }

    onInsert = async () => {
        this.setState({loading: true, errMessage: ''});
        try {
            const investment = Investment(this.props.address);
            const accounts = await web3.eth.getAccounts();
            await investment.methods.E_OrganizationsPayment().send({
                from: accounts[0],
                value: web3.utils.toWei(this.props.contributionorganization, 'wei')
            });

            Router.replaceRoute(`/investments/${this.props.address}/details/detailsorganizations`)

        } catch (err) {
            this.setState({errMessage: err.message});
        }

        this.setState({loading: false, value: ''})
    };


    findOrganization = async (address) => {
        const investment = Investment(this.props.address);
        const organizationsaddressesbypaymentmappingTemp = await investment.methods.getOrganizationsAddressesByPaymentMapping(address).call();
     // console.log(organizationsaddressesbypaymentmappingTemp);
        return organizationsaddressesbypaymentmappingTemp;
    }

    renderRowsByMaster() {
        return this.props.organizationsAddressesByMaster.map((details, index) => {
            return <DetailsOrganizationRowByMaster
                key={index}
                id = {index}
                details={details}
                address={this.props.address}
                contributionorganization = {this.props.contributionorganization}
                organizationsaddressesbypaymentmapping = {this.findOrganization(details)}
            />;
        })
    }

    renderRows() {
        return this.props.organizationsAddresses.map((details, index) => {
            return <DetailsOrganizationRow
                key={index}
                id = {index}
                details={details}
                address={this.props.address}
                contributionorganization = {this.props.contributionorganization}
                organizationsaddressesbypaymentmapping = {this.findOrganization(details)}
            />;
        })
    }

    render(){
        const {Header, Row, HeaderCell, Body} = Table;

        return (
            <Layout>
                <h3>Οργανισμοί</h3>
                <div>
                <Form onSubmit={this.onInsert} error={!!this.state.errMessage}>
                    <Button color="green" floated="left" basic disabled={this.orgbuttondisable} loading={this.state.loading}>Συμμετοχή Οργανισμού</Button>
                </Form>
                    </div> <br></br><br></br>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Συμμετέχοντες Οργανισμοί</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderRows()}
                    </Body>
                </Table>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Δηλωμένοι Οργανισμοί από τον Επόπτη</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderRowsByMaster()}
                    </Body>
                </Table>
                <div><Form onSubmit={this.onSubmit}>
                    <Button color="red" basic disabled={this.buttondisable}>Προσθήκη Οργανισμού</Button>
                </Form>
                </div>
            </Layout>
        );
    }
}

export default DetailsOrganizations;