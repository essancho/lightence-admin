import React from 'react';
import { Advice as AdviceProps } from '../../../../constants/piecesOfAdvice';
import { Dates } from '../../../../constants/Dates';
import * as S from './Advice.styles';

export const Advice: React.FC<AdviceProps> = ({ imgUrl, title, date, description }) => {
  return (
    <S.Wrapper>
      <S.BtnMore type="ghost">More details</S.BtnMore>
      <S.Image src={imgUrl} preview={false} />
      <S.InfoWrapper>
        <S.InfoHeader>
          <S.Title>{title}</S.Title>
          <S.Text>{Dates.format(date, 'L')}</S.Text>
        </S.InfoHeader>
        <S.Description>{description}</S.Description>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};