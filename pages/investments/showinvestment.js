import React, {Component} from 'react';
import Layout from "../../components/Layout";
import creator from "../../ethproject/creator";
import Investment from "../../ethproject/investment";

class ShowInvestment extends Component{
    static async getInitialProps(props) {
        const investment = Investment(props.query.address);
        const investmentsummary = await investment.methods.getInvestmentSummary().call();

            return {
                master: investmentsummary[0],
                numOrganizations: investmentsummary[1],
                numInvestors: investmentsummary[2],
                contribution: investmentsummary[3],
                contributionorganizationpercentage: investmentsummary[4],
                activities: investmentsummary[5],
                nowOrganizationsAdded: investmentsummary[6],
                nowInvestorsAdded: investmentsummary[7]
            };
        }


    render() {
        return (<Layout><h3>Λεπτομέρειες</h3></Layout>);
    }
}

export default ShowInvestment;