import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../Mycss/Section.css';
function Testimonials() {
    return (
        <div className='test' style={{
            backgroundImage: `url(/images/backtest.jpg)`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
        }}>
            <Container>
                <Row>
                    <Col xs={12} className='text-center section__heading mt-3'>
                        <h1 className='lead'>Testimonial</h1>
                    </Col>
                    <Col className='text-center text-light' md={6}>
                        <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href</p>
                        <img style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%'

                        }} src='/images/celebrety1.jpg' alt='' />
                        <p>Antheny Johns</p>
                        <p>Microsoft</p>
                    </Col>
                    <Col className='text-center text-light ' md={6}>
                        <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href</p>
                        <img style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%'
                        }} src='/images/celebrety2.jpg' alt='' />
                        <p>Syed Salleh Shah</p>
                        <p>Pakistan</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonials
