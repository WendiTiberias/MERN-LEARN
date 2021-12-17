import { Alert } from "react-bootstrap";
import Buttons from "./Button";
import { useDispatch } from "react-redux";
const Notif = ({ message, ...rest }) => {
  const dispatch = useDispatch();
  return (
    <Alert
      className="d-flex justify-content-between align-items-center"
      {...rest}
    >
      {message}
      <Buttons
        onClick={() => dispatch({ type: "close_form" })}
        variant="danger"
        title="close"
      ></Buttons>
    </Alert>
  );
};

export default Notif;
