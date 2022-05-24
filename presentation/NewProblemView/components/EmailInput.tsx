import { useSelector } from "react-redux";
import { RootState } from "../../../application/store";
import { AppTextInput } from "../../core/components";
import useSetIssuerEmail from "../../../application/hooks/useSetIssuerEmail";

const EmailInput = () => {
  const email = useSelector(
    (state: RootState) => state.newProblem.newProblem.issuerEmail
  );
  const handleChange = useSetIssuerEmail();

  return (
    <AppTextInput
      placeholder="Your Email"
      defaultValue={email}
      onChangeText={(value: string) => handleChange(value)}
    />
  );
};
export default EmailInput;
