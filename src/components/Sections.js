import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../Mycss/Section.css';
import { FaAtlassian, FaChartBar, FaCity } from 'react-icons/fa';
function Sections() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} className='text-center section__heading'>
                        <h1 className='lead'>Som Heading</h1>
                    </Col>
                    <Col className='text-center' md={4}>
                        <FaChartBar style={{
                            color: '#E74C3C',
                            fontSize: '70px',
                            marginBottom: '15px',
                        }} />
                        <h1>Some Heading</h1>
                        <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link</p>
                    </Col>
                    <Col className='text-center' md={4}>
                        <FaAtlassian style={{
                            color: '#E74C3C',
                            fontSize: '70px',
                            marginBottom: '15px',
                        }} />
                        <h1>Some Heading</h1>
                        <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link</p>
                    </Col>
                    <Col className='text-center' md={4}>
                        <FaCity style={{
                            color: '#E74C3C',
                            fontSize: '70px',
                            marginBottom: '15px',
                        }} />
                        <h1>Some Heading</h1>
                        <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Sections
