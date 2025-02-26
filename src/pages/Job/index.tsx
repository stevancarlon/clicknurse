import { useNavigation, useRoute } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import * as S from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView, Text, View } from "react-native";
import AvatarF1 from "@assets/avatars/avatar_f_1.jpg";
import { useState, useCallback } from "react";
import { Backdrop } from "@components/atoms/Backdrop";
import { FooterButton } from "@components/molecules/FooterButton";
import { useUserJobs } from "src/store/useUserJobs";
import { AlertBox } from "@components/molecules/AlertBox";
import { JobHeader } from "./JobHeader";
import { JobSpecifics } from "./JobSpecifics";
import { IDataJob } from "@interfaces/dataJob";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Apply: { item: IDataJob };
};

export const Job = () => {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { userAppliedList } = useUserJobs();

  const [curTab, setCurTab] = useState("about");
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showFullAbout, setShowFullAbout] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const { item } = route.params as { item: IDataJob };

  const truncateText = useCallback((text: string, length: number): string => {
    if (text.length > length) {
      return text.substring(0, length) + "";
    }
    return text;
  }, []);

  const handleApply = useCallback(() => {
    navigation.navigate("Apply", { item });
  }, [navigation, item]);

  return (
    <>
      {showPhone && <Backdrop onPress={() => setShowPhone(false)} />}
      {showPhone && (
        <AlertBox
          icon={<Entypo name="phone" size={20} color="#4062f4" />}
          text={item.contact.cellPhone}
        />
      )}
      <JobHeader item={item} />
      <S.Container style={{ marginTop: insets.top }}>
        <S.Body>
          <S.RoundCompanyLetter>
            <S.RoundCompanyLetterText>
              {item.company.charAt(0)}.
            </S.RoundCompanyLetterText>
          </S.RoundCompanyLetter>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 50,
            }}
          >
            <S.Title>{item.position}</S.Title>
            <S.Subtitle>{item.company}</S.Subtitle>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: 5,
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <Text>
              <Entypo name="location-pin" size={22} color="#4062f4" />{" "}
            </Text>
            <S.Subtitle>{item.location}</S.Subtitle>
          </View>
          <JobSpecifics item={item} />
          <S.Tabs>
            <S.Tab
              selected={curTab === "about"}
              onPress={() => setCurTab("about")}
            >
              <S.TabText selected={curTab === "about"}>Sobre</S.TabText>
            </S.Tab>
            <S.Tab
              selected={curTab === "company"}
              onPress={() => setCurTab("company")}
            >
              <S.TabText selected={curTab === "company"}>Empresa</S.TabText>
            </S.Tab>
            <S.Tab
              selected={curTab === "review"}
              onPress={() => setCurTab("review")}
            >
              <S.TabText selected={curTab === "review"}>Review</S.TabText>
            </S.Tab>
          </S.Tabs>
          <ScrollView style={{ padding: 20 }}>
            {curTab === "about" && (
              <>
                <S.Title style={{ paddingBottom: 10 }}>Sobre a vaga</S.Title>
                <Text>
                  <Text style={{ fontWeight: 600 }}>Horário:</Text>{" "}
                  {item?.workSchedule}
                </Text>
                <Text>
                  <Text style={{ fontWeight: 600 }}>Requisitos:</Text>{" "}
                  {item?.requirements}
                </Text>
                <Text>
                  <Text style={{ fontWeight: 600 }}>Benefícios:</Text>{" "}
                  {item?.benefits}
                </Text>
                <S.ContentText>
                  {showFullDescription
                    ? item.description
                    : truncateText(item.description, 100)}
                  {item.description.length > 100 && (
                    <Text
                      style={{ color: "#4062f4" }}
                      onPress={() => setShowFullDescription((prev) => !prev)}
                    >
                      {showFullDescription ? " Ler menos" : " Ler mais"}
                    </Text>
                  )}
                </S.ContentText>
              </>
            )}
            {curTab === "company" && (
              <>
                <S.Title style={{ paddingBottom: 10 }}>Sobre a empresa</S.Title>
                <S.ContentText>
                  {showFullAbout ? item.about : truncateText(item.about, 100)}
                  {item.about.length > 100 && (
                    <Text
                      style={{ color: "#4062f4" }}
                      onPress={() => setShowFullAbout((prev) => !prev)}
                    >
                      {showFullAbout ? " Ler menos" : " Ler mais"}
                    </Text>
                  )}
                </S.ContentText>
              </>
            )}
            {curTab === "review" && (
              <>
                <S.Title
                  style={{
                    paddingBottom: 20,
                    fontSize: 12,
                    textAlign: "center",
                  }}
                >
                  Essa empresa ainda não possui avaliações
                </S.Title>
                <Text style={{ textAlign: "center", paddingBottom: 60 }}>
                  <AntDesign name="staro" size={24} color="#4062f4" />
                  <AntDesign name="staro" size={24} color="#4062f4" />
                  <AntDesign name="staro" size={24} color="#4062f4" />
                  <AntDesign name="staro" size={24} color="#4062f4" />
                  <AntDesign name="staro" size={24} color="#4062f4" />
                </Text>
              </>
            )}
            <S.CompanyContact>
              <S.ContactPic source={AvatarF1} />
              <View
                style={{ display: "flex", justifyContent: "center", flex: 1 }}
              >
                <S.Title>{item.contact.name}</S.Title>
                <S.Subtitle>{item.contact.position}</S.Subtitle>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <S.ItemIcon onPress={() => setShowPhone(true)}>
                  <Entypo name="phone" size={20} color="#4062f4" />
                </S.ItemIcon>
              </View>
            </S.CompanyContact>
          </ScrollView>
        </S.Body>
      </S.Container>
      <FooterButton
        isDisabled={userAppliedList.includes(item.id)}
        onPress={handleApply}
        text={userAppliedList.includes(item.id) ? "Aplicado" : "Candidatar-se"}
      />
    </>
  );
};
