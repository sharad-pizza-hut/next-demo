// Dynamic route with one query parameter `id`
// Next.js will try to match [id].js and pass the `id` parameter to the component.
// More reading: https://nextjs.org/docs/routing/dynamic-routes

import React from "react";
import { useRouter } from "next/router";

// API
import axios from "axios";

// MUI
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

// SEO
import { NextSeo } from "next-seo";

// Components
import Link from "../../src/components/Common/Link";

const ID = ({ seo_title, seo_image }) => {
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
        <br />
        <Typography variant="h4" component="h2" gutterBottom>
          id = <code> {router.query.id} </code>
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          title = <code> {seo_title} </code>
        </Typography>
        <Typography variant="h4" component="h5" gutterBottom>
          image = <code> {seo_image} </code>
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
};

ID.getInitialProps = async ({ query }) => {
  const { id } = query;
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/photos/${id}`
  );
  const seo_title = data.title;
  const seo_description = `ID: ${data.id}`;
  const seo_image = data.thumbnailUrl;
  return { seo_title, seo_description, seo_image };
};

export default ID;
