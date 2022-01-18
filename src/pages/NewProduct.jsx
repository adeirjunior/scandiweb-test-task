import React, { Component } from 'react'
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import './NewProduct.scss';
import axios from 'axios';

const Form = styled.form`
    display: inline-grid;
    grid-template-columns: 50% 50%;
    justify-items: center;
    width: 100%;


    div{
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


            input{
                border: solid 3px #EF476F;
                
            }
            input,select{
                margin-left: 3em;
                border-radius: .5em;
            }
            select{
                background-color: #EF476F;
                color: white;
                border: none;
                padding: .5em 1.5em;

                option{
                    border: none;
                }
            }
        }
    }
`
class NewProduct extends Component {
    constructor(){
        super();
        this.state = {
            sku: "",
            name: "",
            price: 2352,
            type: [],
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
                <Form action="" method="post">
                    <div>
                        <label>
                            Sku:
                            <input type="text" value={this.state.sku}  name="sku" id="sku" />
                        </label>
                        <label>
                            Name:
                            <input type="text" value={this.state.name}  name="name" id="name" />
                        </label>
                        <label>
                            Price:
                            <input type="text" value={this.state.price} name="price" id="price" />
                        </label>
                        <label>
                            Types:
                        <div>
                            <select name='types' id='productType'>
                                <option value="select">Select</option>
                                <option value="dvd-disc">DVD-disc</option>
                                <option value="book">Book</option>
                                <option value="Furniture">Furniture</option>
                            </select>  
                            <span></span>
                            <span></span> 
                        </div>
                        </label>
                    </div>
                    
                </Form>
            </Container>
        )
    }
}

export default NewProduct
