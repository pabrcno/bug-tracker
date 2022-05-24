import { toggleCheckbox } from "../features/newProblem";
import { useAppDispatch } from "./redux/hooks";

const useToggleCheckbox = () => {
  const dispatch = useAppDispatch();
  const handlePress = () => {
    dispatch(toggleCheckbox());
  };
  return handlePress;
};
export default useToggleCheckbox;
