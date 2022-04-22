import { useState, useLayoutEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';

import Styled from './Nav.styled';

export default function Nav() {
  const router = useRouter();
  const [navIndex, setNavIndex] = useState(0);

  const navInfos = useMemo(
    () => [
      { name: '메인', link: '/' },
      { name: '카운터', link: '/basic/counter' },
      { name: '계산기', link: '/basic/calc' },
      { name: 'BMI', link: '/basic/bmi' },
      { name: '투두리스트', link: '/todo/todo' },
      { name: '게시글등록', link: '/board/board' },
      { name: '게시글목록', link: '/board/board-list' },
      { name: '회원가입', link: '/user/join' },
      { name: '로그인', link: '/user/login' },
      { name: '사용자목록', link: '/user/user-list' },
    ],
    []
  );

  const handleChange = (e, newValue) => {
    setNavIndex(newValue);
    router.push(navInfos[newValue].link);
  };

  useLayoutEffect(() => {
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
