import Styled from './Layout.styled';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import A11yHidden from '../A11yHidden/A11yHidden';

export default function Layout({ children }) {
  return (
    <Styled.Container>
      <A11yHidden as="h1">Deep Brain Project</A11yHidden>
      <Nav />
      <Styled.Main>{children}</Styled.Main>
      <Footer />
    </Styled.Container>
  );
}
