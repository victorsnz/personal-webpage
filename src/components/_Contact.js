import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Axios from 'axios';
import Content from './Content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            message:"",
            disabled: false,
            emailSent: null
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true
        });

        Axios.post('http://localhost:3000/API/email', this.state)
            .then(res => {
                if(res.data.success){
                this.setState({
                    disabled: false,
                    emailSent: true
                });
            }else{
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            }
            })
            .catch(err => {
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })
    }

    render(){
        return(
            <div> 
                <h1 className="my-title"><span style={{color:"white"}}>Let's Talk!</span></h1>
                    <Container className="my-contact">
                        <Row>
                            <Col md={4} id={"envelope-container"}>
                                <FontAwesomeIcon id={"envelope"} icon={["far", "envelope"]} size={"10x"} title={"Visit my Twitter profile"}/>

                            </Col>
                            <Col md={8}>
                    <Content>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label htmlFor="full-name">Full Name</Form.Label>
                                <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="email">Email</Form.Label>
                                <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="message">Message</Form.Label>
                                <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange} />
                            </Form.Group>                            
                            <Button id={"form-btn"} variant="primary" type="submit" disabled={this.state.disabled}>
                                Send
                            </Button>

                            {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                            {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}                                                
                        </Form>
                    </Content>
                    </Col>
                    </Row>
                    </Container>
            </div>
        );
    }
}

export default Contact;