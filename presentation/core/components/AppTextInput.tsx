import styled from "styled-components/native";
import { colors } from "../constants";

const AppTextInput = styled.TextInput`
  background: ${colors.input};
  width: 100%;
  height: 52px;
  border-radius: 8px;
  font-size: 16px;
  padding-horizontal: 10px;
  color: ${colors.text};
`;

export default AppTextInput;
