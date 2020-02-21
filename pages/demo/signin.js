
import React, { useEffect, Fragment } from 'react'

// SEO
import { NextSeo } from 'next-seo';

const Deals = () => {
    useEffect(() => {
        // Force redirect
        window.location.href = "https://www.pizzahut.com/link.php?hutrewards"
    });
    return (
        <Fragment>
            <NextSeo title="Pizza Hut | Sign In" description="Pizza Hut | SignIn | NextSEO" />
        </Fragment>
    )
}

export default Deals
