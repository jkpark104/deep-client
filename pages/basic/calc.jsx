import { useState } from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';

import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import Inner from '../../components/Inner/Inner';
import Title from '../../components/Title/Title';

export default function Calc() {
  const operationCodes = [
    { value: 'plus', label: '+' },
    { value: 'minus', label: '-' },
    { value: 'multiplication', label: '*' },
    { value: 'division', label: '/' },
  ];

  const [operationCode, setOperationCode] = useState('plus');
  const [numbers, setNumbers] = useState({});

  const handleChange = (event) => {
    setOperationCode(event.target.value);
  };

  const handleClick = () => {
    const { num1, num2 } = numbers;

    if (!num1 || !num2) return;

    switch (operationCode) {
      case 'plus':
        setNumbers((prevState) => ({
          ...prevState,
          result: num1 + num2,
        }));
        break;
      case 'minus':
        setNumbers((prevState) => ({
          ...prevState,
          result: num1 - num2,
        }));
        break;
      case 'multiplication':
        setNumbers((prevState) => ({
          ...prevState,
          result: num1 * num2,
        }));
        break;
      case 'division':
        setNumbers((prevState) => ({
          ...prevState,
          result: num1 / num2,
        }));
        break;
      default:
    }
  };

  const handleNumberInputChange = (e) => {
    setNumbers((prevState) => ({
      ...prevState,
      [e.target.id === 'number1' ? 'num1' : 'num2']: +e.target.value,
    }));
  };

  return (
    <>
      <Head>
        <title>계산기</title>
      </Head>
      <Inner>
        <Title>계산기</Title>
        <Wrapper>
          <TextField
            id="number1"
            label="Number1"
            type="number"
            InputLabelProps={{ shrink: true }}
            onChange={handleNumberInputChange}
            value={numbers.num1 ?? ''}
          />
          <OperationSelector
            id="operationCode"
            select
            label="Select Operation Code"
            value={operationCode}
            onChange={handleChange}
          >
            {operationCodes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </OperationSelector>
          <TextField
            id="number2"
            label="Number2"
            type="number"
            InputLabelProps={{ shrink: true }}
            onChange={handleNumberInputChange}
            value={numbers.num2 ?? ''}
          />
        </Wrapper>
        <Wrapper>
          <Button variant="contained" endIcon={<SendIcon />} onClick={handleClick}>
            계산하기
          </Button>
          <Result>결과 : {numbers.result ?? ''}</Result>
        </Wrapper>
      </Inner>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 8px;
  margin-bottom: 30px;
`;

const OperationSelector = styled(TextField)`
  width: 210px;
`;

const Result = styled.div`
  min-width: 200px;
  border: 1px solid #000;
  font-size: 20px;
  margin-left: 230px;
  padding: 8px;
`;
