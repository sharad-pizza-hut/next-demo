import React, {useEffect} from 'react'

// SEO
import { NextSeo } from 'next-seo';

const Deals = () => {
    useEffect(() => {
        // Force redirect
        window.location.href = "https://www.pizzahut.com/link.php?menu=deals"
      });
    return (
        <div>
        <NextSeo title="Deals" description="Pizza Hut Deals" />
        </div>
    )
}


export default Deals
