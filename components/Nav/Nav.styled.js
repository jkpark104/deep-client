import styled from '@emotion/styled';
import tab from '@mui/material/Tab';

const Nav = styled.nav`
  margin: 0 auto;
  width: 1100px;
`;

const Tab = styled(tab)`
  &:hover,
  &:focus-visible {
    box-shadow: initial;
  }
`;

export default {
  Nav,
  Tab,
};
