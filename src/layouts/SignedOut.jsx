import React from 'react'
import { Button, Menu } from 'semantic-ui-react'


export default function SignedOut({signIn}) {
  return (
    <div>
        <Menu.Item>
            <Button onClick={signIn} primary>Giriş yap</Button>
            <Button primary style={{
                marginLeft:10
            }}>Kayit ol</Button>
        </Menu.Item>
        
    </div>
  )
}
