import styled from "styled-components/native";
import { colors } from "../constants";

import SizedBox from "./SizedBox";

const Container = styled.View`
  background-color: ${colors.background};
  border-radius: 6px 6px 0px 0px;
  width: 98%;
  height: 96%;
  padding-horizontal: 16px;
  padding-vertical: 20px;
  flex-direction: column;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  padding-horizontal: 1%;
`;
const Title = styled.Text`
  font-size: 17px;
  color: ${colors.title};
  letter-spacing: 0.2px;
`;

const Background = styled.ImageBackground``;

const ButtonContainer = styled.View`
  padding-top: 22px;
  align-items: center;
  height: 15%;
  width: 100%;
  border-top-color: ${colors.input};
  border-top-width: 1px;
`;

//TODO: Ask for more specific types for this component
type Props = {
  body: React.ReactNode;
  title: string;
  actionButton: React.ReactNode;
  navIconButton: React.ReactNode;
};

const Scaffold = ({ body, title, actionButton, navIconButton }: Props) => {
  return (
    <Background
      source={require("../../../assets/background.png")}
      style={{
        flex: 1,
        height: "100%",
        width: "100%",
        alignItems: "center",
        paddingTop: "10%",
      }}
    >
      <Header>
        <>
          {navIconButton}
          <Title>{title}</Title>
          <SizedBox width={"24px"} />
        </>
      </Header>
      <Container>
        <SizedBox height="80%" width="100%">
          {body}
        </SizedBox>
        <ButtonContainer>{actionButton}</ButtonContainer>
      </Container>
    </Background>
  );
};

export default Scaffold;
