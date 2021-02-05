import { connect } from 'react-redux';
import { Container, Table } from 'react-bootstrap';

const Total = ({ carry }) => {
  const counter = (count, numb) => count + numb;
  const multiProd = (item) => item.price * item.quantity;
  let total = carry.carry.map(multiProd).reduce(counter, 0);

  return (
    <Container>
      <h3>
        {total !== 0
          ? `Total de tu carrito: $ ${total}`
          : 'Tu carrito esta vacío'}
      </h3>

      <Table responsive="sm" className="mt-5">
        <thead>
          <tr>
            <th>N° ID</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {carry.carry.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.product}</td>
              <td>{item.quantity}</td>
              <td>$ {item.quantity * item.price}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td style={{ fontWeight: 'bold' }}>Total</td>
            <td style={{ fontWeight: 'bold' }}>$ {total} ARS.</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Total);
