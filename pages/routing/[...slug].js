// Catchall route.
// Next.js will try to match [id].js first before falling back to this.
// More reading: https://nextjs.org/blog/next-9-2#catch-all-dynamic-routes

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

export default function Slug({ slug }) {
  const renderedSlug = slug.join(', ');
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <NextSeo
          title={`routing/${renderedSlug}`}
          description="This is the [...slug].js page. This is being set by the NextSEO component."
        />
        <Typography variant="h3" component="h1" gutterBottom>
          routing/[...slug]
        </Typography>
        <br />
        <Typography variant="h4" component="h2" gutterBottom>
          Slug: <code> {renderedSlug} </code>
        </Typography>
        <br />
        <Button
          variant="contained"
          color="primary"
          component={Link}
          naked
          href="/routing"
        >
          Go back
        </Button>
      </Box>
    </Container>
  );
}

Slug.getInitialProps = ({ query }) => {
  const { slug } = query;
  return { slug };
};
