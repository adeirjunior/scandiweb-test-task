import React from 'react'
import { Container, Navbar, ButtonGroup} from 'react-bootstrap'
import Button from './Button'
import { ReactComponent as Icon } from '../../assets/svg/Icon.svg'


function Navigator() {
    return (
        <Navbar expand='md' id='navbarSty'>
            <Container>
                <Navbar.Brand>
                    <Icon 
                    width="75"
                    height="75" 
                    className="d-inline-block"
                    />
                    {' '}Product List</Navbar.Brand>
                <ButtonGroup>
                    <Button/>
                    <Button del/>
                </ButtonGroup>
                
            </Container>
        </Navbar>
    )
}

export default Navigator
