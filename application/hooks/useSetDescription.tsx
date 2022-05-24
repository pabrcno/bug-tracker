import { setDescription } from "../features/newProblem";
import { useAppDispatch } from "./redux/hooks";

const validateDescription = (description: string) => {
  return String(description).trim().length > 10;
};
const useSetDescription = () => {
  const dispatcher = useAppDispatch();
  const handleChange = (description: string) => {
    if (validateDescription(description)) {
      dispatcher(setDescription(description));
    }
  };
  return handleChange;
};

export default useSetDescription;
