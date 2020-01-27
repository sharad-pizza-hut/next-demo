import React from 'react';

// MUI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
      </Box>
    </Container>
  );
};

export default A;
