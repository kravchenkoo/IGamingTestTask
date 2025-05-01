import styled, { css } from 'styled-components';

const Circle = styled.div`
  transform: translateX(0) translateY(0);
  /* check wether it a circle or a donut */
  ${(props) =>
    props.$donut
      ? css`
          border: ${(props) => props.$borderWitdth}px solid
            ${(props) => props.$color};
          background-color: transparent;
        `
      : css`
          border: none;
          background-color: ${(props) => props.$color};
        `}
  /* check if wee need a transform center */
  ${(props) =>
    props.$transformCenter &&
    css`
      transform: translateX(-50%) translateY(-50%);
    `}
    /* check if wee need a shadow */
    ${(props) =>
    props.$shadow &&
    css`
      box-shadow: ${props.$shadow};
    `}
  /* check if wee need a blur */
  ${(props) =>
    props.$blur &&
    css`
      filter: blur(${(props) => props.$blur}px);
    `}
    /* check if wee need a zindex */
    ${(props) =>
    props.$zIndex &&
    css`
      z-index: ${(props) => props.$zIndex};
    `}
    

  position: absolute;
  /* width and height are always equal because wee need a circle */
  width: ${(props) => props.$widthHeight};
  height: ${(props) => props.$widthHeight};
  border-radius: 50%;
  top: ${(props) => props.$position.top};
  left: ${(props) => props.$position.left};
  transition: transform 0.45s cubic-bezier(0.2, 0.49, 0.32, 0.99);
`;
export default Circle;
