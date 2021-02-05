import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import { products } from '../../products.json';
import Product from './../../Page/Poducts';

const List = () => {
  return (
    <>
      <Container>
        <h3>Productos</h3>
        <Row>
          {products.map((product) => (
            <Product key={product.product} {...product} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default List;
