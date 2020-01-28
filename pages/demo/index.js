import React, { Fragment } from 'react';

// SEO
import { NextSeo } from 'next-seo';

// Components
import DemoComponent from '../../src/components/Demo';


export default function Demo() {
  return (
    <Fragment>
      <NextSeo
        title="Demo"
        description=" Pizza Hut | Home | NextSEO"
      />
      <DemoComponent />
    </Fragment>
  );
}
