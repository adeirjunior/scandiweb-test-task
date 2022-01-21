import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const Btn = styled.button`
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    width: 200px;
    font-weight: bold;
    padding: .5em 0;
    border: none;
    border-radius: 1em;
    background-color: #EF476F;

    &:hover{
        background-color: #eb6887;
    }
    @media only screen and (max-width: 470px){
        width: 150px;
    }

    ${props => props.primary === true && css`
        background-color: #1B9AAA;
        margin-left: 1em;

        &:hover{
        background-color: #44b8c7;
    }

    `}

`
class Button extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <Link 
            to={
                this.props.attr === 'add' 
                ? '/add-product' 
                : '/'}>
                <Btn 
                id={
                    this.props.attr === 'del' 
                    ? '#delete-product-btn' 
                    : ''
                    } 
                primary={
                    this.props.attr === 'del' 
                    ? true 
                    : this.props.attr === 'can' 
                    ? true 
                    : false
                    }
                >
                    {
                    this.props.attr === 'del' 
                    ? 'mass delete' 
                    : this.props.attr === 'save' 
                    ? 'save'
                    : this.props.attr === 'can'
                    ? 'cancel'
                    : 'add' 
                    }
                </Btn>
            </Link>
        )
    }
}

export default Button
