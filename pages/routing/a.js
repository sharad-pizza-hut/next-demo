import React from 'react';

// MUI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

// Components
import Link from '../../src/components/Common/Link';

// SEO
import { NextSeo } from 'next-seo';

export const A = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <NextSeo
          title="routing/A"
          description="This is the routing/A page. This is being set by the NextSEO component."
        />
        <Typography variant="h4" component="h1" gutterBottom>
          routing/a
        </Typography>
        <br />
        <Button
          variant="contained"
          color="primary"
          component={Link}
          naked
          href="/routing"
        >
        Go Back
        </Button>
      </Box>
    </Container>
  );
};

export default A;
