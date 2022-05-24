import { NavIconButton } from "../../core/components";
import useResetState from "../../../application/hooks/useResetState";

const SuccessViewBackButton = () => {
  const handlePress = useResetState();
  return <NavIconButton icon="close" onPress={handlePress} />;
};
export default SuccessViewBackButton;
