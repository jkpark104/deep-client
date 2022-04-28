import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Inner from '../components/Inner/Inner';

export default function Home() {
  const [time, setTime] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5001/api/now').then((res) => {
      const { data } = res;

      setTime(data.now);
    });
  }, []);

  return (
    <>
      <Head>
        <title>메인</title>
      </Head>
      <Inner as="h2">
        <time dateTime={time}>{time}</time>
      </Inner>
    </>
  );
}
