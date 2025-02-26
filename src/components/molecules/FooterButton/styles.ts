import styled from "styled-components/native";

export const ApplyContainer = styled.View`
  position: absolute;
  bottom: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 15px;
  padding-bottom: 20px;
  border-radius: 20px;
  background-color: white;
`;

export const ApplyButton = styled.TouchableOpacity<{ isDisabled: boolean }>`
  background-color: ${({ isDisabled }: { isDisabled: boolean }) =>
    isDisabled ? "white" : "#4062f4"};
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;
  border: ${({ isDisabled }: { isDisabled: boolean }) =>
    isDisabled ? "1px solid #4062f4" : "none"};
`;
