import { Form, Button } from 'react-bootstrap';
import { EmployeeContext } from '../context/EmployeeContext';
import { useContext, useState } from 'react';




const EditForm = ({theEmployee}) => {

    const { updateEmployee } = useContext(EmployeeContext);

    const employee = theEmployee
    const id = employee.id

    const [name,SetName] = useState(employee.name);
    const [email,SetEmail] = useState(employee.email);  
    const [address,SetAddress] = useState(employee.address);
    const [phone,SetPhone] = useState(employee.phone);
    
    const updatedEmployee = {id, name, email, address, phone};

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id,updatedEmployee);
    }


 

    return (
        <Form onSubmit={handleSubmit}> 
            <Form.Group>
                <Form.Control
                    type="Text"
                    name="name"
                    placeholder="Name *"
                   value={name}
                   onChange={(e) => SetName(e.target.value)}
                    required
                />


            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={email}
                    required
                    onChange={(e) => SetEmail(e.target.value)}
                />


            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    name="address"
                    placeholder="Address "
                    value={address}
                    rows={3}
                    onChange={(e) => SetAddress(e.target.value)}
                />


            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="Text"
                    name="phone"
                    placeholder="Phone *"
                    value={phone}
                    onChange={(e) => SetPhone(e.target.value)}

                />


            </Form.Group>
            <Button variant="success" type="submit" block>
               Edit Employee
            </Button>

        </Form>

    )



}

export default EditForm