import { setView } from "../features/view";
import { useAppDispatch } from "./redux/hooks";
import problemTypeView from "../../presentation/ProblemTypeView";
const useToProblemTypeSelection = () => {
  const dispatch = useAppDispatch();
  const handlePress = () => {
    dispatch(setView(problemTypeView));
  };
  return handlePress;
};
export default useToProblemTypeSelection;
