import React, {useEffect, useState} from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import CarService from '../services/carService'
export default function CarList() {


  const [cars, setCars] = useState([])
  useEffect(()=>{
    let carService = new CarService()
    carService.getCars().then(c=>setCars(c.data))
  },[])

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Marka</Table.HeaderCell>
            <Table.HeaderCell>Model</Table.HeaderCell>
            <Table.HeaderCell>Model Yılı</Table.HeaderCell>
            <Table.HeaderCell>Renk</Table.HeaderCell>
            <Table.HeaderCell>Fiyat</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            cars.map(c=>(
              <Table.Row>
            <Table.Cell>{c.brandName}</Table.Cell>
            <Table.Cell>{c.modelName}</Table.Cell>
            <Table.Cell>{c.modelYear}</Table.Cell>
            <Table.Cell>{c.colorName}</Table.Cell>
            <Table.Cell>{c.dailyPrice}</Table.Cell>
          </Table.Row>
            ))
          }
          
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}
