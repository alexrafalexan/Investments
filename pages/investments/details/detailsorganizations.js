import React, {Component} from "react";
import {Button, Form, Table} from 'semantic-ui-react';
import {Link, Router} from '../../../routes';
import Layout from "../../../components/Layout";
import Investment from "../../../ethproject/investment";
import DetailsOrganizationRow from "./detailsorganizationrow";

class DetailsOrganizations extends Component {
    static async getInitialProps(props){
        const { address } = props.query;
        let buttondisable;
        const investment = Investment(address);
        const investmentsummary = await investment.methods.getInvestmentSummary().call();
        const organizationsAddressesCount = await investment.methods.getOrganizationsAddressesByMaster().call();
        const organizationsAddresses = await Promise.all(
          Array(parseInt(organizationsAddressesCount)).fill().map((element,index)=>{
              return investment.methods.organizationsaddressesdeclairemaster(index).call()
          })
        );

        return {address,
            organizationsAddresses,
            organizationsAddressesCount,
            numOrganizations :  investmentsummary[1],
            nowOrganizationsAddedDeclaireMaster : investmentsummary[2],
            contributionorganization: investmentsummary[4],
        };
    }

    componentWillMount() {
        if(this.nowOrganizationsAddedDeclaireMaster === this.numOrganizations){
            return this.buttondisable = true;
        }else{
            return this.buttondisable = false;
        }
    }

    onSubmit =  async () => {
        Router.replaceRoute(`/investments/${this.props.address}/requests/neworganization`)

    }

    findOrganization = async (address) => {
        const investment = Investment(this.props.address);
        const organizationsaddressesbypaymentmappingTemp = await investment.methods.getOrganizationsAddressesByPaymentMapping(address).call();
     // console.log(organizationsaddressesbypaymentmappingTemp);
        return organizationsaddressesbypaymentmappingTemp;
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
                <Form onSubmit={this.onSubmit}>
                        <Button color="red" basic disabled={this.buttondisable} onClick={this.onSubmit}>Προσθήκη Οργανισμού</Button>
                </Form>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Δηλωμένος Οργανισμός από τον Master</HeaderCell>
                            <HeaderCell>Συμμετοχή Οργανισμού</HeaderCell>
                            <HeaderCell>Κουμπί συμμετοχής για τον Οργανισμό</HeaderCell>
                            <HeaderCell></HeaderCell>
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

export default DetailsOrganizations;