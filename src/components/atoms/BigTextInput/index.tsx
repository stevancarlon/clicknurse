import * as S from "./styles";
import { TextInput, Text, View } from "react-native";

export const BigTextInput = ({ title, placeholder, value, onChangeText }) => {
  return (
    <View style={{ display: "flex", gap: 10 }}>
      <Text>{title}</Text>
      <S.Container>
        <TextInput
          style={{
            height: 150,
            padding: 10,
            textAlignVertical: "top", // Ensures text starts at the top
          }}
          placeholder={placeholder}
          multiline
          numberOfLines={8}
          value={value}
          onChangeText={onChangeText}
        />
      </S.Container>
    </View>
  );
};
