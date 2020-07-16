import React, { Component } from 'react';
import creator from '../ethproject/creator';
import { Image} from "semantic-ui-react";
import Layout from "../components/Layout";
import {Link} from "../routes";


class InvestmentIndex extends Component {
    render() {
        return (
            <Layout>
                    <Image src='https://linkinternational.eu/wp-content/uploads/2019/03/1200-blockchain-healthcare.jpg' fluid />
            </Layout>
        );
    }
}

export default InvestmentIndex;