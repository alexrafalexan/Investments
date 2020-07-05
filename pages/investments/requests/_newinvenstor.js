import React, {Component} from "react";
import {Button, Grid, GridRow} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Layout from "../../../components/Layout";

class AddOrganization extends Component {
    static async getInitialProps(props){
        const { address } = props.query;
        return {address};
    }

    render() {
        return (
            <Layout>
                <h3>Γίνε Επενδυτής της έρευνας</h3>
                <Grid>
                    <GridRow>
                        <Grid.Column>
                        </Grid.Column>
                    </GridRow>
                </Grid>
            </Layout>
        );
    }
}

export default AddOrganization;