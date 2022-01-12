import React from 'react'
import Navigator from '../components/navbar/Nav'
import { Container } from 'react-bootstrap'
import CardBody from '../components/card/Card'

function Main() {
    return (
        <>
            <Navigator /> 
            <Container style={{minHeight: '70vh', padding: '2em 0'}}>
                <CardBody/>
            </Container>
        </>
    )
}

export default Main
