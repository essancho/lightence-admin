import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Image, Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import * as S from './SecurityCodeForm.styles';
import * as Auth from 'components/layouts/auth/AuthLayout.styles';
import { VerificationCodeInput } from 'components/common/VerificationCodeInput/VerificationCodeInput';
import VerifyEmailImage from 'assets/images/verify-email.png';

export const SecurityCodeForm: React.FC = () => {
  const [verifyCode, setVerifyCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (verifyCode.length === 6) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate('/auth/new-password');
      }, 1000);
    }
  }, [verifyCode]);

  return (
    <Auth.FormWrapper>
      <Form layout="vertical" requiredMark="optional">
        <Auth.BackWrapper onClick={() => navigate(-1)}>
          <Auth.BackIcon />
          {t('common.back')}
        </Auth.BackWrapper>
        <S.ContentWrapper>
          <S.ImageWrapper>
            <Image src={VerifyEmailImage} alt="Not found" preview={false} />
          </S.ImageWrapper>
          <Auth.FormTitle>{t('verifyEmail.title')}</Auth.FormTitle>
          <S.VerifyEmailDescription>{t('verifyEmail.description')}</S.VerifyEmailDescription>
          {isLoading ? <Spin /> : <VerificationCodeInput autoFocus onChange={(value) => setVerifyCode(value)} />}
          <Link to="/" target={'_blank'}>
            <S.NoCodeText>{t('verifyEmail.noCode')}</S.NoCodeText>
          </Link>
        </S.ContentWrapper>
      </Form>
    </Auth.FormWrapper>
  );
};