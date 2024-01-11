// ContactPage.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiMail, FiPhone } from 'react-icons/fi';
import './ContactPage.css'; // Import your custom stylesheet

const ContactPage = () => {
  return (
    <Container className="mt-5 fancy-contact-container">
      <Row className="justify-content-center">
        <Col className="text-center">
          <h1 className="display-4 fancy-heading">Get in Touch</h1>
          <p className="sub-heading">I will love to hear from you!</p>
        </Col>
      </Row>
      <Row className="mt-4 justify-content-center">
        <Col className="text-center">
          <h3>Emails</h3>
          <p>
            <a href="mailto:jazibahmad1010@gmail.com" className="email-link">
              <FiMail className="icon" /> jazibahmad1010@gmail.com
            </a>
          </p>
          <p>
            <a href="mailto:jz346475@dal.ca" className="email-link" >
              <FiMail className="icon" /> jz346475@dal.ca
            </a>
          </p>
        </Col>
        <Col className="text-center">
          <h3>Phone</h3>
          <p>
            <a className="email-link" >
              <FiPhone className="icon" /> +1-782-414-3561
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
