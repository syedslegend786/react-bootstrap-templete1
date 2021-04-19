import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import '../Mycss/Section.css';
//
import { FaRegCalendarAlt } from 'react-icons/fa';
function News() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} className='text-center section__heading mt-3'>
                        <h1 className='lead'>News Section</h1>
                    </Col>
                    <Col md={3} sm={6} className='mb-sm-5 news__card' xs={6}>
                        <img width='100%' heigh='100p%' src='/images/bus1.jpg' alt='' />
                        <h1 className='lead font-weight-bold'>New Heading</h1>
                        <p className=' mt-1'><FaRegCalendarAlt className='mt-n1' /> May 19,2021</p>
                        <p> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href</p>
                        <Button>Read more</Button>
                    </Col>
                    <Col md={3} sm={6} className='mb-sm-5 news__card' xs={6}>
                        <img width='100%' heigh='100p%' src='/images/bus2.jpg' alt='' />
                        <h1 className='lead font-weight-bold'>New Heading</h1>
                        <p className=' mt-1'><FaRegCalendarAlt className='mt-n1' /> May 19,2021</p>
                        <p> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href</p>
                        <Button>Read more</Button>
                    </Col>
                    <Col md={3} sm={6} className='mb-sm-5 news__card' xs={6}>
                        <img width='100%' heigh='100p%' src='/images/bus3.jpg' alt='' />
                        <h1 className='lead font-weight-bold'>New Heading</h1>
                        <p className=' mt-1'><FaRegCalendarAlt className='mt-n1' /> May 19,2021</p>
                        <p> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href</p>
                        <Button>Read more</Button>
                    </Col>
                    <Col md={3} sm={6} className='mb-sm-5 news__card' xs={6}>
                        <img width='100%' heigh='100p%' src='/images/bus4.jpg' alt='' />
                        <h1 className='lead font-weight-bold'>New Heading</h1>
                        <p className=' mt-1'><FaRegCalendarAlt className='mt-n1' /> May 19,2021</p>
                        <p> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href</p>
                        <Button className='m-auto'>Read more</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default News
