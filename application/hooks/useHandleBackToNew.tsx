import { setView } from "../features/view";
import { useAppDispatch } from "./redux/hooks";
import problemTypeView from "../../presentation/NewProblemView";

const useHandleBackToNew = () => {
  const dispatch = useAppDispatch();
  const handleOnPress = () => {
    dispatch(setView(problemTypeView));
  };
  return handleOnPress;
};

export default useHandleBackToNew;
