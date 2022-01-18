import React from 'react'
import styled from 'styled-components'
import { Card } from 'react-bootstrap';

const CardW = styled.div`
    color: white;
    background-color: #EF476F;
    width: 300px;
    height: 400px;
    border-radius: 1.5em;
    transition: transform .5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow .5s ;

    &:hover{
        transform:  scale(.98);
        box-shadow: 0px 5px 50px rgba(0,0,0,.2);
    }

    @media only screen and (max-width: 470px){
        transform:  scale(.8);
    }

    .card-body{
        height: 80%;

        ul{
            width: 100%;
            height: 100%;
            list-style: none;
            text-align: center;
            padding: none;
            margin: 0;
            padding-inline-start: 0;
            font-size: 1.4rem;
            font-weight: bold;
            
        }
        
    }

`
const Checkbox = styled.div`
    position: relative;
 	font-size: 1rem;
 	height: 3rem;
 	width: 3rem;

    & > input[type="checkbox"]{
        cursor: pointer;
        height: 100%;
        left: 0;
        margin: 1em 0 0 1em;
        opacity: 0;
        position: relative;
        top: 0;
        width: 100%;
        z-index: 1;

        & + span{
            display: block;
            position: relative;
            z-index: 0;
            margin: -3.2em 0 0 1em;
            border-radius: 50%;
            background-color: white;
            height: 100%;
            width: 100%;
            transition: background-color .15s;
        }

        &:checked + span{
            background-color: #1B9AAA;
        }
        &:checked:hover + span{
            background-color: #44b8c7;
        }
    }
`

function CardBody() {

    

    return (
        <CardW>
            <Checkbox>
                <input type="checkbox"/>
                <span></span>    
            </Checkbox>
            <Card.Body>
                <ul>
                    <li><p>SKU</p></li>
                    <li><p>NAME</p></li>
                    <li><p>PRICE</p></li>
                    <li><p>ATTRIBUTES</p></li>
                </ul>
            </Card.Body>
        </CardW>
    )
}

export default CardBody
