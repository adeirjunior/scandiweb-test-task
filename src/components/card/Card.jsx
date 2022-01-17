import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'

const Check = styled.input`
    border: none;
    border-radius: 1em;
`

function CardBody() {


    return (
        <Card style={{color: 'white',backgroundColor: '#EF476F', border: 'solid 5px #EF476F', marginBottom: '1em'}}>
            <Check type='checkbox'/>
            <Card.Body>
            Card Test
            </Card.Body>
        </Card>
    )
}

export default CardBody
