import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Tags } from "../Tags";
import { Avatars } from "../Avatars";
import { JobItemHeader } from "./JobItemHeader";
import { StackNavigationProp } from "@react-navigation/stack";
import { IDataJob } from "@interfaces/dataJob";
import { memo, useCallback } from "react";

type RootStackParamList = {
  Job: { item: IDataJob };
};

const JobItemComponent = ({ item }: { item: IDataJob }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const goToJob = useCallback(
    () => navigation.navigate("Job", { item }),
    [navigation, item]
  );

  return (
    <S.Container onPress={goToJob}>
      <JobItemHeader item={item} />
      <Tags tags={item?.tags} />
      <S.Info>
        <Avatars />
        <S.SalaryRange>
          {item.salaryRange}
          <S.Subtitle> /mês</S.Subtitle>
        </S.SalaryRange>
      </S.Info>
    </S.Container>
  );
};

export const JobItem = memo(JobItemComponent);
