import { Table, Button } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";
import { deleteTaskData } from "../API/courseApi";

const TaskList = ({ coursesData }) => {
  const navigate = useNavigate();
  const handleDelete = (id) => {
    deleteTaskData(id);
    navigate(0);
  };

  return (
    <>
      <Table striped bordered hover variant="light" style={{textAlign:"center"}}>
        <thead>
          <tr>
            <th>Task</th>
            <th>Deadline</th>
            <th>Category</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {coursesData?.map((course) => {
            const { _id, title, deadline , category} = course;
            return (
              <tr key={_id}>
                <td>{title}</td>
                <td>{deadline}</td>
                <td>{category}</td>
                <td>
                {/* <Link to={`/edit/${slug}`} state={course}>
                    Edit
                  </Link> */}
                  <Button variant="success" type="submit"  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button variant="danger" type="submit" onClick={() => handleDelete(_id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default TaskList;
