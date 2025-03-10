import { useParams } from "react-router";
import { Form } from "../components/Form";

const EditTask = () => {
  const params = useParams<{ id: string }>();
  return <Form id={params.id ?? ""} />;
};

export default EditTask;
