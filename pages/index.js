import React from 'react';

// SEO
import { NextSeo } from 'next-seo';

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
        <NextSeo
          title="Main"
          description="This is the index.js page. This is being set by the NextSEO component."
        />
        <Typography variant="h2" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <br />
        <Link href="/demo" color="secondary">
        <Typography variant="h4" component="h1" gutterBottom>
          Demo UI
        </Typography>
        </Link>
        <br />
        <Link href="/redux" color="secondary">
        <Typography variant="h4" component="h1" gutterBottom>
          Redux Example
        </Typography>
        </Link>
        <br />
        <Link href="/routing" color="secondary">
        <Typography variant="h4" component="h1" gutterBottom>
          Routing Examples
        </Typography>
        </Link>
        <br />
        <Link href="/api-example" color="secondary">
        <Typography variant="h4" component="h1" gutterBottom>
          API Examples
        </Typography>
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
};

export default connect()(Index);
