import React, { useState } from 'react'
import styled from 'styled-components';
import Navigator from '../components/navbar/Nav';
import { Container } from 'react-bootstrap';
import './NewProduct.scss';
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
    const [state,setState] = useState({type: "Select",})
   
    return (
        <>
        <Navigator btnProps/>
        <Container id='newProductSty'>
            <Form id='product-form' method="post" action='http://localhost/scandiweb-test-task/api/addProducts.php'>
                <div id='fm-1'>
                    <label htmlFor="sku">
                        Sku
                        <Input type="text" name="sku" id="sku" required/>
                    </label>
                    <label htmlFor="name">
                        Name
                        <Input type="text" name="name" id="name" required/>
                    </label>
                    <label htmlFor="price">
                        Price
                        <Input type="number" name="price" id="price" step="0.01" required/>
                    </label>
                    <label htmlFor="productType">
                        Type
                        <select
                        value={state.type}
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
                                console.log(e.target.value)}
                            } 
                        name='type' 
                        id='productType'
                        >
                            <option value="Select" defaultValue>
                                Select
                            </option>
                            <option value='dvd-disc'>
                                DVD-disc
                            </option>
                            <option value='book'>
                                Book
                            </option>
                            <option value='furniture'>
                                Furniture
                            </option>
                        </select>  
                    </label>
                </div>
                <div id='fm-2' style={state.type === 'Select' ? {backgroundColor: '#EF476F',width:'90%', textAlign: 'center'} : {}}>
                    {state.type === 'Select' ? (<p style={{color: 'white'}}>Please Select a Product Type</p>) : ''}
                    {
                    (() => {
                        switch (state.type) {
                            case 'book':
                                return (
                                    <label htmlFor="weight">
                                        Weight
                                        <Input type='number' name='weight' id="weight" step="0.1" required/>
                                    </label>
                                )
                            case 'dvd-disc':
                                return (
                                    <label htmlFor="size">
                                        Size
                                        <Input type='number' name='size' id="size" step="0.1" required/>
                                    </label>
                                )
                            case 'furniture':
                                return (
                                    <>
                                        <label htmlFor="width">
                                            Width
                                            <Input type='number' name='width' id="width" step="0.1" required/>
                                        </label>
                                        <label htmlFor="height">
                                            Height
                                            <Input type='number' name='height' id="height" step="0.1" required/>
                                        </label>
                                        <label htmlFor="length">
                                            Length
                                            <Input type='number' name='length' id="length" step="0.1" required/>
                                        </label>
                                    </>
                                )
                            default:
                                break;
                                        
                        }      
                    }
                    )()
                    }
                </div>
                <div className='btn-group'>
                    <Button attr = 'save'/><Button attr = 'can'/>
                </div>
                <Footer/>
            </Form>
        </Container>
        </>
    )  
}

export default NewProduct;