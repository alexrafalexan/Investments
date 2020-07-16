import React, { Component } from 'react';
import creator from '../ethproject/creator';
import { Image} from "semantic-ui-react";
import Layout from "../components/Layout";
import {Link} from "../routes";


class InvestmentIndex extends Component {
    render() {
        return (
            <Layout>
                <Image src='https://i.ibb.co/BggrkJ4/home.jpg' fluid />
            </Layout>
        );
    }
}

export default InvestmentIndex;