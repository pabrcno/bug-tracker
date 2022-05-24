import { NavIconButton } from "../../core/components";
import { useAppDispatch } from "../../../application/hooks/redux/hooks";
import { setView } from "../../../application/features/view";
import newProblemView from "../../NewProblemView";
import { setSelectedProblemType } from "../../../application/features/problemType";

const ProblemTypeBackButton = () => {
  const dispatch = useAppDispatch();
  const handlePress = () => {
    dispatch(
      setSelectedProblemType({
        id: "",
        title: "",
        description: "",
      })
    );
    dispatch(setView(newProblemView));
  };
  return <NavIconButton icon="arrowleft" onPress={handlePress} />;
};
export default ProblemTypeBackButton;
