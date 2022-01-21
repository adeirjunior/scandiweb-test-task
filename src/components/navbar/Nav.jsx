import React, { Component } from 'react';
import { Container, Navbar, ButtonGroup} from 'react-bootstrap';
import Button from './Button';
import { ReactComponent as Icon } from '../../assets/svg/Icon.svg';


class Navigator extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.btnProps ? "Create Product" : "Product List"
        }
    }
    componentDidMount(){
        
    }
    render() {
        return(
            <Navbar expand='md' id='navbarSty'>
                <Container>
                    <Navbar.Brand>
                        <Icon 
                        width="75"
                        height="75" 
                        className="d-inline-block"
                        />
                        {' '}{this.state.title}</Navbar.Brand>
                    <ButtonGroup>
                        <Button attr={this.props.btnProps ? 'save' : 'add'}/>
                        <Button attr={this.props.btnProps ? 'can' : 'del'}/>
                    </ButtonGroup>
                    
                </Container>
            </Navbar>
        )
    }
}
export default Navigator
