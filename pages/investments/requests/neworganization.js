import React, {Component} from "react";
import {Button, Grid, GridRow} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Layout from "../../../components/Layout";
import AddOrganizationsForm from "../../../components/AddOrganizationsForm";

class AddOrganization extends Component {
    static async getInitialProps(props){
        const { address } = props.query;
        return {address};
    }

    render() {
        return (
            <Layout>
                <h3>Προσθήκη Οργανισμού απο τον Επόπτη</h3>
                <Grid>
                    <GridRow>
                        <Grid.Column>
                            <AddOrganizationsForm address={this.props.address}/>
                        </Grid.Column>
                    </GridRow>
                </Grid>
            </Layout>
        );
    }
}

export default AddOrganization;