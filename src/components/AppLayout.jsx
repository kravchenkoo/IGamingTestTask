import styled from 'styled-components';
import TopBanner from './TopBanner';
import Header from './header';

const StyledAppLayout = styled.div``;

const Main = styled.main``;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <TopBanner />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
