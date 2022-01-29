import React, { useState } from 'react'
import styled from 'styled-components';
import Navigator from '../components/navbar/Nav';
import { Container } from 'react-bootstrap';
import './NewProduct.scss';
//import axios from 'axios';
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
            select{
                background-color: #EF476F;
                color: white;
                border: none;
                padding: .5em 1.5em;
                cursor: pointer;

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
            type: {
                dvd_disc: {
                    name: "DVD-disc",
                    size: "",
                },
                book: {
                    name: "Book",
                    weight: ""
                },
                forniture: {
                    name: "Forniture",
                    dimentions: {
                        width: "",
                        height: "",
                        length: ""
                    }
                }
            },
            selectValue: "Select",
            dataSend: "",
            error: null
        })
    
    /*onSubmit(event){
        try{
            event.preventDefault();
            console.log(this.state);
            const API_PATH = process.env.API_PATH;
            axios({
                method:'post',
                url: API_PATH,
                headers: {
                    'content-type': 'application/json'
                },
                data: this.state
            })
            .then(result => {
                console.log(result.data)
                this.setState({
                    dataSend: result.data.send,
                })
                console.log(this.state)
            })
            .catch(e => this.setState({
                error: e.message
            }));
        } catch(e){
            console.log(e.message)
        }

    }*/
    
        
   
    return (
        <>
        <Navigator btnProps/>
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
                                            selectValue: e.target.value 
                                        }
                                    }
                                )
                                console.log(e.target.value)}} name='types' id='productType'>
                            <option 
                            value="Select"
                            >
                                Select
                            </option>
                            <option 
                            value={state.type.dvd_disc.name}
                            >
                                {state.type.dvd_disc.name}
                            </option>
                            <option 
                            value={state.type.book.name}
                            >
                                {state.type.book.name}
                            </option>
                            <option 
                            value={state.type.forniture.name}
                            >
                                {state.type.forniture.name}
                            </option>
                        </select>  
                    </label>
                </div>
                <div id='fm-2' style={state.selectValue === 'Select' ? {backgroundColor: '#EF476F',width:'90%', textAlign: 'center'} : {}}>
                    {state.selectValue === 'Select' ? (<p style={{color: 'white'}}>Please Select a Product Type</p>) : ''}
                    {
                        state.selectValue === 'DVD-disc' 
                        ? (
                        <label>
                            Size
                            <Input 
                            type='number' 
                            value={state.type.dvd_disc.size} 
                            onChange={
                                e => {
                                    setState(
                                        prevState => {
                                            return{
                                                ...prevState,
                                                type: {
                                                    ...prevState.type,
                                                    dvd_disc:{
                                                        ...prevState.type.dvd_disc,
                                                        size: e.target.value
                                                    }
                                                }
                                            }
                                        }
                                    )
                                    console.log(state.type.dvd_disc.size)
                                }
                            }/>
                        </label>)
                        : state.selectValue === 'Book' 
                        ? (
                        <label>
                            Weight
                            <Input 
                            type='number' 
                            value={state.type.book.weight}
                            onChange={
                                e => {
                                    setState(
                                        prevState => {
                                            return {
                                                ...prevState,
                                                type: {
                                                    ...prevState.type,
                                                    book:{
                                                        ...prevState.type.book,
                                                        weight: e.target.value
                                                    }
                                                }
                                            }
                                        }
                                    )
                                    console.log(`${state.type.book.weight}Kg`)
                                }
                            }/>
                        </label>)
                        : state.selectValue === 'Forniture' 
                        ? (
                        <label>
                            Width
                            <Input 
                            type='number' 
                            value={state.type.forniture.dimentions.width} 
                            onChange={ 
                                e => {
                                    setState(
                                        prevState => {
                                            return{
                                                ...prevState,
                                                type: {
                                                    ...prevState.type, 
                                                    forniture: {
                                                        ...prevState.type.forniture,
                                                        dimentions:{
                                                            ...prevState.type.forniture.dimentions,
                                                            width: e.target.value
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    );
                                    console.log(state.type.forniture.dimentions.width)
                                }
                            }
                            />
                        </label>)
                        : ('')
                    }
                    {
                        state.selectValue === 'Forniture' 
                        ? (
                        <label>
                            Height
                            <Input 
                            type='number' 
                            value={state.type.forniture.dimentions.height}  
                            onChange={ 
                                e => {
                                    setState(
                                        prevState => {
                                            return{
                                                ...prevState,
                                                type: {
                                                    ...prevState.type,
                                                    forniture: {
                                                        ...prevState.type.forniture,
                                                        dimentions:{
                                                            ...prevState.type.forniture.dimentions,
                                                            height: e.target.value
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    ); 
                                    console.log(state.type.forniture.dimentions.height)
                                }
                            }
                            />
                        </label>)
                        : ''
                    }
                    {
                        state.selectValue === 'Forniture' 
                        ? (
                        <label>
                            Length
                            <Input 
                            type='number' 
                            value={state.type.forniture.dimentions.length}  
                            onChange={ 
                                e => {
                                    setState(
                                        prevState => {
                                            return{
                                                ...prevState,
                                                type: {
                                                    ...prevState.type,
                                                    forniture: {
                                                        ...prevState.type.forniture,
                                                        dimentions:{
                                                            ...prevState.type.forniture.dimentions,
                                                            length: e.target.value
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    ); 
                                    console.log(state.type.forniture.dimentions.length)
                                }
                            }
                            />
                        </label>)
                        : ''
                    }
                </div>
                <div className='btn-group'>
                    <Button attr = 'save'/><Button attr = 'can'/>
                </div>
            </Form>
            <Footer/>
        </Container>
        </>
    )  
}

export default NewProduct;
