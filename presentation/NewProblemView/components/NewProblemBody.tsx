import ProblemTypeButton from "./ProblemTypeButton";
import { SizedBox } from "../../core/components";
import { View } from "react-native";
import CheckRow from "./CheckRow";
import DescriptionInput from "./DescriptionInput";
import EmailInput from "./EmailInput";

const componentsSeparation = "18px";

const NewProblemBody = () => {
  return (
    <View>
      <ProblemTypeButton />
      <SizedBox height={componentsSeparation} />
      <EmailInput />
      <SizedBox height={componentsSeparation} />
      <DescriptionInput />
      <SizedBox height={componentsSeparation} />
      <CheckRow />
    </View>
  );
};

export default NewProblemBody;
