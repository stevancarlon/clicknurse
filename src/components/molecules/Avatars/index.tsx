import * as S from "./styles";
import AvatarM1 from "@assets/avatars/avatar_m_1.jpg";
import AvatarM2 from "@assets/avatars/avatar_m_2.jpg";
import AvatarF3 from "@assets/avatars/avatar_f_3.jpg";
import AvatarF4 from "@assets/avatars/avatar_f_4.jpg";
import { Text, View } from "react-native";

export const Avatars = () => {
  return (
    <View>
      <S.Avatars>
        <S.Avatar source={AvatarM1} />
        <S.Avatar source={AvatarM2} style={{ left: -15 }} />
        <S.Avatar source={AvatarF3} style={{ left: -30 }} />
        <S.Avatar source={AvatarF4} style={{ left: -45 }} />
      </S.Avatars>
      <Text style={{ fontSize: 10, opacity: 0.5 }}>52 candidatos</Text>
    </View>
  );
};
