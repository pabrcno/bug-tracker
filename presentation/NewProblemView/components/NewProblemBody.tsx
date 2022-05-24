import ProblemTypeButton from "./ProblemTypeButton";
import { AppTextInput, SizedBox } from "../../core/components";
import { View } from "react-native";
import CheckRow from "./CheckRow";

const componentsSeparation = "18px";

const NewProblemBody = () => {
  return (
    <View>
      <ProblemTypeButton />
      <SizedBox height={componentsSeparation} />
      <AppTextInput placeholder="Your Email" />
      <SizedBox height={componentsSeparation} />
      <AppTextInput
        placeholder="Problem Description"
        multiline
        numberOfLines={4}
        style={{ padding: 100 }}
      />
      <SizedBox height={componentsSeparation} />
      <CheckRow />
    </View>
  );
};

export default NewProblemBody;
