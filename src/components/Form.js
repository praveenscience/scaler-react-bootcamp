import FormGroup from "./Bootstrap/FormGroup";

const Form = ({ FormData }) => {
  return (
    <div className="Form">
      {Object.keys(FormData).map(fd => (
        <FormGroup key={fd} Label={fd} />
      ))}
    </div>
  );
};

export default Form;
