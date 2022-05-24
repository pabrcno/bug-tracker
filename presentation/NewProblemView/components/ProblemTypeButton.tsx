import styled from "styled-components/native";
import { colors } from "../../core/constants";
import { AntDesign } from "@expo/vector-icons";
const StyledButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${colors.input};
  width: 100%;
  height: 52px;
  border-radius: 8px;
  padding-horizontal: 10px;
`;

const StyledText = styled.Text`
  color: ${colors.hint};
  font-size: 16px;
`;

const ProblemTypeButton = () => {
  return (
    <StyledButton>
      <StyledText>Problem Type</StyledText>
      <AntDesign name="arrowright" size={24} color="gray" />
    </StyledButton>
  );
};
export default ProblemTypeButton;
