import { FlatList } from "react-native";
import * as S from "./styles";
import Feather from "@expo/vector-icons/Feather";
import dataJobs from "../../../dataJobs.json";
import { JobItem } from "../../components/molecules/JobItem";

export const Home = () => {
  const renderItem = ({ item }: { item: any }) => {
    return <JobItem item={item} />;
  };

  return (
    <S.Container>
      <S.Header>
        <S.HomeTitle>Vagas recentes</S.HomeTitle>
        <S.Icon>
          <Feather name="help-circle" size={28} color="grey" />
        </S.Icon>
      </S.Header>
      <FlatList
        data={dataJobs}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </S.Container>
  );
};
