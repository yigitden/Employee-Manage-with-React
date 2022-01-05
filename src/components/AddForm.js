import { Form, Button} from 'react-bootstrap';
import { EmployeeContext } from '../context/EmployeeContext';
import { useContext, useState } from 'react';




const AddForm = () => {

    const { addEmployee } = useContext(EmployeeContext);

 
    const [newEmployee, setNewEmployee] = useState({
        name:"", email:"", address: "", phone: ""
    })

    const {name, email, address, phone } = newEmployee;


    const onInputChange = (e) => {
        setNewEmployee({...newEmployee, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name, email, address, phone)
    }
    
 

    return (
        <Form onSubmit={handleSubmit}> 
            <Form.Group>
                <Form.Control
                    type="Text"
                    name="name"
                    placeholder="Name *"
                    onChange={(e)=>onInputChange(e)}
                    required
                />


            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email *"
                    onChange={(e)=>onInputChange(e)}
                    required
                />


            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    name="address"
                    placeholder="Address "
                    onChange={(e)=>onInputChange(e)}
                    rows={3}
                />


            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="Text"
                    name="phone"
                    placeholder="Phone *"
                    onChange={(e)=>onInputChange(e)}

                />


            </Form.Group>
            <Button variant="success" type="submit" block>
                Add New Employee
            </Button>

        </Form>

    )



}

export default AddForm