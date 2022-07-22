import styled from "styled-components";

export const TextInter = styled.p<{size?: string; weight?: number}>`
  font-family: Inter, sans-serif;
  font-size: ${props => props.size ? props.size : '1rem'};
  font-weight: ${props => props.weight ? props.weight : 500};
  color: #5F1478;
  letter-spacing: 0px;
  opacity: 1;
`