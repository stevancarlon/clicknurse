import styled from "styled-components/native";

export const Container = styled.View`
  background-color: white;
  position: relative;
  flex: 1;
  height: 100%;
  width: 100%;
  z-index: 5;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 10px;
  padding-bottom: 70px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: 600;
`;

export const Subtitle = styled.Text`
  font-weight: 400;
  font-size: 12px;
`;

export const Grab = styled.View`
  width: 80px;
  height: 5px;
  border-radius: 10px;
  background-color: grey;
  position: absolute;
  top: 10px;
`;
