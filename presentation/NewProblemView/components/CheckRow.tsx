import styled from "styled-components/native";

import Checkbox from "expo-checkbox";
import { SizedBox } from "../../core/components";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../application/store";
import useToggleCheckbox from "../../../application/hooks/useToggleCheckbox";

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CheckRow = () => {
  const value = useSelector(
    (state: RootState) => state.newProblem.isSendCheckbox
  );
  const handleChange = useToggleCheckbox();
  return (
    <Row>
      <Checkbox value={value} onTouchEnd={handleChange} />
      <SizedBox width="18px" />
      <Text>Send. Thank you :)</Text>
    </Row>
  );
};
export default CheckRow;
