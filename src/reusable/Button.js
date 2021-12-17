import { Button } from "react-bootstrap";

const Buttons = ({ title, variant, ...rest }) => {
  return (
    <Button {...rest} variant={variant}>
      {title}
    </Button>
  );
};

export default Buttons;
