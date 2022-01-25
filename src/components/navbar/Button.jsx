import React from 'react'
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
function Button (props){
        return (
            <Link 
            to={
                props.attr === 'add' 
                ? '/add-product' 
                : '/'}
            >
                <Btn 
                onClick={()=>{console.log('clicked')}}
                type={
                    props.attr === 'save' 
                    ? 'submit' 
                    : ''
                }
                form={
                    props.attr === 'save' 
                    ? 'product-form' 
                    : ''
                }
                id={
                    props.attr === 'del' 
                    ? '#delete-product-btn' 
                    : ''
                    } 
                primary={
                    props.attr === 'del' 
                    ? true 
                    : props.attr === 'can' 
                    ? true 
                    : false
                    }
                >
                    {
                    props.attr === 'del' 
                    ? 'mass delete' 
                    : props.attr === 'save' 
                    ? 'save'
                    : props.attr === 'can'
                    ? 'cancel'
                    : 'add' 
                    }
                </Btn>
            </Link>
        )
    }

export default Button
