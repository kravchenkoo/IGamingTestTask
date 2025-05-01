import styled from 'styled-components';
import Cards from './Cards';
import BannerInfo from './BannerInfo';
import Circles from './Circles';
import Background from './Background';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useEffect, useState } from 'react';

const StyledTopBanner = styled.div`
  position: relative;
  overflow: hidden;
  perspective: 2300px;
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 528px;
  width: 1200px;
  height: 701px;
  position: absolute;
  top: 115px;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  z-index: 2;
`;

function TopBanner() {
  const bannerBlock = useRef(null);
  const [isAnimationRunning, setIsAnimationRunning] = useState(true);
  useGSAP(() => {
    // elements apear animation
    gsap.from('.cloud1', { left: '-100%', duration: 3 });
    gsap.from('.header', { top: '-100%', duration: 2 });
    gsap.from('.bgimg', { marginBottom: '100%', opacity: 0, duration: 1 });
    gsap.from('.cloud2', {
      top: '-100%',
      duration: 3,
      onComplete: () => {
        setIsAnimationRunning(false);
      },
    });
    gsap
      .timeline()
      .from('.cardsimg', { left: '200%', duration: 1 })
      .from('.cardsbg', {
        width: '0',
        height: '0',
        duration: 2,
        ease: 'elastic.inOut(1)',
      });
    gsap.from('.bannerinfo', {
      marginLeft: '-200%',
      duration: 2,
      delay: 1,
      ease: 'elastic.inOut(1)',
    });
  });
  useEffect(() => {
    if (!isAnimationRunning) {
      let xValue = 0;
      let yValue = 0;

      const parallaxElements = document.querySelectorAll('.parallax');

      bannerBlock.current.addEventListener('mousemove', (e) => {
        xValue = e.clientX - window.innerWidth / 2;
        yValue = e.clientY - bannerBlock.current.offsetHeight / 2;

        // 3d rotation for cards
        let rotateDegreeX =
          (yValue / (bannerBlock.current.offsetHeight / 2)) * 20;
        let rotateDegreeY = (xValue / (window.innerWidth / 2)) * 20;
        const cardsEl = document.querySelector('.cards');
        cardsEl.style.transform = `translateX(-10px) rotateX(${rotateDegreeX}deg) rotateY(${rotateDegreeY}deg)`;

        // parallax for bg circles
        parallaxElements.forEach((el) => {
          let speedx = el.dataset.speedx;
          let speedy = el.dataset.speedy;
          let speedz = el.dataset.speedz;

          let isInLeft =
            parseFloat(getComputedStyle(el).left) < window.innerWidth / 2
              ? 1
              : -1;
          let zValue =
            (e.clientX - parseFloat(getComputedStyle(el).left)) *
            isInLeft *
            0.2;

          el.style.transform = `translateX(${xValue * speedx}px) translateY(${
            yValue * speedy
          }px) translateZ(${zValue * speedz}px)`;
        });
      });
    }
  }, [isAnimationRunning]);
  return (
    <StyledTopBanner ref={bannerBlock}>
      <Background />
      <StyledContainer>
        <BannerInfo />
        <Cards />
      </StyledContainer>
      <Circles />
    </StyledTopBanner>
  );
}

export default TopBanner;
