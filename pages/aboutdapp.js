import React, { Component } from 'react';
import creator from '../ethproject/creator';
import {Button, Card} from "semantic-ui-react";
import Layout from "../components/Layout";
import {Link} from "../routes";


class AboutDapp extends Component {
    render() {
        return (
            <Layout>
                <div>
                    <h3> About Dapp</h3>
                </div>
            </Layout>
        );
    }
}

export default AboutDapp;