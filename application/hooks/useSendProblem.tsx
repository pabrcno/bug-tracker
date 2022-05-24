import { useSelector } from "react-redux";
import { RootState } from "../store";

const useSendProblem = () => {
  const newProblem = useSelector((state: RootState) => state.newProblem);
  const handleSendProblem = () => {
    const isCompleted =
      newProblem.newProblem.issuerEmail &&
      newProblem.newProblem.description &&
      newProblem.newProblem.problemType &&
      newProblem.newProblem.problemType.id &&
      newProblem.isSendCheckbox;
    if (isCompleted) {
      console.log("Send problem");
    } else {
      console.log("cannot problem");
    }
  };
  return handleSendProblem;
};

export default useSendProblem;
