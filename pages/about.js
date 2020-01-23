import React from 'react';

// MUI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

// SEO
import Head from 'next/head';

// Components
import ProTip from '../src/components/Common/ProTip';
import Copyright from '../src/components/Common/Copyright';
import Link from '../src/components/Common/Link';

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Head>
          <title>About</title>
          <meta
            name="description"
            content="This is the about.js page. This is being set by the next/head component."
          ></meta>
        </Head>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          naked
          href="/"
        >
          Go to the main page
        </Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
