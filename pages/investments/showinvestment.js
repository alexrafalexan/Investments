import React, {Component} from 'react';
import Layout from "../../components/Layout";
import creator from "../../ethproject/creator";
import Investment from "../../ethproject/investment";
import {Card, GridColumn, Icon, Grid, Button, GridRow} from 'semantic-ui-react';
import web3 from '../../ethproject/web3';
import AddOrganizationsForm from "../../components/AddOrganizationsForm";
import AddActivityForm from "../../components/AddActivityForm";
import OrganizationsPayment from "../../components/OrganizationsPayment";
import {Link} from '../../routes';
import DetailsOrganizations from "./details/detailsorganizations";


class ShowInvestment extends Component{
    static async getInitialProps(props) {
        const investment = Investment(props.query.address);
        const investmentsummary = await investment.methods.getInvestmentSummary().call();

            return {
                address: props.query.address,
                master: investmentsummary[0],
                numOrganizations: investmentsummary[1],
                nowOrganizationsAddedDeclaireMaster: investmentsummary[2],
                nowOrganizationsAdded: investmentsummary[3],
                contributionorganization: investmentsummary[4],
                numInvestors: investmentsummary[5],
                nowInvestorsAdded: investmentsummary[6],
                contribution: investmentsummary[7],
                activities: investmentsummary[8],
                activitiesTable_length: investmentsummary[9],
                statusOfResearch: investmentsummary[10],
            };
        }

        renderCards(){
            const {
                master,
                numOrganizations,
                nowOrganizationsAddedDeclaireMaster,
                nowOrganizationsAdded,
                contributionorganization,
                numInvestors,
                nowInvestorsAdded,
                contribution,
                activities,
                activitiesTable_length,
                statusOfResearch
            } = this.props;


            let statusOfResearchPrev = this.props;

            if (statusOfResearch == 0){
                statusOfResearchPrev = 'Inactive';
            }else if (statusOfResearch == 1){
                statusOfResearchPrev = 'Active';
            }else if (statusOfResearch == 2){
                statusOfResearchPrev = 'Pending';
            }else if (statusOfResearch == 3){
                statusOfResearchPrev = 'Cancelled';
            }else if (statusOfResearch == 4){
                statusOfResearchPrev = 'Completed';
            }else if (statusOfResearch == 5){
                statusOfResearchPrev = 'InactiveClosed';
            }else if (statusOfResearch == 6){
                statusOfResearchPrev = 'CancelledClosed';
            }else if (statusOfResearch == 7){
                statusOfResearchPrev = 'CompletedClosed';
            }


            const items = [
                {
                    header: '1. Επόπτης Έρευνας',
                    meta : master,
                    description: 'Ο επόπτης της Έρευνας',
                    style: {overflowWrap: 'break-word'}
                },
                {
                    header: '2. Συνεισφορά ανά Οργανισμού',
                    meta: web3.utils.fromWei(contributionorganization,'ether') + ' Ether',
                    description: 'Το ποσό σε ether που πρέπει να καταθέσει ο κάθε Οργανισμός σαν εγγύηση'
                },
                {
                    header: '3. Συνεισφορά ανά Επένδυτή',
                    meta: web3.utils.fromWei(contribution, 'ether') + ' Ether',
                    description: 'Το ποσό σε ether που πρέπει να καταθέσει ο κάθε επενδυτής'
                },
                {
                    header: '4. Οργανισμοί' ,
                    meta: (<Link route={`/investments/${this.props.address}/details/detailsorganizations`}>
                        <a>
                            {nowOrganizationsAdded + '/' + nowOrganizationsAddedDeclaireMaster + '/' + numOrganizations + '  -- Λεπτομέρειες'}
                        </a>
                    </Link>),
                    description: 'O αρθιμός των Οργανισμών που έχουν συμμετάσχει σε σχέση με αυτούς που πρέπει να συμμετάσχουν.'
                },
                {
                    header: '5. Αριθμός Activities',
                    meta: (<Link route={`/investments/${this.props.address}/details/detailsactivities`}>
                        <a>
                            {activitiesTable_length + '/' + activities + '  -- Λεπτομέρειες Activity'}
                        </a>
                    </Link>),
                    description: 'Ο αριθμός των Activities που θα αποτελείται η έρευνα'
                },
                {
                    header: '6. Επενδυτές',
                    meta:  (<Link route={`/investments/${this.props.address}/details/detailsinvenstors`}>
                        <a>
                            {nowInvestorsAdded + '/' + numInvestors + '  -- Λεπτομέρειες'}
                        </a>
                    </Link>) ,
                    description: 'O αρθιμός των Επενδυτών που έχουν συμμετάσχει σε σχέση με αυτούς που πρέπει να συμμετάσχουν.'
                },
                {
                    header: '7. Πληροφορίες Πληρωμών',
                    meta: (<Link route={`/investments/${this.props.address}/details/detailspayment`}>
                        <a>
                            {'Λεπτομέρειες'}
                        </a>
                    </Link>) ,
                    description: ''
                },
                {
                    header: '8. Κατάσταση Έρευνας',
                    meta:   (<Link route={`/investments/${this.props.address}/details/statusofresearch`}>
                        <a>
                            {statusOfResearchPrev + '  -- Ενέργειες'}
                        </a>
                    </Link>) ,
                    description: ''
                },
            ];

            return <Card.Group items={items}/>;


        }

        render() {
            return (<Layout>
                <h3>Λεπτομέρειες</h3>
                <Grid>
                    <GridRow>
                        <Grid.Column>
                            {this.renderCards()}
                        </Grid.Column>
                    </GridRow>
                    <GridRow>
                        <Grid.Column>
                        </Grid.Column>
                    </GridRow>

                </Grid>
            </Layout>);
        }
}

export default ShowInvestment;