import { ActionButton } from "../../core/components";
import useHandleBackToNew from "../../../application/hooks/useHandleBackToNew";

const ProblemTypeActionButton = () => {
  const handlePress = useHandleBackToNew();
  return <ActionButton text="Choose" onPress={handlePress} />;
};
export default ProblemTypeActionButton;
