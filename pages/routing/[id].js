// Dynamic route with one query parameter `id`
// Next.js will try to match [id].js and pass the `id` parameter to the component.
// More reading: https://nextjs.org/docs/routing/dynamic-routes

import React from 'react';
import { useRouter } from 'next/router';

// MUI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

// SEO
import { NextSeo } from 'next-seo';

// Components
import Link from '../../src/components/Common/Link';

const ID = ({ id, seo_title }) => {
  const router = useRouter();
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <NextSeo
          title={seo_title}
          description="This is the [id].js page. This is being set by the NextSEO component."
        />
        <Typography variant="h4" component="h2" gutterBottom>
          routing/[:id]
        </Typography>
        <br/>
        <Typography variant="h4" component="h2" gutterBottom>
          id = <code> {router.query.id} </code>
        </Typography>
        <br/>
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

ID.getInitialProps = (ctx) => {
  console.log(ctx)
  const seo_title = "poop"
  const seo_description = "pee"
  const seo_image = "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
  return {seo_title, seo_description, seo_image}
}


export default ID