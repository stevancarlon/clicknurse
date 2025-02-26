import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  gap: 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #f6f6f6;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  padding: 20px;
`;

export const Error = styled.Text`
  color: red;
  font-size: 10px;
`;
