import React, {Component} from "react";
import {Button, Table} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Layout from "../../../components/Layout";
import Investment from "../../../ethproject/investment";
import DetailsOrganizationRow from "./detailsorganizationrow";

class DetailsOrganizations extends Component {
    static async getInitialProps(props){
        const { address } = props.query;
        const investment = Investment(address);
        const investmentsummaryTemp = await investment.methods.getInvestmentSummary().call();
        const organizationsAddressesCount = await investment.methods.getOrganizationsAddressesByMaster().call();
        const organizationsAddresses = await Promise.all(
          Array(parseInt(organizationsAddressesCount)).fill().map((element,index)=>{
              return investment.methods.organizationsaddressesdeclairemaster(index).call()
          })
        );

        return {address,
            organizationsAddresses,
            organizationsAddressesCount,
            contributionorganization: investmentsummaryTemp[4]
        };
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
                <h3>Requests</h3>
                <Link route={`/investments/${this.props.address}/requests/neworganization`}>
                    <a>
                        <Button primary>Προσθήκη Οργανισμού</Button>
                    </a>
                </Link>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Δηλωμένος Οργανισμός από τον Master</HeaderCell>
                            <HeaderCell>Συμμετοχή Οργανισμού</HeaderCell>
                            <HeaderCell>Κουμπί συμμετοχής για τον Οργανισμό</HeaderCell>
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