import useSendProblem from "../../../application/hooks/useSendProblem";
import { ActionButton } from "../../core/components";

const NewProblemActionButton = () => {
  const handlePress = useSendProblem();
  return <ActionButton onPress={() => handlePress()} text={"Send Problem"} />;
};
export default NewProblemActionButton;
