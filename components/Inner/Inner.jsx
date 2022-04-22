import Styled from './Inner.styled';

export default function Inner({ children, as }) {
  return <Styled.Inner as={as}>{children}</Styled.Inner>;
}
