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
            <form id='delProducts' method='post' action="http://localhost/scandiweb-test-task/api/deleteProducts.php">
                <Container id='mainGrid'>
                    <CardBody/>
                    <Footer/>
                </Container>
            </form>
        </>
    )
}

export default Main
