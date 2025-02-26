import * as DocumentPicker from "expo-document-picker";
import * as S from "./styles";
import Entypo from "@expo/vector-icons/Entypo";
import { Text } from "react-native";

interface AttachProps {
  setFile: (file: any) => void;
  file: any;
  validate: boolean;
}

export const Attach: React.FC<AttachProps> = ({ setFile, file, validate }) => {
  const pickPdf = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });

    if (result?.assets && result.assets[0]) {
      setFile(result.assets[0]);
    }
  };

  return (
    <S.Container>
      <Text>
        Carregar currículo <Text style={{ opacity: 0.5, fontSize: 10 }}>*</Text>
      </Text>
      <S.Button onPress={pickPdf}>
        <Text>
          <Entypo
            name={file?.name ? "check" : "upload"}
            size={24}
            color="#4062f4"
          />
        </Text>
        <Text style={{ opacity: 0.5 }}>{file?.name ?? "Carregar PDF"}</Text>
      </S.Button>
      {validate && !file && <S.Error>Campo obrigatório</S.Error>}
    </S.Container>
  );
};
