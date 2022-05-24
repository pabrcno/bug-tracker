import styled from "styled-components/native";
import { colors } from "../../core/constants";
import Checkbox from "expo-checkbox";
import { SizedBox } from "../../core/components";
import { Text } from "react-native";
import ProblemTypeView from "../../ProblemTypeView/ProblemTypeView";
const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CheckRow = () => {
  return (
    <Row>
      <Checkbox disabled={false} value={true} />
      <SizedBox width="18px" />
      <Text>Send. Thank you :)</Text>
    </Row>
  );
};
export default CheckRow;
