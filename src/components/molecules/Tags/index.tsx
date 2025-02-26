import { Text } from "react-native";
import * as S from "./styles";

export const Tags = ({ tags }) => {
  return (
    <S.Tags>
      {tags.map((item: string) => {
        return (
          <S.Tag key={item}>
            <Text>{item}</Text>
          </S.Tag>
        );
      })}
    </S.Tags>
  );
};
