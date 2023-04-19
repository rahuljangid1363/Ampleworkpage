import { Button } from "react-bootstrap";

const InquireNow = (props) => {
    const {variant}=props;
  return (
    <>
      <Button variant={variant} className="rounded-pill fw-semibold text-uppercase">
        explore more
      </Button>
    </>
  );
};
export default InquireNow;
