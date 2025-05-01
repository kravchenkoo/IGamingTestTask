import styled from 'styled-components';
import Circle from './Circle';

const StyledCards = styled.div`
  position: relative;
  top: 0;
  right: 0;
  transform: translateX(-10px);
  width: 604px;
  height: 0;
  padding-bottom: 604px;
`;

const StyledImg = styled.img`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

function Cards() {
  return (
    <StyledCards className="cards">
      <Circle
        className="cardsbg"
        $widthHeight={'calc(100% + 96px)'}
        $color="rgba(114, 235, 249, 0.3)"
        $zIndex={1}
        $transformCenter
        $position={{ top: '50%', left: '50%' }}
      />
      <Circle
        className="cardsbg"
        $widthHeight={'calc(100% - 24px)'}
        $color="#72EBF9"
        $zIndex={1}
        $shadow={'0px 17px 24px 0px rgba(5, 140, 173, 0.33)'}
        $transformCenter
        $position={{ top: '50%', left: '50%' }}
      />
      <StyledImg className="cardsimg" src="/cards.png" alt="Cards" />
    </StyledCards>
  );
}

export default Cards;
