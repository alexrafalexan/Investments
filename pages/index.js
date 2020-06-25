import React, { Component } from 'react';
import creator from '../ethproject/creator';

class InvestmentIndex extends Component {
    static async getInitialProps(){
        const investments = await creator.methods.getListOfCreatedInvestments().call();
        return {investments};
    }
    render() {
        return <div>{this.props.investments[0]}</div>
    }
}


export default InvestmentIndex;