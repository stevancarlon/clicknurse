import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as S from "./styles";
import { Text } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

export const FooterButton = ({ onPress, text, isDisabled }) => {
  const insets = useSafeAreaInsets();

  return (
    <S.ApplyContainer style={{ marginBottom: insets.bottom }}>
      <S.ApplyButton
        onPress={isDisabled ? null : onPress}
        isDisabled={isDisabled}
      >
        {isDisabled && <Entypo name="check" size={24} color="#4062f4" />}
        <Text style={{ color: isDisabled ? "#4062f4" : "white" }}>{text}</Text>
      </S.ApplyButton>
    </S.ApplyContainer>
  );
};
