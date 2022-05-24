import styled from "styled-components/native";
import { colors } from "../../core/constants";
import { AntDesign } from "@expo/vector-icons";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../application/hooks/redux/hooks";
import { setView } from "../../../application/features/view";
import problemTypeView from "../../ProblemTypeView/ProblemTypeView";
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
  const problemTypeTitle = useAppSelector(
    (state) => state.problemType.selectedProblemType.title
  );
  const dispatch = useAppDispatch();
  const handleOnPress = () => {
    dispatch(setView(problemTypeView));
  };
  return (
    <StyledButton onPress={handleOnPress}>
      <StyledText>{problemTypeTitle || "Problem Type"}</StyledText>
      <AntDesign name="arrowright" size={24} color="gray" />
    </StyledButton>
  );
};
export default ProblemTypeButton;
