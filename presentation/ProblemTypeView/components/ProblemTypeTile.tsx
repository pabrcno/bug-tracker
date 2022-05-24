import styled from "styled-components/native";
import { colors } from "../../core/constants";
import SizedBox from "../../core/components/SizedBox";
import { AntDesign } from "@expo/vector-icons";
import ProblemType from "../../../domain/ProblemType/ProblemType";

type Props = {
  problemType: ProblemType;
  onTap: () => void;
  isSelected: boolean;
};

const StyledTile = styled.TouchableOpacity`
  flex-direction: row;
  with: 100%;
  height: 100px;
  justify-content: space-between;
  align-items: center;
`;
const InfoContainer = styled.View``;
const Title = styled.Text`
  font-size: 16px;
  color: ${colors.text};
  letter-spacing: 0.2px;
`;

const Description = styled.Text`
  font-size: 14px;
  color: ${colors.hint};
  letter-spacing: 0.2px;
`;

const ProblemTypeTile = ({ problemType, onTap, isSelected }: Props) => {
  return (
    <StyledTile onPress={onTap}>
      <InfoContainer>
        <Title>{problemType.title}</Title>
        <SizedBox height="7px" />
        <Description>{problemType.description}</Description>
      </InfoContainer>
      {isSelected && <AntDesign name="checkcircle" size={24} color="blue" />}
    </StyledTile>
  );
};

export default ProblemTypeTile;
