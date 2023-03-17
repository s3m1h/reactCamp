//rfc

import React from 'react'
import Categories from './Categories'
import Navi from './Navi'
import ProductList from '../pages/ProductList'
import { Container } from 'semantic-ui-react'

// jsx tag
export default function Dashboard() {
  return (
    <div>
      <Navi></Navi>
      <Container className='main'>
        <Categories></Categories>
        <ProductList></ProductList>
      </Container>
      

    </div>
  )
}
