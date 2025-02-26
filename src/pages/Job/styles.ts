import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Body = styled.View`
  background-color: white;
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  elevation: 10;
  position: relative;
`;

export const RoundCompanyLetter = styled.View`
  background-color: #4062f4;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  border: 2px solid white;
  elevation: 10;
  position: absolute;
  top: -40px;
  left: 50%;
  margin-left: -40px;
`;

export const RoundCompanyLetterText = styled.Text`
  color: white;
  font-size: 22px;
  font-family: serif;
  font-weight: 600;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

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

export const Tabs = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

export const Tab = styled.TouchableOpacity<{ selected: boolean }>`
  padding: 10px;
  color: ${({ selected }: { selected: boolean }) =>
    selected ? "#4062f4" : "black"};
  border-bottom-width: ${({ selected }: { selected: boolean }) =>
    selected ? "3px" : "0px"};
  border-bottom-color: #4062f4;
`;

export const TabText = styled.Text<{ selected: boolean }>`
  color: ${({ selected }: { selected: boolean }) =>
    selected ? "#4062f4" : "black"};
`;

export const ContentText = styled.Text`
  opacity: 0.7;
  font-size: 14px;
  margin-top: 10px;
`;

export const CompanyContact = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-top: 20px;
  padding-bottom: 120px;
`;

export const ContactPic = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

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

export const ApplyButton = styled.TouchableOpacity`
  background-color: #4062f4;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justifyc-content: center;
  padding: 10px;
`;
