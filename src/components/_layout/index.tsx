import * as S from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <S.Container style={{ marginTop: insets.top }}>{children}</S.Container>
  );
};
