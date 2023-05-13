// import { Button } from 'bootstrap';
import { Table, Container, Button } from "react-bootstrap/";

export function ToDoList() {
  return (
    <Container style={{margin:100}}>
      <h1 style={{margin:100, textAlign:"center"}}>Make Your To Do List!!</h1>
      <Button style={{marginBottom:50}}>ADD NEW TASK</Button>
      <Table striped >
        <tbody>
          <tr>
            <td>1</td>
            <td>Markkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</td>
            <td>
              <Button>Edit</Button>
            </td>
            <td>
              <Button>Delete</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mark</td>
            <td>
              <Button>Edit</Button>
            </td>
            <td>
              <Button>Delete</Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>
              <Button>Edit</Button>
            </td>
            <td>
              <Button>Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
