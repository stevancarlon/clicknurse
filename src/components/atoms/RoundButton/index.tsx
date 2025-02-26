import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

export const RoundButton = ({ icon, ...rest }) => {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  return (
    <S.RoundButton {...rest} onPress={goBack}>
      {icon}
    </S.RoundButton>
  );
};
