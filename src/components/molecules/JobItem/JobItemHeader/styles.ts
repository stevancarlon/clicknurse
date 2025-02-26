import styled from "styled-components/native";

export const Position = styled.Text`
  font-weight: 500;
  font-size: 16px;
`;

export const CompanyLetter = styled.View`
  background-color: #4062f4;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 66px;
  width: 66px;
`;

export const CompanyLetterText = styled.Text`
  color: white;
  font-size: 22px;
  font-family: serif;
  font-weight: 600;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;

export const Subtitle = styled.Text`
  color: black;
  opacity: 0.5;
  font-size: 10px;
  font-weight: 400;
`;
