import React, { useEffect, Fragment } from 'react'

// SEO
import { NextSeo } from 'next-seo';

const Deals = () => {
    useEffect(() => {
        // Force redirect
        window.location.href = "https://www.pizzahut.com/link.php?menu=deals"
    });
    return (
        <Fragment>
            <NextSeo title="Pizza Hut | Deals" description="Pizza Hut | Deals | NextSEO" />
        </Fragment>
    )
}


export default Deals
