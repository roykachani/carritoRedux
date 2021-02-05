import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  const search = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Row className="mt-4 mb-4">
        <Col>
          <Form onSubmit={search}>
            <Form.Group>
              <Form.Control placeholder="busca tu producto" />
            </Form.Group>
            <Button type="submit">buscar</Button>
          </Form>
        </Col>
        <Col>
          <Link to="/">
            <Button variant="light" type="button">
              Home
            </Button>
          </Link>
          <Link to="/shoppingCart">
            <Button variant="light" type="button" className="ml-2">
              carrito
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
