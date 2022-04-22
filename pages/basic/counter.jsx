import { useState } from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import Inner from '../../components/Inner/Inner';
import Title from '../../components/Title/Title';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Head>
        <title>카운터</title>
      </Head>
      <Inner>
        <Title>카운터</Title>
        <ButtonGroup size="large" variant="contained">
          <Button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </Button>
          <Button
            onClick={() => {
              setCount(count - 1);
            }}
          >
            -
          </Button>
        </ButtonGroup>
        <Result>결과 : {count}</Result>
      </Inner>
    </>
  );
}

const Result = styled.div`
  font-size: 20px;
  text-align: center;
  margin-top: 30px;
`;
