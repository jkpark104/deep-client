import Styled from './A11yHidden.styled';

function A11yHidden({ as, children }) {
  return <Styled.A11yHidden as={as}>{children}</Styled.A11yHidden>;
}

export default A11yHidden;
