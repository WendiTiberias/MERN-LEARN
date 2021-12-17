import { Form } from "react-bootstrap";

const Input = ({ title, types, ...rest }) => {
  return <Form.Control {...rest} placeholder={title} type={types} />;
};

export default Input;
