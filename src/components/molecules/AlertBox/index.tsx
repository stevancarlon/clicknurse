import { Text } from "react-native";
import * as S from "./styles";

export const AlertBox = ({ icon, text }) => {
  return (
    <S.Container>
      <Text>{icon}</Text>
      <Text>{text}</Text>
    </S.Container>
  );
};
