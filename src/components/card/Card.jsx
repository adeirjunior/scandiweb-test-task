import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Card } from 'react-bootstrap';
import axios from 'axios';

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

    & > .delete-checkbox[type="checkbox"]{
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
        &:hover + span{
            background-color: #89d8e2;
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
    const [data,setData] = useState([])

    useEffect(() => {
        try{
            const API_PATH = 'http://localhost/scandiweb-test-task/api/getProducts.php';
            axios.get(API_PATH).then(res => res.data)
            .then(data => {
                console.log(data)
                setData(data)
            })
            .catch(e => console.log(e));
        }catch(e){
            console.log(e.message)
        }
    },[])

    return (
        <>
        {
            data.length > 0 && (
                data.map((res, key) => (
                        <CardW key={key}>
                            <Checkbox>
                                <input value={res.sku} name="delete-checkbox[]" className='delete-checkbox' type="checkbox"/>
                                <span></span>    
                            </Checkbox>
                            <Card.Body>
                                <ul>
                                    <li><p>{res.sku}</p></li>
                                    <li><p>{res.name}</p></li>
                                    <li><p>{`${res.price}$`}</p></li>
                                    <li>
                                        {
                                        (() => {
    
                                            switch (res.type) {
                                                case 'book':
                                                return (
                                                    <p> Weight: {res.weight}KG </p>
                                                )
                                            case 'dvd-disc':
                                                return (
                                                    <p> Size: {res.size}MB </p>
                                                )
                                                case 'furniture':
                                                    return (
                                                    <p> Dimension: {res.height}x{res.width}x{res.length} </p>
                                                    )
                                                default:
                                                    break;
                                            
                                            }
                                
                                        }
                                        )()
                                        }

                                    </li>
                                </ul>
                            </Card.Body>
                        </CardW>
                    )
                )
            )
        }
        </>
    )
}

export default CardBody
