import React from 'react'
import Hero from '../components/hero'
import LatestCollection from '../components/latestcollection'
import BestSeller from '../components/bestseller'
import Ourpolicy from '../components/ourpolicy'
import Newsletterbox from '../components/newsletterbox'

const home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Ourpolicy />
      <Newsletterbox />
    </div>
  )
}

export default home