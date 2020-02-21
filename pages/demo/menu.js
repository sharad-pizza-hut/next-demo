import React, { useEffect, Fragment } from 'react';

// SEO
import { NextSeo } from 'next-seo';

const Pizza = ({seo_image}) => {
  useEffect(() => {
    // Force redirect
    window.location.href =
      'https://www.pizzahut.com/index.php?menu=pizza#/menu/pizza';
  });
  return (
    <Fragment>
      <NextSeo
        title="Pizza Hut | Menu"
        description="Pizza Hut | Menu | NextSEO"
        openGraph={{
          images: [
            {
              url: seo_image,
              alt: 'Pizza Hut Menu Image'
            }
          ]
        }}
      />
    </Fragment>
  );
};

Pizza.getInitialProps = () => {
    const getURL = () =>
      'https://www.pizzahut.com/assets/w/images/homepage_deal/PH_Local+Deal_Sidekick_730x320.jpg';
    const seo_image = getURL();
    return { seo_image };
  };
  
export default Pizza;
