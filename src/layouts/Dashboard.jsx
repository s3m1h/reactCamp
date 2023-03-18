//rfc

import React from 'react'
import Brands from './Brands'
import Navi from './Navi'
import CarList from '../pages/CarList'
import { Container } from 'semantic-ui-react'

// jsx tag
export default function Dashboard() {
  return (
    <div>
      <Navi></Navi>
      <Container className='main'>
         

        <div class="ui grid">
          <div class="four wide column"><Brands></Brands></div>
          <div class="twelve wide column"><CarList></CarList></div>
        </div>

      </Container>
    </div>
  )
}
