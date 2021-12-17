import { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Buttons from "../reusable/Button";
import { useDispatch, useSelector } from "react-redux";
import { Delete_User, Get_User } from "../state/Actions";
import Notif from "../reusable/Notification";

const CRUD = () => {
  const history = useHistory();
  const state = useSelector((state) => state.Reducer);
  const alerts = useSelector((state) => state.Alerts);
  const dispatch = useDispatch();
  const { item } = state;
  useEffect(() => {
    dispatch(Get_User());
  }, [dispatch]);

  const deleteUser = (id) => {
    dispatch(Delete_User(id));
  };

  const editUser = (query) => {
    dispatch({ type: "send_data_form", payload: query });
    history.push("/create");
  };

  return (
    <Container className="mt-4">
      {alerts.notif && (
        <Notif variant="info" message="Success action item"></Notif>
      )}
      <div className="crud_page">
        <h2 className="mb-4">DATA-USER</h2>
        <Link to="/create">
          <Buttons variant="primary" title="Create User" />
        </Link>
        <Table className="mt-3" responsive="sm">
          <thead>
            <tr className="text-center">
              <th>NO</th>
              <th>Name</th>
              <th>Email</th>
              <th>noHp</th>
              <th>Company</th>
              <th>Income</th>
              <th>Expense</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {item &&
              item.map((items, keys) => {
                return (
                  <tr className="text-center" key={keys}>
                    <td style={{ height: "30px", lineHeight: "30px" }}>
                      {(keys += 1)}
                    </td>
                    <td style={{ height: "30px", lineHeight: "30px" }}>
                      {items.name}
                    </td>
                    <td style={{ height: "30px", lineHeight: "30px" }}>
                      {items.email}
                    </td>
                    <td style={{ height: "30px", lineHeight: "30px" }}>
                      {items.noHp}
                    </td>
                    <td style={{ height: "30px", lineHeight: "30px" }}>
                      {items.company}
                    </td>
                    <td style={{ height: "30px", lineHeight: "30px" }}>
                      {items.income}
                    </td>
                    <td style={{ height: "30px", lineHeight: "30px" }}>
                      {items.expense}
                    </td>
                    <td style={{ height: "30px", lineHeight: "30px" }}>
                      <Buttons
                        onClick={() => deleteUser(items._id)}
                        style={{ marginRight: "10px" }}
                        variant="danger"
                        title="Delete"
                      />
                      <Buttons
                        onClick={() => editUser(items)}
                        variant="success"
                        title="Edit"
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default CRUD;
