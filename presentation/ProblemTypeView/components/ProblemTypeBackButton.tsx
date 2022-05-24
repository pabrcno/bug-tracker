import { NavIconButton } from "../../core/components";
import useBackAndCleanProblemType from "../../../application/hooks/useBackAndCleanProblemType";

const ProblemTypeBackButton = () => {
  const handlePress = useBackAndCleanProblemType();
  return <NavIconButton icon="arrowleft" onPress={handlePress} />;
};
export default ProblemTypeBackButton;
