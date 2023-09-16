import { Button, Spinner } from "react-bootstrap";

function ButtonWithLoading({
  variant = "primary",
  type = "submit",
  loading,
  children,
}) {
  return (
    /* */
    <Button className="mb-3" type={type} variant={variant} disabled={loading}>
      {loading && <Spinner animation="grow" size="sm" />}
      {children}
    </Button>
  );
}
export default ButtonWithLoading;
