import React from 'react'
import {data} from './data'
import {Container, Col, Row, Image} from 'react-bootstrap'
import SimonFareed from './img/SimonFareed.jpg'

const Data = data;

const List = () => {
    return (
        <Container>
            {Data.map((data, key) => {
                return (
                            <Container key={key} className>
                                    <Col xs={9}>
                                        <Image src={SimonFareed} fluid thumbnail className='img'></Image>
                                    </Col>
                                    <Col xs={3}>
                                        <Row>
                                            <h3 className='nomarge'>Name: {data.name}</h3>
                                        </Row>
                                        <Row>
                                            <h4 className='nomarge'>Age: {data.Age}</h4>
                                        </Row>
                                        <Row>
                                            <p className='nomarge marge-bottom'>Fun Fact: {data.Fun_Fact}</p>
                                        </Row>
                                    </Col>
                            </Container>
                )
            })}
        </Container>
    )
}

export default List;