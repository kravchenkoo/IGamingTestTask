import styled from 'styled-components';
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
const CloudImg2 = styled.img`
  position: absolute;
  top: 0%;
  left: 10%;
`;
const StyledImg = styled.img`
  display: block;
  top: 0%;
  left: 0%;
  width: 100%;
  height: auto;
  z-index: 1;
`;
function Background() {
  return (
    <>
      <Cloud1Wrapper className="cloud1">
        <img src="/topOfCloud1.svg" alt="Cloud" />
        <img src="/cloud1.svg" alt="Cloud" />
      </Cloud1Wrapper>
      <Cloud2Wrapper className="cloud2">
        <img src="/topOfCloud2.svg" alt="Cloud" />
        <img src="/cloud2.svg" alt="Cloud" />
      </Cloud2Wrapper>
      <div className="bgimg">
        <StyledImg src="/bgtop.png" />
        <StyledImg src="/bg.png" />
      </div>
    </>
  );
}

export default Background;
