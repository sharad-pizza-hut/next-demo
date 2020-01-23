import React from 'react';

// SEO
import Head from 'next/head';

// MUI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// Redux
import { connect } from 'react-redux';

// Components
import ProTip from '../src/components/Common/ProTip';
import Copyright from '../src/components/Common/Copyright';
import Link from '../src/components/Common/Link';

const Index = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Head>
          <title>Main</title>
          <meta
            name="description"
            content="This is the index.js page. This is being set by the next/head component."
          ></meta>
        </Head>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <br />
        <Link href="/reduxdemo" color="secondary">
          Go to the Redux page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
};

export default connect()(Index);
