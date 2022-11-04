import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <Container className={classes.container}>
      <Form className="mb-5">
        <Row>
          <Col>
            <h2>Contact Me</h2>
            <p>
              Hi there, contact me to ask me about anything you have in mind.
            </p>
          </Col>
        </Row>

        <Row>
          <Form.Group as={Col} sm={6} className="mb-3" controlId="first_name">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="input" placeholder="Enter your first name" />
          </Form.Group>

          <Form.Group as={Col} sm={6} className="mb-3" controlId="last_name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="input" placeholder="Enter your last name" />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="yourname@email.com"
            ></Form.Control>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Send me a text message and I'll reply you as soon as possible"
            ></Form.Control>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              id="consent"
              label="You agree to providing your data to Praise who may contact you."
            />
          </Form.Group>
        </Row>

        <Row>
          <Button variant="primary" type="submit" id="btn__submit">
            Send Message
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default ContactForm;
