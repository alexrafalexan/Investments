import React, {Component} from "react";
import {Button, Grid, GridRow} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Layout from "../../../components/Layout";
import PaySeller from '../../../components/PaySeller'

class SellerPayment extends Component {
    static async getInitialProps(props){
        const { address } = props.query;
        const { id } = props.query;
        return {address, id};
    }

    render() {
        return (
            <Layout>
                <h3>Πληρωμή Πωλητή</h3>
                <Grid>
                    <GridRow>
                        <Grid.Column>
                            <PaySeller address= {this.props.address} id = {this.props.id}/>
                        </Grid.Column>
                    </GridRow>
                </Grid>
            </Layout>
        );
    }
}

export default SellerPayment;