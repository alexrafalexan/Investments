import React, { Component } from 'react';
import creator from '../ethproject/creator';
import {Button, Card} from "semantic-ui-react";
import Layout from "../components/Layout";


class InvestmentIndex extends Component {
    static async getInitialProps() {
        const investments = await creator.methods.getListOfCreatedInvestments().call();
        return {investments};
    }

    renderInvestments() {
        const items = this.props.investments.map(address => {
            return {
                header: address,
                description: <a>Λεπτομέριες Έρευνας</a>,
                fluid: true
            };
        });

        return <Card.Group items={items}/>
    }

    render() {
        return (
            <Layout>
                <div>
                    <h3> Ενεργές Έρευνες</h3>
                    <Button
                        floated="right"
                        style={{marginTop: '10px'}}
                        content="Δημιουργία Έρευνας"
                        icon="add"
                        primary
                    />

                    {this.renderInvestments()}
                </div>
            </Layout>
        );
    }
}

export default InvestmentIndex;