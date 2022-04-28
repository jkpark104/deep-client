import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Head from 'next/head';

import styled from '@emotion/styled';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { userActions } from '../../redux/reducers/userReducer';

import Inner from '../../components/Inner/Inner';
import Title from '../../components/Title/Title';

export default function Join() {
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(userActions.joinRequest(userInfo));
    setUserInfo({});
  };

  const handleInputChange = (e) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const { email, phone, birth, name, id, password, address } = userInfo;

  return (
    <>
      <Head>
        <title>회원가입</title>
      </Head>
      <Form onSubmit={handleSubmit}>
        <Inner>
          <Title>회원가입</Title>
          <Input
            id="id"
            name="id"
            label="사용자 ID"
            onChange={handleInputChange}
            value={id ?? ''}
          />
          <Input
            id="password"
            name="password"
            label="비밀번호"
            onChange={handleInputChange}
            value={password ?? ''}
          />
          <Input
            id="email"
            name="email"
            label="이메일"
            onChange={handleInputChange}
            value={email ?? ''}
          />
          <Input
            id="name"
            name="name"
            label="이름"
            onChange={handleInputChange}
            value={name ?? ''}
          />
          <Input
            id="phone"
            name="phone"
            label="전화번호"
            onChange={handleInputChange}
            value={phone ?? ''}
          />
          <Input
            id="birth"
            name="birth"
            label="생년월일"
            onChange={handleInputChange}
            value={birth ?? ''}
          />
          <Input
            id="address"
            name="address"
            label="주소"
            onChange={handleInputChange}
            value={address ?? ''}
          />
          <Wrapper>
            <JoinButton variant="contained" endIcon={<SendIcon />} type="submit">
              회원가입
            </JoinButton>
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

const JoinButton = styled(Button)`
  width: 100%;
`;
