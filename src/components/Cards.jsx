import styled from 'styled-components';
import Circle from './Circle';

const StyledCards = styled.div`
  position: relative;
  top: 0;
  right: 0;
  transform: translateX(-10px) rotateY(0deg) rotateX(0deg);
  transform-origin: 50% 100%;
  transform-style: preserve-3d;
  width: 604px;
  height: 0;
  padding-bottom: 604px;
  perspective: 100px;
  transition: transform 0.45s cubic-bezier(0.2, 0.49, 0.32, 0.99);
  .cardsbg-perspective {
    transform: translateX(-50%) translateY(-50%) translateZ(40px) rotateY(0deg);
  }
`;

const StyledImg = styled.img`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  transform: translateX(-50%) translateY(-50%) translateZ(50px);
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
        className="cardsbg cardsbg-perspective"
        $widthHeight={'calc(60% - 24px)'}
        $color="#72EBF9"
        $zIndex={1}
        $shadow={'0px 17px 24px 0px rgba(5, 140, 173, 0.33)'}
        $transformCenter0
        $position={{ top: '50%', left: '50%' }}
      />
      <StyledImg className="cardsimg" src="/cards.png" alt="Cards" />
    </StyledCards>
  );
}

export default Cards;
