import Styled from './Title.styled';

export default function Title({ children, as }) {
  return <Styled.Title as={as}>{children}</Styled.Title>;
}
