import React, {Component} from "react";
import {Button, Table} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Layout from "../../../components/Layout";
import Investment from "../../../ethproject/investment";
// import DetailsOrganizationRow from "./detailsorganizationrow";

class DetailsOrganizations extends Component {
    static async getInitialProps(props){
        const { address } = props.query;
        const investment = Investment(address)
        const investorsΑddressesCount = await investment.methods.getInvestorsAddressesByMaster().call();
        const investorsΑddresses = await Promise.all(
          Array(parseInt(investorsΑddressesCount)).fill().map((element,index)=>{
              return investment.methods.organizationsaddressesdeclairemaster(index).call()
          })
        );

        console.log(investorsΑddresses);

        return {address};
    }

    // renderRows() {
    //     return this.props.activitiesTable.map((details, index) => {
    //         return <DetailsOrganizationRow
    //         key={index}
    //         id = {index}
    //         details={details}
    //         address={this.props.address}
    //         />;
    //     })
    // }

    render(){
        const {Header, Row, HeaderCell, Body} = Table;

        return (
            <Layout>
                <h3>Requests</h3>
                {/*<Link route={`/investments/${this.props.address}/requests/new`}>*/}
                {/*    <a>*/}
                {/*        <Button primary>Add Request</Button>*/}
                {/*    </a>*/}
                {/*</Link>*/}
                {/*<Table>*/}
                {/*    <Header>*/}
                {/*        <Row>*/}
                {/*            <HeaderCell>ID</HeaderCell>*/}
                {/*            <HeaderCell>Λεπτομέριες</HeaderCell>*/}
                {/*            <HeaderCell>Ποσοστό Κάληψης Activity</HeaderCell>*/}
                {/*            <HeaderCell>Συνολικό Ποσό Activity</HeaderCell>*/}
                {/*            <HeaderCell>Διαθέσιμο Ποσό Activity</HeaderCell>*/}
                {/*            <HeaderCell>Κατάσταση</HeaderCell>*/}
                {/*            <HeaderCell>Έναρξη Activity (Χρον. Διάκεια)</HeaderCell>*/}
                {/*            <HeaderCell>Λήξη Activity (Χρον. Διάκεια)</HeaderCell>*/}
                {/*            <HeaderCell>Έναρξη Activity</HeaderCell>*/}
                {/*            <HeaderCell>Λήξη Activity</HeaderCell>*/}


                {/*        </Row>*/}
                {/*    </Header>*/}
                {/*    <Body>*/}
                {/*        {this.renderRows()}*/}
                {/*    </Body>*/}
                {/*</Table>*/}
            </Layout>
        );
    }
}

export default DetailsOrganizations;