import styled from "styled-components/native";
import { colors } from "../../core/constants";
import { AntDesign } from "@expo/vector-icons";
import { SizedBox } from "../../core/components";

const Body = styled.View`
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  color: ${colors.text};
  letter-spacing: 0.2px;
`;

const Message = styled.Text`
  font-size: 16px;
  color: ${colors.hint};
  letter-spacing: 0.2px;
`;

const SuccessMessage = () => (
  <Body>
    <AntDesign name="checkcircleo" size={100} color="lightgreen" />
    <SizedBox height="20px" />
    <Title>Success!</Title>
    <SizedBox height="10px" />
    <Message>Your order has been placed!</Message>
  </Body>
);

export default SuccessMessage;
