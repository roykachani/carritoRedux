import { connect } from 'react-redux';
import { Row, Col, Button, Form } from 'react-bootstrap';

const Products = ({ product, image, id, price, description, dispatch }) => {
  const addToCarry = (e) => {
    e.preventDefault();
    const [{ value }] = e.target;
    const obj = {
      id: id,
      product: product,
      description: description,
      price: price,
      quantity: parseInt(value),
    };
    console.log(obj);
    dispatch({ type: 'ADD_TO_CARRY', payload: obj });
    alert(`Agregaste a tu carrito ${product} x ${value} unidades `);
  };

  return (
    <Row md={9} style={{ width: '650px', height: '320px', margin: '10px 0px' }}>
      <Col md={4}>
        <img src={image} style={{ width: '150px', height: '150px' }} />
      </Col>
      <Col md={8}>
        <h2>{product}</h2>
        <p>{description}</p>
        <p>${price}</p>
      </Col>
      <Col>
        <Form onSubmit={addToCarry}>
          <Form.Group>
            <Form.Control
              type="number"
              placeholder="0"
              style={{ width: '60px', display: 'inline' }}
            />
          </Form.Group>
          <Button type="submit">Agregar carrito</Button>
        </Form>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Products);
