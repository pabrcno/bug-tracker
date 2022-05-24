import { ActionButton } from "../../core/components";
import { useAppDispatch } from "../../../application/hooks/redux/hooks";
import { setView } from "../../../application/features/view";
import newProblemView from "../../NewProblemView";

const ProblemTypeActionButton = () => {
  const dispatch = useAppDispatch();
  const handlePress = () => {
    dispatch(setView(newProblemView));
  };
  return <ActionButton text="Choose" onPress={handlePress} />;
};
export default ProblemTypeActionButton;
