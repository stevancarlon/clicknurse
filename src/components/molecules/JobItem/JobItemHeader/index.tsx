import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import Fontisto from "@expo/vector-icons/Fontisto";
import { TouchableOpacity, View } from "react-native";
import * as S from "./styles";
import { useUserJobs } from "src/store/useUserJobs";

export const JobItemHeader = ({ item }) => {
  const { userBookmarkList, setUserBookmarkList } = useUserJobs();

  const handleBookmark = () => {
    if (!userBookmarkList.includes(item.id)) {
      return setUserBookmarkList([...userBookmarkList, item?.id]);
    }
    return setUserBookmarkList([
      ...userBookmarkList.filter((el: string) => el !== item.id),
    ]);
  };

  return (
    <S.Header>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        <S.CompanyLetter>
          <S.CompanyLetterText>{item.company.charAt(0)}.</S.CompanyLetterText>
        </S.CompanyLetter>
        <View>
          <S.Position>{item.position}</S.Position>
          <S.Subtitle>
            <FontAwesome5
              name="hospital"
              size={10}
              color="black"
              opacity={0.4}
            />{" "}
            {item.company}
          </S.Subtitle>
          <S.Subtitle>
            <Entypo name="location-pin" size={10} color="black" opacity={0.4} />{" "}
            {item.location}
            {"  "}•{"  "}
            <Fontisto name="date" size={10} color="black" opacity={0.4} />{" "}
            {item.date}
          </S.Subtitle>
        </View>
      </View>
      <TouchableOpacity onPress={handleBookmark}>
        <FontAwesome
          name={userBookmarkList.includes(item.id) ? "bookmark" : "bookmark-o"}
          size={20}
          color={userBookmarkList.includes(item.id) ? "#4062f4" : "black"}
          opacity={userBookmarkList.includes(item.id) ? 1 : 0.4}
        />
      </TouchableOpacity>
    </S.Header>
  );
};
