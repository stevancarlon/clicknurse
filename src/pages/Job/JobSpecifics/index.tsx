import { View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as S from "./styles";

export const JobSpecifics = ({ item }) => {
  return (
    <S.JobItems>
      <S.Item>
        <S.ItemIcon>
          <FontAwesome name="money" size={24} color="black" />
        </S.ItemIcon>
        <View>
          <S.Subtitle>Salário (mensal)</S.Subtitle>
          <S.ItemText>{item.salaryRange}</S.ItemText>
        </View>
      </S.Item>
      <S.Item>
        <S.ItemIcon>
          <Ionicons name="briefcase-outline" size={24} color="black" />
        </S.ItemIcon>
        <View>
          <S.Subtitle>Modalidade</S.Subtitle>
          <S.ItemText>{item.employmentType}</S.ItemText>
        </View>
      </S.Item>
      <S.Item>
        <S.ItemIcon>
          <FontAwesome name="ticket" size={24} color="black" />
        </S.ItemIcon>
        <View>
          <S.Subtitle>Vale alimentação</S.Subtitle>
          <S.ItemText>{item.mealVoucher}</S.ItemText>
        </View>
      </S.Item>
      <S.Item>
        <S.ItemIcon>
          <MaterialIcons name="signal-cellular-alt" size={24} color="#4062f4" />
        </S.ItemIcon>
        <View>
          <S.Subtitle>Nível</S.Subtitle>
          <S.ItemText>{item.level}</S.ItemText>
        </View>
      </S.Item>
    </S.JobItems>
  );
};
