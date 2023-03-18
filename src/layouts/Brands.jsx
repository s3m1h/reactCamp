import React, { useState,useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import BrandService from '../services/brandService'
export default function Brands() {
    const [brands, setBrands] = useState([])
    useEffect(()=>{
        let brandService = new BrandService()
        brandService.getBrands().then(result=>setBrands(result.data.data))
    })
    return (
        <div>
            <Menu pointing vertical>
                { brands.map(b=>(
                    <Menu.Item key={b.id}> {b.name}</Menu.Item>
                ))}
                
        
            </Menu>
        </div>
    )
}
