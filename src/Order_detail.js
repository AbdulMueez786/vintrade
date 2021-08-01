import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card,Button,Table,ListGroup,InputGroup,FormControl,DropdownButton,ProgressBar,Dropdown} from 'react-bootstrap';
function Order_detail() {
    const history=useHistory();
    const b=()=>{
        history.push("/order_history");
     }
    return (
        <div>
            <Card className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Abdul Mueez</Card.Title>
    <Card.Text>
      Address: Sharqui Colony Vehari
    </Card.Text>
    <Card.Text>
    Total Price: 500$
    </Card.Text>
    <ListGroup>
    <Card.Title>Items</Card.Title>
 
  <div>
      <ul>
      <li>
  Antique book</li>
  <li>1931-FORD
    </li>
  </ul>
  </div>
  
</ListGroup>
    <Button onClick={b} variant="primary">Back </Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
        </div>
    )
}

export default Order_detail
