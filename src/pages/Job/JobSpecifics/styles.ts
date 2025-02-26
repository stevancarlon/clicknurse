import styled from "styled-components/native";

export const Subtitle = styled.Text`
  font-size: 12px;
  opacity: 0.5;
`;

export const JobItems = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Item = styled.View`
  width: 45%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 10px;
  border-radius: 10px;
  flex-direction: row;
  padding: 5px;
`;

export const ItemText = styled.Text`
  color: #4062f4;
  font-weight: 600;
  font-size: 12px;
`;

export const ItemIcon = styled.TouchableOpacity`
  background-color: #f5f5f5;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
