import React, { useEffect, Fragment } from 'react';

// SEO
import { NextSeo } from 'next-seo';

const Deals = ({ seo_image }) => {
  useEffect(() => {
    // Force redirect
    window.location.href = 'https://www.pizzahut.com/link.php?menu=deals';
  });
  return (
    <Fragment>
     <p> Redirecting... </p>
      <NextSeo
        title="Pizza Hut | Deals"
        description="Pizza Hut | Deals | NextSEO"
        openGraph={{
          images: [
            {
              url: seo_image,
              alt: 'Pizza Hut Deals Image'
            }
          ]
        }}
      />
    </Fragment>
  );
};

Deals.getInitialProps = ctx => {
  const getURL = () =>
    'https://www.pizzahut.com/assets/w/images/homepage_deal/PH_Local+Deal_Sidekick_730x320.jpg';
  const seo_image = getURL();
  return { seo_image };
};

export default Deals;
