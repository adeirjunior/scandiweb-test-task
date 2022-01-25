import React from 'react';
import Navigator from '../components/navbar/Nav';
import { Container } from 'react-bootstrap'
import CardBody from '../components/card/Card';
import './Main.scss';

function Main() {
    return (
        <>
            <Navigator/>
            <Container id='mainGrid'>
                <CardBody/>
                <CardBody/>
                <CardBody/>
                <CardBody/>
                <CardBody/>
                <CardBody/>
                <CardBody/>
                <CardBody/>
                <CardBody/>
                <CardBody/>
                <CardBody/>
                <CardBody/>
                <CardBody/>
                <CardBody/>
                <CardBody/>
                <CardBody/>
            </Container>
        </>
    )
}

export default Main
