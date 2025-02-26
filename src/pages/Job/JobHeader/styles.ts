import styled from "styled-components/native";

export const Header = styled.View`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  padding-top: 25px;
  padding-bottom: 70px;
  flex-direction: row;
`;

export const RoundButton = styled.TouchableOpacity`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  border-radius: 20px;
`;
