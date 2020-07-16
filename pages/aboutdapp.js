import React, { Component } from 'react';
import creator from '../ethproject/creator';
import {Segment, Image} from "semantic-ui-react";
import Layout from "../components/Layout";
import {Link} from "../routes";


class AboutDapp extends Component {
    render() {
        return (
            <Layout>
                <div>
                    <Segment>
                    <Image src='https://i.ibb.co/3Fxmdxh/about-DApps.jpg' size='medium' floated = 'left' />
                        ΕΦΑΡΜΟΓΗ ΣΤΟ BLOCKCHAIN ΜΕ ΣΚΟΠΟ ΤΗΝ ΒΕΛΤΙΩΣΗ ΤΗΣ ΔΙΑΔΙΚΑΣΙΑΣ ΔΙΕΞΑΓΩΓΗΣ ΕΡΕΥΝΩΝ ΣΤΟ ΤΟΜΕΑ ΤΗΣ ΥΓΕΙΑΣ<br></br>
                        Η συγκεκριμένη Dapp εφαρμογή έχει δημιουργηθεί στα πλαίσια Διπλωματικής Εργασία. Στην παρούσα εργασία έχει δημιουργηθεί
                        ένα σύστημα με βάση το blockchain το οποίο θα είναι προσομοίωση του διαγράμματος Gantt. Προσομοιώνοντας το διαγράμματα Gantt
                        πάνω στο blockchain συνδυάζουμε τα οφέλη του ενός με τα οφέλη του άλλου. Η τεχνολογία του blockchain μας προσφέρει ασφάλεια,
                        εγκυρότητα και αξιοπιστία. Η ενέργειες καταγράφονται στην αλυσίδα χωρίς να μπορεί κάποιος να τις αλλάξει – τροποποιήσει ή να τις αρνηθεί.
                        Παράλληλα σε συνδυασμό με το διάγραμμα Gantt προσφέροντας σαφή χρονική απεικόνιση των δραστηριοτήτων
                        το αποτέλεσμα η εφαρμογή να είναι εύκολα κατανοητή, διαχειρίσιμη και ασφαλής.
                    </Segment>
                </div>
            </Layout>
        );
    }
}

export default AboutDapp;