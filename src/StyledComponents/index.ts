import styled, { keyframes } from "styled-components";
type PRIMARY_COLOR = '#5F1478';
type ALT_COLOR = '#263238';

export const DefaultLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    "header"
    "main";
  grid-template-rows: 1fr 9fr;
  grid-template-columns: 100vw;
`

export const Corpo = styled.div`
  grid-area: main;
  background: #F6F4F6 0% 0% no-repeat padding-box;
  opacity: 1;
  margin-top: 58px;
`

export const HeaderStyled = styled.div`
  grid-area: header;
  background-color: #000;
  background: linear-gradient(to bottom right, #601478, #A92670);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  display: flex;
  padding: 10px 20px;
  align-items: center;
  border-bottom: 1px solid ;
  position: fixed;
  z-index:10;
  width: 100%;
  top:0;
`


export const ContainerFlex = styled.div<{centerOnMobile?:boolean; ai?: string; mt?: string; width?: string; fw?: string; jc?: string; fd?: string }>`
  display: flex;
  justify-content:${props => props.jc};
  width: ${props => props.width};
  padding:10px;
  flex-direction: ${props => props.fd} ;
  flex-wrap: ${props => props.fw};
  margin-top: ${props => props.mt};
  align-items: ${props => props.ai};
  overflow: hidden;

  @media (max-width: 550px) {
    width: ${props=> props.centerOnMobile ? '100%':'90%'};
    justify-content: ${props=> props.centerOnMobile ? 'center': 'left'};
  }
`

export const BottomButtons = styled.div`
  display: flex;
  width:100%;
  padding:10px;
  flex-wrap: wrap;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: inset 0px 3px 6px #0000000F;
  overflow: hidden;
`

export const Text = styled.p<{ta?:string; lh?:string;color?: PRIMARY_COLOR | ALT_COLOR; size?: string; weight?: number; mt?:string;}>`
  font-family: Inter, sans-serif;
  font-size: ${props => props.size ? props.size : '1rem'};
  font-weight: ${props => props.weight ? props.weight : 500};
  color: ${props=>props.color ? props.color : '#5F1478'};
  letter-spacing: 0px;
  opacity: 1;
  margin-top:${props => props.mt};
  line-height: ${props=>props.lh? props.lh : '35px'};
  text-align: ${props=> props.ta? props.ta: 'left'} ;
`

export const TextH1 = styled.h1`
  ${Text}
  @media (max-width:450px) {
    font-size: 1.5rem !important;
  }
`


export const Card = styled.div<{pb?:string}>`
    width: 260px;
    min-height: 267px;
    background: var(---cor-branco) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    /* background-color: yellow; */
    box-shadow: 0px 3px 6px #E5E5E5;
    border: 1px solid #E4E4E4;
    border-radius: 8px;
    opacity: 1;
    margin:20px;
    display:flex;
    flex-direction:column;
    align-items: center;
    padding: 30px;
    position:relative ;
    padding-bottom: ${props=>props.pb};
`


export const IconButton = styled.button`
    padding: 10px 20px;
    flex:1 ;
    background-color: transparent;
    display: flex;
    align-items:center;
    justify-content: center;
    gap: 10px;
    justify-self:flex-end ;
    transition: 0.3s ease;
    &:focus {
        outline: none;
        border:none;
    }
    &:hover {
    outline: none;
    border:none;
    opacity:0.6;
  }
`

export const Button = styled.button`
  font-family: Inter, sans-serif;
  width: 173px;
  min-width: 133px;
  min-height: 48px;
  max-height: 60px;
  background: var(---cor-destaque) 0% 0% no-repeat padding-box;
  background: #E76316 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #92207242;
  border-radius: 8px;
  opacity: 1;
  padding: 10px 20px;
  color: #fff;
  margin-left: 5px;
  margin-right:5px;
  transition: 0.1s ease;

  &:focus {
        outline: none;
        border:none; 
    }
  &:hover {
    outline: none;
    border:none;
    opacity:0.9 ;
}
@media (max-width: 845px) {
    margin-top: 20px !important;
}

@media (max-width: 455px) {
  font-size: 0.8rem ;
  width: 140px ;
}
`


export const PaginationComp = styled.div`
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:10px;
    button:focus {
      outline: none;
      border:none ;
    }
    
`

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const Skeleton = styled.span<{h?:string; w?:string}>`
    display: inline-block;
    width: ${props=> props.w ? props.w : '260px'};
    /* min-height: ${props => props.w? props.w : '267px'}; */
    height: ${props => props.h? props.h : '267px'};
    animation: ${skeletonKeyframes} 1300ms ease-in-out infinite;
    background-color: #e7e2e2;
    background-image: linear-gradient(
    90deg,
    #e7e2e2,
    #f5f5f5,
    #e7e2e2
    );
    background-size: 200px 100%;
    background-repeat: no-repeat;
    border-radius: 8px;
    margin:20px;
`