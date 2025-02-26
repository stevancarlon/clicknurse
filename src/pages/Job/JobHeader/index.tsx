import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import { useUserJobs } from "src/store/useUserJobs";
import { Share, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";

export const JobHeader = ({ item }) => {
  const navigation = useNavigation();
  const { userBookmarkList, setUserBookmarkList } = useUserJobs();

  const goBack = () => navigation.goBack();

  const handleBookmark = () => {
    if (!userBookmarkList.includes(item.id)) {
      return setUserBookmarkList([...userBookmarkList, item?.id]);
    }
    return setUserBookmarkList([
      ...userBookmarkList.filter((el: string) => el === item.id),
    ]);
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out this job: ${item?.position} at ${item?.company}`,
      });
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <S.Header>
      <S.RoundButton onPress={goBack}>
        <AntDesign name="arrowleft" size={20} color="black" opacity={0.4} />
      </S.RoundButton>
      <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
        <S.RoundButton onPress={handleBookmark}>
          <FontAwesome
            name={
              userBookmarkList.includes(item.id) ? "bookmark" : "bookmark-o"
            }
            size={20}
            color={userBookmarkList.includes(item.id) ? "#4062f4" : "black"}
            opacity={userBookmarkList.includes(item.id) ? 1 : 0.4}
          />
        </S.RoundButton>
        <S.RoundButton onPress={handleShare}>
          <Feather name="share-2" size={20} color="black" opacity={0.4} />
        </S.RoundButton>
      </View>
    </S.Header>
  );
};
