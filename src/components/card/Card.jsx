import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'

const Check = styled.input`
    border: none;
    border-radius: 1em;
`

function CardBody() {


    return (
        <Card className='' style={{color: 'white',backgroundColor: '#EF476F', border: 'solid 5px #EF476F'}}>
            <Card.Body>
            Card Test
            </Card.Body>
        </Card>
    )
}

export default CardBody
