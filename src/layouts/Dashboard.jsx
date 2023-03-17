//rfc

import React from 'react'
import Categories from './Categories'
import Navi from './Navi'
import ProductList from '../pages/ProductList'

// jsx tag
export default function Dashboard() {
  return (
    <div>
      <Navi></Navi>
      <Categories></Categories>
      <ProductList></ProductList>

    </div>
  )
}
