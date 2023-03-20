import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn(props) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" 
            src="https://avatars.githubusercontent.com/u/25157283?v=4"/>
            <Dropdown pointing="top right" text='semih'>
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info"/>
                    <Dropdown.Item onClick={props.signOut} text="Çıkış yap" icon="sign-out"/>
                    
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
