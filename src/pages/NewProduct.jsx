import React, { Component } from 'react'
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import './NewProduct.scss';
import axios from 'axios';
import Button from '../components/navbar/Button';

const Form = styled.form`
    display: inline-grid;
    grid-template-columns: 50% 50%;
    justify-items: center;
    width: 100%;

    #btn-mobile{
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
            input{
                border: solid 3px #EF476F;
                
            }
            input:focus{
                outline: none;
            }
            input,select{
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
                
            }
        }
    }
    @media only screen and (max-width: 766px) {
        grid-template-columns: 100%;
        grid-template-rows: 600px 600px;
    
    }
   
`
class NewProduct extends Component {
    constructor(){
        super();
        this.state = {
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
                        lenght: ""
                    }
                }
            },
            dataSend: "",
            error: null
        }
    }
    onSubmit(event){
        event.preventDefault();
        console.log(this.state);
        const API_PATH = 'http://localhost/scandiweb-test-task/api/data/index.php';
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
                dataSent: result.data.sent,
            })
            console.log(this.state)
        })
        .catch(error => this.setState({
            error: error.message
        }));

        }
        
    render(){
        return (
            <Container id='newProductSty'>
                <Form method="post">
                    <div id='fm-1'>
                        <label>
                            Sku
                            <input type="text" value={this.state.sku} onChange={ e => { this.setState({ sku: e.target.value })}}  name="sku" id="sku" />
                        </label>
                        <label>
                            Name
                            <input type="text" value={this.state.name} onChange={ e => { this.setState({ name: e.target.value })}}  name="name" id="name" />
                        </label>
                        <label>
                            Price
                            <input type="number" value={this.state.price} onChange={ e => { this.setState({ price: e.target.value })}} name="price" id="price" />
                        </label>
                        <label>
                            Types
                            <select onChange={e => { this.setState({})}} name='types' id='productType'>
                                <option 
                                value="select"
                                >
                                    Select
                                </option>
                                <option 
                                value={this.state.type.dvd_disc.name}
                                >
                                    {this.state.type.dvd_disc.name}
                                </option>
                                <option value={this.state.type.book.name}>{this.state.type.book.name}</option>
                                <option value={this.state.type.forniture.name}>{this.state.type.forniture.name}</option>
                            </select>  
                        </label>
                    </div>
                    <div id='fm-2'>
                        <label>
                            Size
                            <input 
                            type="number" 
                            value={this.state.type.dvd_disc.size} 
                            onChange={ e => {
                                this.setState( prevState => {
                                    let type = Object.assign({}, prevState.type);
                                    type.dvd_disc.size = e.target.value;
                                    return type;
                            })}}
                            name="size" 
                            id="price"
                            />
                        </label>
                    </div>
                    <div id='btn-mobile'>
                    <Button/><Button del/>
                    </div>
                </Form>
            </Container>
        )
    }
}

export default NewProduct;
