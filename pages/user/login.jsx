import { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import styled from '@emotion/styled';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import Inner from '../../components/Inner/Inner';
import Title from '../../components/Title/Title';

export default function Bmi() {
  const [userInfo, setUserInfo] = useState({});
  const [result, setResult] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/basic/bmi', userInfo)
      .then((res) => {
        setResult({
          ...res.data,
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  const handleInputChange = (e) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Head>
        <title>로그인</title>
      </Head>
      <Form onSubmit={handleSubmit}>
        <Inner>
          <Title>로그인</Title>
          <Input id="id" name="id" label="사용자 ID" onChange={handleInputChange} />
          <Input id="password" name="password" label="비밀번호" onChange={handleInputChange} />
          <Wrapper>
            <LoginButton variant="contained" endIcon={<SendIcon />} type="submit">
              로그인
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

const Input = styled(TextField)`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
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
