import React, { useState } from 'react'
import styled from 'styled-components';
import Navigator from '../components/navbar/Nav';
import { Container } from 'react-bootstrap';
import './NewProduct.scss';
import axios from 'axios';
import Button from '../components/navbar/Button';
import Footer from '../components/Footer';

const Form = styled.form`
    display: inline-grid;
    grid-template-columns: 50% 50%;
    justify-items: center;
    width: 100%;

    .btn-group{
        display: none;

        @media only screen and (max-width: 766px) {
            display: block;
            margin-top: 2em;
        }

    }
    #fm-1{
        @media only screen and (max-width: 1150px){
            padding: 3em 0;
        }
    }
    #fm-1,#fm-2{
        display: inline-grid;
        grid-template-columns: 100%;
        align-items: center;
        align-content: center;
        gap: 3.5em;
        color: #EF476F;
        font-size: 1.25rem;
        font-weight: bold;
        text-transform: uppercase;

        label{
            display: inline-grid;
            grid-template-columns: 20% 80%;
            align-items: center;

            @media only screen and (max-width: 470px){
                grid-template-columns: 100%;
                justify-items: center;

            }
            select{
                margin-left: 6em;
                border-radius: .5em;
                background-color: #EF476F;
                color: white;
                border: none;
                padding: .5em 1.5em;
                cursor: pointer;

                @media only screen and (max-width: 1150px){
                margin-left: 2em;
                
                }
                @media only screen and (max-width: 766px) {
                    margin-left: 1em;
                }
                @media only screen and (max-width: 470px){
                    margin-left: 0;

            }
            }
        }
    }
    @media only screen and (max-width: 766px) {
        grid-template-columns: 100%;
        grid-template-rows: 600px 600px;
    
    }
   
`
const Input = styled.input`
    border: solid 3px #EF476F;
    margin-left: 6em;
    border-radius: .5em;

    @media only screen and (max-width: 1150px){
        margin-left: 2em;
                
    }
    @media only screen and (max-width: 766px) {
        margin-left: 1em;
    }
    @media only screen and (max-width: 470px){
    margin-left: 0;
    }

    &:focus{
                outline: none;
            }
`
function NewProduct (){
    const [state,setState] = useState({
            sku: "",
            name: "",
            price: "",
            type: "Select",
            size: "",
            weight: "",
            width: "",
            height: "",
            length: "",
            dataSend: "",
            error: null
        })
    
        const onsubmit = async (e) => {
            e.preventDefault();
            console.log(state);
            try{
                await axios({
                    method: 'post',
                    url: 'http://localhost/scandiweb-test-task/api/data/addProducts.php',
                    data: state
                })
                .then((res) => {
                    console.log(JSON.stringify(res.data))
    
                })
                .catch((err) => {
                    console.log(JSON.stringify(err))
                });
            } catch(e) {
                console.log(e.message)
            }
        }
        
   
    return (
        <>
        <Navigator btnData={state} btnProps/>
        <Container id='newProductSty'>
            <Form id='product-form' method="post">
                <div id='fm-1'>
                    <label>
                        Sku
                        <Input 
                        type="text" 
                        value={state.sku} 
                        onChange={ 
                            e => {
                                setState(
                                    prevState => {
                                        return { ...prevState, sku: e.target.value } 
                                    }
                                ); 
                                console.log(state.sku)
                            }
                        }  
                        name="sku" 
                        id="sku" 
                        required
                        />
                    </label>
                    <label>
                        Name
                        <Input 
                        type="text" 
                        value={state.name} 
                        onChange={ 
                            e => {
                                setState(
                                    prevState => {
                                        return { ...prevState, name: e.target.value } 
                                    }
                                ); 
                                console.log(state.name)
                            }
                        }  
                        name="name" 
                        id="name" 
                        required
                        />
                    </label>
                    <label>
                        Price
                        <Input 
                        type="number" 
                        value={state.price} 
                        onChange={ 
                            e => {
                                setState(
                                    prevState => {
                                        return { 
                                            ...prevState, 
                                            price: e.target.value 
                                        } 
                                    }
                                ); 
                                console.log(`$${state.price}`)
                            }
                        }  
                        name="price" 
                        id="price" 
                        required
                        />
                    </label>
                    <label>
                        Types
                        <select
                        onChange={
                            e => { 
                                setState(
                                    prevState => {
                                        return{
                                            ...prevState,
                                            type: e.target.value 
                                        }
                                    }
                                )
                                console.log(e.target.value)}} name='type' id='productType'>
                            <option 
                            value="Select"
                            >
                                Select
                            </option>
                            <option 
                            value='DVD-disc'
                            >
                                DVD-disc
                            </option>
                            <option 
                            value='Book' 
                            >
                                Book
                            </option>
                            <option 
                            value='Forniture'
                            >
                                Forniture
                            </option>
                        </select>  
                    </label>
                </div>
                <div id='fm-2' style={state.type === 'Select' ? {backgroundColor: '#EF476F',width:'90%', textAlign: 'center'} : {}}>
                    {state.type === 'Select' ? (<p style={{color: 'white'}}>Please Select a Product Type</p>) : ''}
                    {
                        state.type === 'DVD-disc' 
                        ? (
                        <label>
                            Size
                            <Input 
                            type='number' 
                            value={state.size} 
                            onChange={
                                e => {
                                    setState(
                                        prevState => {
                                            return{
                                                ...prevState,
                                                size: e.target.value
                                            }
                                        }
                                    )
                                    console.log(state.size)
                                }
                            }
                            name='size'
                            required
                            />
                        </label>)
                        : state.type === 'Book' 
                        ? (
                        <label>
                            Weight
                            <Input 
                            type='number' 
                            value={state.weight}
                            onChange={
                                e => {
                                    setState(
                                        prevState => {
                                            return {
                                                ...prevState,
                                                weight: e.target.value
                                            }
                                        }
                                    )
                                    console.log(`${state.weight}Kg`)
                                }
                            }
                            name='weight'
                            required
                            />
                        </label>)
                        : state.type === 'Forniture' 
                        ? (
                        <label>
                            Width
                            <Input 
                            type='number' 
                            value={state.width} 
                            onChange={ 
                                e => {
                                    setState(
                                        prevState => {
                                            return{
                                                ...prevState,
                                                width: e.target.value
                                            }
                                        }
                                    );
                                    console.log(state.width)
                                }
                            }
                            name='width'
                            required
                            />
                        </label>)
                        : ('')
                    }
                    {
                        state.type === 'Forniture' 
                        ? (
                        <label>
                            Height
                            <Input 
                            type='number' 
                            value={state.height}  
                            onChange={ 
                                e => {
                                    setState(
                                        prevState => {
                                            return{
                                                ...prevState,
                                                height: e.target.value
                                            }
                                        }
                                    ); 
                                    console.log(state.height)
                                }
                            }
                            name='height'
                            required
                            />
                        </label>)
                        : ''
                    }
                    {
                        state.type === 'Forniture' 
                        ? (
                        <label>
                            Length
                            <Input 
                            type='number' 
                            value={state.length}  
                            onChange={ 
                                e => {
                                    setState(
                                        prevState => {
                                            return{
                                                ...prevState,
                                                length: e.target.value
                                            }
                                        }
                                    ); 
                                    console.log(state.length)
                                }
                            }
                            name='length'
                            required
                            />
                        </label>)
                        : ''
                    }
                </div>
                <div className='btn-group'>
                    <Button name='submit' onClick={e => onsubmit(e)} attr = 'save'/><Button attr = 'can'/>
                </div>
                <Footer/>
            </Form>
        </Container>
        </>
    )  
}

export default NewProduct;
