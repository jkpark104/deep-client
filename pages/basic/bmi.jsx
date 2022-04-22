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
      [e.target.name]: e.target.name === 'name' ? e.target.value : +e.target.value,
    }));
  };

  return (
    <>
      <Head>
        <title>BMI</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <Inner>
          <Title>BMI</Title>
          <Input id="name" name="name" label="이름" onChange={handleInputChange} />
          <Input
            id="height"
            name="height"
            label="키 (cm)"
            type="number"
            onChange={handleInputChange}
          />
          <Input
            id="weight"
            name="weight"
            label="몸무게 (kg)"
            type="number"
            onChange={handleInputChange}
          />
          <Wrapper>
            <Button variant="contained" endIcon={<SendIcon />} type="submit">
              BMI 체크
            </Button>
            <Result>
              <div>이름 : {result.name ?? ''}</div>
              <div>키 : {result.height ?? ''}</div>
              <div>몸무게 : {result.weight ?? ''}</div>
              <div>BMI 결과 : {result.bmi ?? ''}</div>
            </Result>
          </Wrapper>
        </Inner>
      </form>
    </>
  );
}

const Input = styled(TextField)`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 8px;
  margin-bottom: 30px;
`;

const Result = styled.div`
  min-width: 200px;
  border: 1px solid #000;
  font-size: 20px;
  margin-left: 230px;
  padding: 8px;
`;
