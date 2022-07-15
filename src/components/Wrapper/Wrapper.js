import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function Wrapper(props) {
   return (
      <React.Fragment>
         <CssBaseline/>
         <Container maxWidth="xl" className="container">
            {props.children}
         </Container>
      </React.Fragment>
   );
}