import styled from 'styled-components';
import TopBanner from './TopBanner';

const StyledAppLayout = styled.div``;

const Main = styled.main``;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Main>
        <TopBanner />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
