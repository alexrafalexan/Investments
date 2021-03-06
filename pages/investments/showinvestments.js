import React, { Component } from 'react';
import creator from '../../ethproject/creator';
import {Button, Card} from "semantic-ui-react";
import Layout from "../../components/Layout";
import {Link} from "../../routes";


class ShowInvestments extends Component {
    static async getInitialProps() {
        const investments = await creator.methods.getListOfCreatedInvestments().call();
        return {investments};
    }

    renderInvestments() {
        const items = this.props.investments.map(address => {
            return {
                header: address,
                description: (<Link route={`/investments/${address}`}>
                    <a>Λεπτομέρειες Έρευνας</a>
                </Link>),
                fluid: true
            };
        });

        return <Card.Group items={items}/>
    }

    render() {
        return (
            <Layout>
                <div>
                    <h3>Προβολή Ερευνών</h3>
                    <Link route="/investments/newinvestment">
                        <a>
                            <Button
                                color="red"
                                floated="right"
                                style={{marginTop: '10px'}}
                                content="Δημιουργία Έρευνας"
                                icon="add"
                                basic
                            />
                        </a>
                    </Link>
                    {this.renderInvestments()}
                </div>
            </Layout>
        );
    }
}

export default ShowInvestments;