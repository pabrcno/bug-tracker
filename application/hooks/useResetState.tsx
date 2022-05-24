import newProblemView from "../../presentation/NewProblemView";
import { reset as resetNp } from "../features/newProblem";
import { reset as resetPt } from "../features/problemType";
import { reset as resetView, setView } from "../features/view";
import { useAppDispatch } from "./redux/hooks";

const useResetState = () => {
  const dispatch = useAppDispatch();

  const resetState = () => {
    dispatch(resetPt());
    dispatch(setView(newProblemView));
    dispatch(resetNp());
  };

  return resetState;
};
export default useResetState;
