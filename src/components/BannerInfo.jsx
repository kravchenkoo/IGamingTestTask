import styled from 'styled-components';
const StyledH1 = styled.h1`
  z-index: 2;
  font-size: 5.6rem;
  font-family: 'Montserrat', sans-serif;
  width: 672px;
  color: #fff;
  font-weight: 700;
  text-shadow: 0px 2px 2px rgba(64, 47, 255, 0.3);
`;
const StyledH3 = styled.h3`
  z-index: 2;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 400;
  width: 672px;
  line-height: 135%;
  margin-top: 50px;
  letter-spacing: 1px;
`;
const StyledButton = styled.button`
  background-color: #8258ff;
  border-radius: 3px;
  margin-top: 86px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  padding: 13px 90px 18px;
`;
const StyledWrapper = styled.div`
  z-index: 2;
`;
function BannerInfo() {
  return (
    <StyledWrapper className="bannerinfo">
      <StyledH1>
        Come to our house and get revenue share up to 50% for life
      </StyledH1>
      <StyledH3>
        Individual approach and generous offers for each affiliate
      </StyledH3>
      <StyledButton>Sign up</StyledButton>
    </StyledWrapper>
  );
}

export default BannerInfo;
