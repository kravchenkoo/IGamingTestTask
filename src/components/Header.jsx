import styled from 'styled-components';

const StyledHeader = styled.header`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  max-width: 1200px;
  z-index: 10;
`;

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 0 0 auto;
  padding: 0;
  gap: 30px;
  font-weight: 500;
  color: #fff;
  font-size: 1.6rem;
  li {
    cursor: pointer;
    &:hover {
      color: #72ebf9;
    }
  }
`;

const StyledButtons = styled.div`
  display: flex;
  gap: 5px;
  margin-left: 40px;
  color: #fff;
  button {
    padding: 9px 30px 12px;
    background-color: transparent;
    border: none;
    &.signup {
      border: 1px solid #fff;
      border-radius: 3px;
    }
  }
`;
function Header() {
  return (
    <StyledHeader className="header">
      <img src="/logo.svg" alt="" />
      <StyledUl>
        <li>About us</li>
        <li>Commission</li>
        <li>Testimonials</li>
        <li>News</li>
        <li>FAQ</li>
        <li>Contacts</li>
      </StyledUl>
      <StyledButtons>
        <button className="login">Login</button>
        <button className="signup">Sign up</button>
      </StyledButtons>
    </StyledHeader>
  );
}

export default Header;
