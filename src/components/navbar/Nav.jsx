import React from 'react';
import { Container, Navbar, ButtonGroup} from 'react-bootstrap';
import Button from './Button';
import './Nav.scss';
import { ReactComponent as Icon } from '../../assets/svg/Icon.svg';
import { Link } from 'react-router-dom';

function Navigator(props) {
    const state = {
        title: props.btnProps ? "Create Product" : "Product List"
    }

    return(
        <Navbar expand='md' id='navbarSty'>
            <Container>
                <Navbar.Brand>
                    <Icon 
                    width="75"
                    height="75" 
                    className="d-inline-block"
                    />
                    {' '}{state.title}
                </Navbar.Brand>
                <ButtonGroup>
                    { state.title === 'Create Product'
                    ? (
                        <Button onClick={e => onsubmit(e)} attr={props.btnProps ? 'save' : 'add'}/>
                      )
                    : (
                        <Link to='/add-product'>
                            <Button attr={props.btnProps ? 'save' : 'add'}/>
                        </Link>
                      )

                    }
                    { state.title === 'Product List'
                    ? (
                        <Button attr={props.btnProps ? 'can' : 'del'}/>
                      )
                    : (
                        <Link to='/'>
                            <Button attr={props.btnProps ? 'can' : 'del'}/>
                        </Link>
                      )

                    }
                </ButtonGroup>      
            </Container>
        </Navbar>
        )
    
}
export default Navigator
