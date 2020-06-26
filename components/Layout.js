import React from 'react';
import Header from "./Header";
import { Container } from "semantic-ui-react";

export  default (props) => {
     return(
         <Container>
             <Header />
             {props.children}
             <h1>2020 © Copyrights Πανεπιστήμιο Πειραιώς</h1>
         </Container>
     );
};