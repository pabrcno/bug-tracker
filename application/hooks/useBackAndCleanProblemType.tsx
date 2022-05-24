import { setProblemType } from "../features/newProblem";
import { setSelectedProblemType } from "../features/problemType";
import { useAppDispatch } from "./redux/hooks";
import useHandleBackToNew from "./useHandleBackToNew";

const emptyProblemType = {
  id: "",
  title: "",
  description: "",
};

const useBackAndCleanProblemType = () => {
  const dispatch = useAppDispatch();
  const backToNew = useHandleBackToNew();
  const handlePress = () => {
    dispatch(setSelectedProblemType(emptyProblemType));
    dispatch(setProblemType(emptyProblemType));
    backToNew();
  };
  return handlePress;
};
export default useBackAndCleanProblemType;
