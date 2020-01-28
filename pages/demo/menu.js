import React, { useEffect, Fragment } from 'react'

// SEO
import { NextSeo } from 'next-seo';

const Pizza = () => {
    useEffect(() => {
        // Force redirect
        window.location.href = "https://www.pizzahut.com/index.php?menu=pizza#/menu/pizza"
    });
    return (
        <Fragment>
            <NextSeo title="Pizza Hut | Menu" description="Pizza Hut | Menu | NextSEO" />
        </Fragment>
    )
}

export default Pizza
