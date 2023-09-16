import { Form } from "react-bootstrap";

function FormInput({
  label,
  type = "text",
  name,
  register,
  placeholder,
  errors,
  children,
  disabled = false
}) {

  const style = {
    input: {
      width: "300px"
    } 
  }

  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        className={style.input}
        type={type}
        placeholder={placeholder}
        {...register}
        disabled={disabled}
      />
      {errors && errors[name]?.type === "required" && (
        <Form.Text className="text-muted">El campo es obligatorio</Form.Text>
      )}
      {children && children}
    </Form.Group>
  );
}

export default FormInput;
