import React from 'react';
// MUI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';

// Redux 
import { connect } from 'react-redux'


// Components
import ProTip from '../src/components/Common/ProTip';
import Link from '../src/components/Common/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Index = () =>  {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <br/>
        <Link href="/reduxdemo" color="secondary">
          Go to the Redux page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

export default connect()(Index)
