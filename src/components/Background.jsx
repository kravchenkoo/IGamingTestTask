import styled from 'styled-components';

const BgWrapper = styled.div`
position: relative
  background: linear-gradient(
    135deg,
    #b2f0f0 0%,
    #c9e2ff 25%,
    #d6ccff 50%,
    #cbbcff 75%,
    #a5c3ff 100%
  );
  min-height: 885px;
`;
const Cloud1Wrapper = styled.div`
  position: absolute;
  top: 3%;
  left: 0%;
  display: flex;
  flex-direction: column;
`;
const Cloud2Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 10%;
  display: flex;
  flex-direction: column;
  img {
    &:first-child {
      margin-left: 34px;
    }
  }
`;
const StyledImg = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.1s ease;
`;
function Background() {
  return (
    <>
      <BgWrapper className="bgimg">
        <StyledImg src="/bg.JPEG" />
      </BgWrapper>
      <Cloud1Wrapper className="cloud1">
        <img src="/topOfCloud1.svg" alt="Cloud" />
        <img src="/cloud1.svg" alt="Cloud" />
      </Cloud1Wrapper>
      <Cloud2Wrapper className="cloud2">
        <img src="/topOfCloud2.svg" alt="Cloud" />
        <img src="/cloud2.svg" alt="Cloud" />
      </Cloud2Wrapper>
    </>
  );
}

export default Background;
