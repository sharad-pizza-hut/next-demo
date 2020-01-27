import React from 'react';

// MUI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// SEO
import { NextSeo } from 'next-seo';

export const B = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <NextSeo
          title="routing/B"
          description="This is the routing/B page. This is being set by the NextSEO component."
        />
        <Typography variant="h4" component="h1" gutterBottom>
          routing/B
        </Typography>
      </Box>
    </Container>
  );
};

export default B;
