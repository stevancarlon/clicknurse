import {
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import * as S from "./styles";
import { RoundButton } from "@components/atoms/RoundButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SmallTextInput } from "@components/atoms/SmallTextInput";
import { Attach } from "@components/atoms/Attach";
import { BigTextInput } from "@components/atoms/BigTextInput";
import { FooterButton } from "@components/molecules/FooterButton";
import { useState } from "react";
import { Backdrop } from "@components/atoms/Backdrop";
import { ApplySuccess } from "@components/organisms/ApplySuccess";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useUserJobs } from "src/store/useUserJobs";
import { useRoute } from "@react-navigation/native";
import { IDataJob } from "@interfaces/dataJob";

export const Apply = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [file, setFile] = useState(null);
  const [intro, setIntro] = useState(null);
  const [validateForm, setValidateForm] = useState(false);
  const { setUserAppliedList, userAppliedList } = useUserJobs();

  const route = useRoute();
  const params = route.params as { item: IDataJob };
  const { item } = params;

  const handleApply = () => {
    if (!name || !email || !file) {
      setValidateForm(true);
      return;
    }

    const randomOutcome = Math.random();
    if (randomOutcome < 0.5) {
      setSuccess(true);
      setUserAppliedList([...userAppliedList, item?.id]);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {success && <Backdrop />}
      {success && (
        <ApplySuccess
          setApply={setSuccess}
          title={"Concluído!"}
          subtitle={"Sua aplicação foi enviada com sucesso."}
          icon={<Ionicons name="checkmark-circle" size={72} color="#4062f4" />}
          isSuccess={true}
        />
      )}
      {error && <Backdrop />}
      {error && (
        <ApplySuccess
          setApply={setError}
          title={"Erro."}
          subtitle={"Por favor, tente novamente"}
          icon={<MaterialIcons name="error" size={72} color="red" />}
          isSuccess={false}
        />
      )}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <S.Container>
          <S.Header>
            <RoundButton
              style={{ position: "absolute" }}
              icon={
                <AntDesign
                  name="arrowleft"
                  size={20}
                  color="black"
                  opacity={0.4}
                />
              }
            />
            <Text style={{ fontSize: 16 }}>Aplicar</Text>
          </S.Header>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={{
                display: "flex",
                gap: 20,
                paddingTop: 10,
                paddingBottom: 100,
              }}
            >
              <SmallTextInput
                title={"Nome completo"}
                placeholder={"John Doe"}
                value={name}
                onChangeText={setName}
                validate={validateForm}
              />
              <SmallTextInput
                title={"Email"}
                placeholder={"example@email.com"}
                value={email}
                onChangeText={setEmail}
                validate={validateForm}
              />
              <Attach setFile={setFile} file={file} validate={validateForm} />
              <BigTextInput
                title={"Carta de apresentação"}
                placeholder={"Apresente-se aqui..."}
                value={intro}
                onChangeText={setIntro}
              />
            </View>
          </ScrollView>
        </S.Container>
      </KeyboardAvoidingView>
      <FooterButton onPress={handleApply} text={"Aplicar"} isDisabled={false} />
    </>
  );
};
