import React, { Component } from 'react';
import factory from '../ethproject/factory';

class InvestmentIndex extends Component {
    async componentDidMount() {
        const investments = await factory.methods.getListOfCreatedInvestments().call();

        console.log(investments);
    }
    render() {
        return <div>Investments</div>
    }
}


export default InvestmentIndex;