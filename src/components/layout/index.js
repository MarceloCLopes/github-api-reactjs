import React from "react";
import { Header } from "../header";
import * as S from "./styles";

export function Layout({ children }) {
  return (
    <S.WrapperLayout>
      <Header />
      {children}
    </S.WrapperLayout>
  );
}
