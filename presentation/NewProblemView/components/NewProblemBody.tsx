import ProblemTypeButton from "./ProblemTypeButton";
import { AppTextInput, SizedBox } from "../../core/components";
import { View } from "react-native";

const NewProblemBody = () => {
  return (
    <View>
      <ProblemTypeButton />
      <SizedBox height="18px" />
      <AppTextInput placeholder="Your Email" />
      <SizedBox height="18px" />
      <AppTextInput
        placeholder="Problem Description"
        multiline
        numberOfLines={10}
      />
    </View>
  );
};

export default NewProblemBody;
