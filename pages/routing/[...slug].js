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

export default function Slug({slug}) {
  const renderedSlug = slug.join('/')
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <NextSeo
          title={`routing/${renderedSlug}`}
          description="This is the [...slug].js page. This is being set by the NextSEO component."
        />
        <Typography variant="h4" component="h1" gutterBottom>
          Catchall 
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
        routing/{renderedSlug}
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

Slug.getInitialProps = ({query}) => {
    const { slug } = query
    return {slug}
}
