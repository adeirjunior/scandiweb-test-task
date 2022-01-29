import React from 'react';
import Navigator from '../components/navbar/Nav';
import { Container } from 'react-bootstrap'
import CardBody from '../components/card/Card';
import './Main.scss';
import Footer from '../components/Footer';

function Main() {
    return (
        <>
            <Navigator/>
            <Container id='mainGrid'>
            <CardBody/>
            <Footer/>
            </Container>
        </>
    )
}

export default Main
