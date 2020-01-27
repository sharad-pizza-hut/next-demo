// Dynamic route with one query parameter `id`
// Next.js will try to match [id].js and pass the `id` parameter to the component.
// More reading: https://nextjs.org/docs/routing/dynamic-routes

import React from 'react';

// MUI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

// SEO
import { NextSeo } from 'next-seo';

// Components
import Link from '../../src/components/Common/Link';

export default function ID({id}) {
    return (
    <Container maxWidth="sm">
      <Box my={4}>
        <NextSeo
          title={`routing/id/${id}`}
          description="This is the [id].js page. This is being set by the NextSEO component."
        />
        <Typography variant="h4" component="h1" gutterBottom>
          ID 
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
        routing/id/{id}
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
      </Box>
    </Container>
  );
}

ID.getInitialProps = ({query}) => {
    const { id } = query
    return {id}
}
