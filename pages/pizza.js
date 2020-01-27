import React, {useEffect} from 'react'

// SEO
import { NextSeo } from 'next-seo';

const Pizza = () => {
    useEffect(() => {
        // Force redirect
        window.location.href = "https://www.pizzahut.com/index.php?menu=pizza#/menu/pizza"
      });
    return (
        <div>
        <NextSeo title="Pizza Hut | Pizza" description="Pizza Hut | Pizza" />
        </div>
    )
}


export default Pizza
