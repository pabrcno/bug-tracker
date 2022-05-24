import { ActionButton } from "../../core/components";
import useResetState from "../../../application/hooks/useResetState";

const SuccessViewActionButton = () => {
  const handlePress = useResetState();
  return <ActionButton text="Finish" onPress={handlePress} />;
};
export default SuccessViewActionButton;
