import './App.css';
import React from 'react';
/* bootstrap CSS file, Card and Badge*/
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
/* import our component */
import ProductName from './components/Name'
import ProductImg from './components/Image';
import ProductPrice from './components/Price';
import ProductDescription from './components/Description';

/* user name variable try to swich betwen them */
let username = "Sekrafi Abdallah";
//let username = "";
function App() {
  return (
    <div style={{ margin: "20px 20px" }}>
      <Card border='success' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ProductImg()} />
        <Card.Body>
          <Card.Title>{ProductName()}</Card.Title> {/* w cant do  <ProductName/> */}
          <Card.Text>{ProductDescription()}</Card.Text> {/* w cant do  <ProductDescription/> */}
          <h5>
            <Badge bg="secondary">{ProductPrice()}</Badge> {/* w cant do  <ProductPrice/> */}
          </h5>
        </Card.Body>
      </Card>
      <div>
        {
          username ?
            /* if username is provided */
            <div>
              <h2>Hello {username}</h2>
              <img src='https://img.freepik.com/free-vector/like-icon-3d-vector-illustration-heart-symbol-red-bubble-social-media-applications-cartoon-style-isolated-white-background-online-communication-digital-marketing-concept_778687-1695.jpg?w=740&t=st=1695371746~exp=1695372346~hmac=7f69584978f749cdd56deae3e2deefcbd7d5d741ad285e8cd69eb8e14a70dd67' width="200" height="200" alt='simple like' />
            </div>
            /* if username is not provided */
            : <h2>Hello there!</h2>
        }
      </div>
    </div>
  );
}

export default App;
