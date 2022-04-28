import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Head from 'next/head';

import styled from '@emotion/styled';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { userActions } from '../../redux/reducers/userReducer';

import Inner from '../../components/Inner/Inner';
import Title from '../../components/Title/Title';

export default function Logout() {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(userActions.logoutRequest(userInfo));

    setUserInfo({});
  };

  return (
    <>
      <Head>
        <title>로그아웃</title>
      </Head>
      <Form onSubmit={handleSubmit}>
        <Inner>
          <Title>로그아웃</Title>
          <Wrapper>
            <LoginButton variant="contained" endIcon={<SendIcon />} type="submit">
              로그아웃
            </LoginButton>
          </Wrapper>
        </Inner>
      </Form>
    </>
  );
}

const Form = styled.form`
  width: 600px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 8px;
  margin-bottom: 30px;
`;

const LoginButton = styled(Button)`
  width: 100%;
`;
