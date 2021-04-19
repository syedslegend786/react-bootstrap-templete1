import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
//
import '../Mycss/Footer.css';
//
import { FaAngleDoubleRight } from 'react-icons/fa'
function Footer() {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col md={4} sm={4} xs={6}>
                        <h4 className='footer__header'>About Company</h4>
                        <p style={{ marginTop: '5px' }}> The href attribute requires a valid value to be accessible. Provide a valid,
                        navigable address as the href value.
                             If you cannot provide a valid href, but still need the element to resemble a link</p>
                    </Col>
                    <Col md={4} sm={4} xs={6}>
                        <h4 className='footer__header'>Latest News</h4>
                        <ul className='footer__ul' style={{
                            marginTop: '5px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            padding: 0

                        }}>
                            <li><a href='#'>About Our Company<FaAngleDoubleRight /></a></li>
                            <li><a href='#'>Amazone New Products<FaAngleDoubleRight /></a></li>
                            <li><a href='#'>Firebase new Products<FaAngleDoubleRight /></a></li>
                        </ul>
                    </Col>
                    <Col md={4} sm={4} xs={6}>
                        <h4 className='footer__header'>Address</h4>
                        <address>
                            Gmail: syedslegend786@gmail.com
                            M-Block Arifwala <br />
                            +923410411465
                        </address>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
