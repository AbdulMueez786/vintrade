import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Table,ListGroup,InputGroup,FormControl,DropdownButton,ProgressBar,Dropdown} from 'react-bootstrap';
function OrderHistory() {
    const history=useHistory();
    const b=()=>{
        history.push("/order_detail");
     }
    return (
        <div>
            
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Order#</th>
      <th>Name</th>
      <th>Address</th>
      <th>Total Payment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td  onClick={b}>100</td>
      <td>Abdul Mueez  </td>
      <td>9/N Sharqui Colony Vehari
      </td>
      <td>500$ <div ><button onClick={b}>detail</button>  </div></td>
    </tr>
    <tr>
      <td>101</td>
      <td>Armughan Aslam</td>
      <td>Bharia Town ISB</td>
      <td>800$ <div ><button >detail</button>  </div></td>
    </tr>
    <tr>
      <td>102</td>
      <td colSpan="1">Saad Mushtaq</td>
      <td>Vehari</td> 
      <td>500$<div ><button >detail</button>  </div></td>
    </tr>
    <tr>
      <td>103</td>
      <td>Haziq Ali</td>
      <td>Shariqui Colony Vehari </td>
      <td>1000$<div ><button >detail</button>  </div></td>
    </tr>
    <tr>
      <td>104</td>
      <td>Ziad Bashire</td>
      <td>Askri Ten Lahore</td>
      <td>800$<div ><button >detail</button>  </div></td>
    </tr>
    <tr>
      <td>105</td>
      <td colSpan="1">Abeer Fiaz</td>
      <td>Lahore</td>
      <td>700$<div ><button >detail</button>  </div></td>
    </tr>
  </tbody>
</Table>

             </div>
    )
}

export default OrderHistory
