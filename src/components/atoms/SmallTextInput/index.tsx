import { Text, TextInput } from "react-native";
import * as S from "./styles";

export const SmallTextInput = ({
  title,
  placeholder,
  value,
  onChangeText,
  validate,
}) => {
  return (
    <S.Container>
      <Text>
        {title} <Text style={{ fontSize: 10, opacity: 0.5 }}>*</Text>
      </Text>
      <S.InputContainer>
        <TextInput
          placeholder={placeholder}
          style={{ backgroundColor: "transparent" }}
          value={value}
          onChangeText={onChangeText}
        />
      </S.InputContainer>
      {validate && !value && <S.Error>Campo obrigatório</S.Error>}
    </S.Container>
  );
};
