import { useSelector } from "react-redux";
import { setView } from "../features/view";
import { RootState } from "../store";
import { useAppDispatch } from "./redux/hooks";
import successView from "../../presentation/SuccessView";

const useSendProblem = () => {
  const newProblem = useSelector((state: RootState) => state.newProblem);
  const dispatch = useAppDispatch();
  const handleSendProblem = () => {
    const isCompleted =
      newProblem.newProblem.issuerEmail &&
      newProblem.newProblem.description &&
      newProblem.newProblem.problemType &&
      newProblem.newProblem.problemType.id &&
      newProblem.isSendCheckbox;
    if (isCompleted) {
      console.log("Send problem");
      dispatch(setView(successView));
    } else {
      console.error("cannot send problem");
    }
  };
  return handleSendProblem;
};

export default useSendProblem;
