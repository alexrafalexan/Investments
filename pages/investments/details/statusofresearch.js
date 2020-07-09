import React, {Component} from "react";
import {Button, Form, Message, Table} from 'semantic-ui-react';
import {Link, Router} from '../../../routes';
import Layout from "../../../components/Layout";
import Investment from "../../../ethproject/investment";
import DetailsActivitiesRow from "./detailsactiviriesrow";
import web3 from "../../../ethproject/web3";

class StatusOfResearch extends Component {
    state ={
        errMessage: '',
        loading: false,
        buttondisable : false
    };

    static async getInitialProps(props){
        const { address } = props.query;
        const investment = Investment(address);
        const investmentsummary = await investment.methods.getInvestmentSummary().call();
        const contractBalance =  await investment.methods.getBalance().call();
        const activitiesTableCount = await investment.methods.getActivitiesTableCount().call();
        const activitiesTable = await Promise.all(
            Array(parseInt(activitiesTableCount)).fill().map((element,index)=>{
                return investment.methods.activitiesTable(index).call()
            })
        );
        return {address, activitiesTable, activitiesTableCount, contractBalance,  statusOfResearch: investmentsummary[10] };
    }

    componentWillMount() {
        if(this.props.statusOfResearch === '3' || this.props.statusOfResearch === '4'){
            return this.buttondisable = false;
        }else {
            return this.buttondisable = true;
        }
    }

    onSubmit = async event => {
        event.preventDefault();
        this.setState({loading: true, errMessage: ''});
        try{
        const account = await web3.eth.getAccounts();
        const investment = Investment(this.props.address)
        await investment.methods.returnMoney().send({
            from: account[0],
        });
            Router.replaceRoute(`/investments/${this.props.address}`)
        }catch(err){
            this.setState({errMessage: err.message});
        }
        this.setState({loading:false,value: ''})
    };



    render(){
        return (
            <Layout>
                <Form onSubmit={this.onSubmit} error={!!this.state.errMessage}>
                <h3>Το συνολικό ποσό της έρευνας είναι {web3.utils.fromWei(this.props.contractBalance, 'ether')} Ether</h3>
                    <p>Η Αποπληρωμή ενεργοποιείται μόνο στην κατάσταση Cancelled ή Completed</p>
                <Button loading={this.state.loading} color={"red"} disabled={this.buttondisable} basic>Αποπληρωμή</Button>
                    <Message error header="Opps!" content={this.state.errMessage}/>
                </Form>
            </Layout>
        );
    }
}

export default StatusOfResearch;