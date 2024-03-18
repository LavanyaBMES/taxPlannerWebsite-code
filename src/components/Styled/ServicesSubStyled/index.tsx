
import styled from "styled-components";

export const StyledBox1 = styled.div`
  display: block;
  width: 350px;
  height:auto;
  @media (max-width: 768px) {
    width: 100%;
  } 
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 280px;
    height:auto;
  }

  @media (min-width: 1400px) {
    width: 400px;
    height:auto;
  }
`;

export const StyledBox2 = styled.div`
  display: none;
  width: 350px;
  height:auto;
  @media (max-width: 768px) {
    width: 100%;
    height:auto;
  } 
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 280px;
    height:auto;
  }
  @media (min-width: 1400px) {
    width: 400px;
    height:auto;
  } 
`;

export const Wrapper = styled.div`
  width: 100%;
  display: inline-block;
  height:auto;
  &:hover {
    background-color: #01acf1;
    transition: 0.5s;
    color: #fff;
  }

  &:hover ${StyledBox1} {
    display: none;
  }

  &:hover ${StyledBox2} {
    display: block;
  }
`;