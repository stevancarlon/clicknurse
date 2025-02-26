import { FlatList, View, Text } from "react-native";
import * as S from "./styles";
import Feather from "@expo/vector-icons/Feather";
import { JobItem } from "../../components/molecules/JobItem";
import { useState, useEffect } from "react";
import { useUserJobs } from "src/store/useUserJobs";
import dataJobs from "../../../dataJobs.json";
import Ionicons from "@expo/vector-icons/Ionicons";
import { IDataJob } from "@interfaces/dataJob";

export const Bookmarks = () => {
  const { userBookmarkList } = useUserJobs();
  const [data, setData] = useState<IDataJob[]>([]);

  useEffect(() => {
    const bookmarkedJobs = dataJobs.filter((job) =>
      userBookmarkList.includes(job.id)
    );
    setData(bookmarkedJobs);
  }, [userBookmarkList]);

  const renderItem = ({ item }: { item: any }) => {
    return <JobItem item={item} />;
  };

  return (
    <S.Container>
      <S.Header>
        <S.HomeTitle>Vagas salvas</S.HomeTitle>
        <S.Icon>
          <Feather name="help-circle" size={28} color="grey" />
        </S.Icon>
      </S.Header>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
              flex: 1,
              gap: 5,
            }}
          >
            <Ionicons name="bookmarks" size={52} color="#4062f4" />
            <Text style={{ fontSize: 18 }}>Nenhuma vaga salva</Text>
            <Text style={{ width: "70%", textAlign: "center", fontSize: 12 }}>
              As suas vagas favoritas serão listadas aqui
            </Text>
          </View>
        }
      />
    </S.Container>
  );
};
