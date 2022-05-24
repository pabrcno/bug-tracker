import { setSelectedProblemType } from "../features/problemType";
import { useAppDispatch } from "./redux/hooks";
import ProblemType from "../../domain/ProblemType/ProblemType";
import { setProblemType } from "../features/newProblem";

const useSetProblemType = () => {
  const dispatch = useAppDispatch();
  const handlePress = (problemType: ProblemType) => {
    dispatch(setSelectedProblemType(problemType));
    dispatch(setProblemType(problemType));
  };

  return handlePress;
};

export default useSetProblemType;
