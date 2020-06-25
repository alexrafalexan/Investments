import React, { Component } from 'react';
import creator from '../ethproject/creator';
import {Card} from "semantic-ui-react";


class InvestmentIndex extends Component {
    static async getInitialProps() {
        const investments = await creator.methods.getListOfCreatedInvestments().call();
        return {investments};
    }

    renderInvestments() {
        const items = this.props.investments.map(address => {
            return {
                header: address,
                description: <a>Details of Investment</a>,
                fluid: true
            };
        });

        return <Card.Group items={items}/>
    }

    render() {
        return <div>
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            {this.renderInvestments()}
        </div>
    }
}



export default InvestmentIndex;