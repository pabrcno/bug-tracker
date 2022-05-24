import styled from "styled-components/native";

type Props = {
  height?: string;
  width?: string;
};
const SizedBox = styled.View<Props>`
  height: ${(props) => props.height || 0};
  width: ${(props) => props.width || 0};
`;
export default SizedBox;
