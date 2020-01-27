import React, {useEffect} from 'react'

// MUI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// SEO
import { NextSeo } from 'next-seo';

export const ExternalRedirect = () => {
    useEffect(() => {
        // Force redirect
        window.location.href = "https://www.google.com"
      });
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <NextSeo
          title="routing/externalredirect"
          description="This is the routing/externalredirect page. This is being set by the NextSEO component."
        />
        <Typography variant="h4" component="h1" gutterBottom>
          routing/externalredirect
        </Typography>
      </Box>
    </Container>
  );
};

export default ExternalRedirect;



