import React from 'react'
import { Container, Menu} from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
export default function Navi() {
    return (
        <div>
            <Menu inverted>
                <Container>
                    <Menu.Item name='home'/>
                    <Menu.Item name='messages'/>

                    <Menu.Menu position='right'>
                        <CartSummary></CartSummary>
                        <SignedOut/>
                        <SignedIn/>
                    </Menu.Menu>

                </Container>


            </Menu>
        </div>
    )
}
