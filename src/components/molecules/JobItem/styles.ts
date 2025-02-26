import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  border: 1px solid rgba(255, 255, 255, 0.7);
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Info = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  padding-top: 10px;
`;

export const SalaryRange = styled.Text`
  color: #4062f4;
  font-weight: 600;
`;

export const Subtitle = styled.Text`
  color: black;
  opacity: 0.5;
  font-size: 10px;
  font-weight: 400;
`;
