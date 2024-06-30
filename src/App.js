import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Users from './components/Users';
import Books from './components/Books';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Users />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Books />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
