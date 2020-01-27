
import React, {useEffect} from 'react'

// SEO
import { NextSeo } from 'next-seo';

const Deals = () => {
    useEffect(() => {
        // Force redirect
        window.location.href = "https://www.pizzahut.com/link.php?hutrewards"
      });
    return (
        <div>
        <NextSeo title="Pizza Hut | Rewards" description="Pizza Hut | Rewards | NextSEO" />
        </div>
    )
}


export default Deals
