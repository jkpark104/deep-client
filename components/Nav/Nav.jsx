import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';

import Styled from './Nav.styled';

export default function Nav() {
  const router = useRouter();
  const [navIndex, setNavIndex] = useState(0);

  const [navInfos, setNavInfos] = useState([
    { name: '메인', link: '/' },
    { name: '카운터', link: '/basic/counter' },
    { name: '계산기', link: '/basic/calc' },
    { name: 'BMI', link: '/basic/bmi' },
  ]);

  const handleChange = (e, newValue) => {
    setNavIndex(newValue);
    router.push(navInfos[newValue].link);
  };

  useEffect(() => {
    setNavInfos((prevState) => {
      const loginUser = window.localStorage.getItem('loginUser');
      const basicNavInfos = prevState.filter(({ link }) => link.match(/^\/basic|^\/$/));

      return loginUser
        ? [
            ...basicNavInfos,
            { name: '로그아웃', link: '/user/logout' },
            { name: '프로필', link: '/user/profile' },
            { name: '회원수정', link: '/user/modifyUser' },
            { name: '회원탈퇴', link: '/user/withdrawUser' },
            { name: '회원목록', link: '/user/getUsers' },
          ]
        : [
            ...basicNavInfos,
            { name: '회원가입', link: '/user/join' },
            { name: '로그인', link: '/user/login' },
          ];
    });
  }, []);

  useEffect(() => {
    const initialNavIndex = navInfos.findIndex(({ link }) => link === router.pathname);

    setNavIndex(initialNavIndex);
  }, [navInfos, router.pathname]);

  return (
    <Styled.Nav>
      <Box sx={{ width: '100%' }}>
        <Tabs value={navIndex} onChange={handleChange} centered>
          {navInfos.map(({ name }) => (
            <Styled.Tab key={name} label={name} />
          ))}
        </Tabs>
      </Box>
    </Styled.Nav>
  );
}
