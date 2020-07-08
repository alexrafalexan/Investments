import React, {Component} from "react";
import {Button, Table} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Layout from "../../../components/Layout";
import Investment from "../../../ethproject/investment";
import DetailsActivitiesRow from "./detailsactiviriesrow";
import web3 from "../../../ethproject/web3";

class StatusOfResearch extends Component {
    static async getInitialProps(props){
        const { address } = props.query;
        const investment = Investment(address);
        const contractBalance =  await investment.methods.getBalance().call();
        const activitiesTableCount = await investment.methods.getActivitiesTableCount().call();
        const activitiesTable = await Promise.all(
            Array(parseInt(activitiesTableCount)).fill().map((element,index)=>{
                return investment.methods.activitiesTable(index).call()
            })
        );

        console.log(contractBalance);

        return {address, activitiesTable, activitiesTableCount, contractBalance };
    }

    onSubmit = async event => {
        event.preventDefault();
        const account = await web3.eth.getAccounts();
        const investment = Investment(this.props.address)
        await investment.methods.returnMoney().send({
            from: account[0],
        });
    };


    render(){
        return (
            <Layout>
                <h3>Το συνολικό ποσό της έρευνας είναι {web3.utils.fromWei(this.props.contractBalance, 'ether')} Ether</h3>
                <Button color={"red"} basic onClick={this.onSubmit}>Αποπληρωμή</Button>
            </Layout>
        );
    }
}

export default StatusOfResearch;