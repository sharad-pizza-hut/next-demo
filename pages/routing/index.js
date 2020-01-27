import React from 'react';

// MUI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// SEO
import { NextSeo } from 'next-seo';

const Routing = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <NextSeo
          title="routing/index"
          description="This is the routing/index page. This is being set by the NextSEO component."
        />
        <Typography variant="h4" component="h1" gutterBottom>
          routing/index
        </Typography>
      </Box>
    </Container>
  );
};

export default Routing;
