import styled from "styled-components/native";
import { colors } from "../constants";
import ButtonText from "./ButtonText";

const StyledActionButton = styled.TouchableOpacity`
  background: ${colors.primary};
  border-radius: 8px;
  width: 100%;
  height: 44px;
  justify-content: center;
  align-items: center;
`;

type Props = {
  onPress: () => void;
  text: string;
};

const ActionButton = ({ text, onPress }: Props) => (
  <StyledActionButton onPress={onPress}>
    <ButtonText>{text}</ButtonText>
  </StyledActionButton>
);

export default ActionButton;
