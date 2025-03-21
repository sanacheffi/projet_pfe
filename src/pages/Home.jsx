import React from 'react'
import Hero from '../components/Layout/Hero'
import CollectionSection from '../components/Products/CollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
import BrandStory from '../components/Layout/BrandStory'
import FeaturesSection from '../components/Products/FeaturesSection'

const Home = () => {
  return (
    <div>
      <Hero/>
      <CollectionSection/>
      <NewArrivals/>
      <h2 className="py-10 text-2xl text-center font-bold">
      Meilleures Ventes
      </h2>
      <ProductDetails/>
      <BrandStory/>
      <FeaturesSection/>
    </div>
  )
}

export default Home
