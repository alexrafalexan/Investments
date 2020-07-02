import React, {Component} from "react";
import {Button} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Layout from "../../../components/Layout";
import Investment from "../../../ethproject/investment";

class DetailIndex extends Component {
    static async getInitialProps(props){
        const { address } = props.query;
        const investment = Investment(address)
        const activitiesTableCount = await investment.methods.getActivitiesTableCount().call();
        const requests = await Promise.all(
          Array(activitiesTableCount).fill().map((element,index)=>{
              return investment.methods.request(index).call()
          })
        );

        console.log(requests);

        return {address};
    }

    render(){
        return (
            <Layout>
                <h3>Requests</h3>
                <Link route={`/investments/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary>Add Request</Button>
                    </a>
                </Link>
            </Layout>
        );
    }
}

export default DetailIndex;