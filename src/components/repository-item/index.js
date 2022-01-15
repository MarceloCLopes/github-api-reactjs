import React from "react";
import * as S from "./styles";

export function RepositoryItem({ name, linkToRepo, fullName }) {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullname>full name:</S.WrapperFullname>
      <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  );
}
