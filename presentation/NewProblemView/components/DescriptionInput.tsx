import { useAppSelector } from "../../../application/hooks/redux/hooks";
import useSetDescription from "../../../application/hooks/useSetDescription";
import { AppTextInput } from "../../core/components";

const DescriptionInput = () => {
  const description = useAppSelector(
    (state) => state.newProblem.newProblem.description
  );
  const handleChange = useSetDescription();
  return (
    <AppTextInput
      placeholder="Problem Description"
      multiline
      numberOfLines={4}
      style={{ padding: 100 }}
      defaultValue={description}
      onChangeText={(value: string) => handleChange(value)}
    />
  );
};

export default DescriptionInput;
