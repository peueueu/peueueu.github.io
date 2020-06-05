import styled from 'styled-components';
import { oblivionTheme } from '../../styles/colors';

export const AvatarWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media(max-width: 1170px){
  flex-direction: row;
  justify-content: flex-start;
}
`

export const ContentWrapper = styled.div`
filter: blur(.4px);
text-align:center;
@media(max-width: 1170px){
  text-align: left;
  margin-left: 10px;
}
`

export const Title = styled.h1`
  margin-top: 20px;
  font-size: 2rem;
  font-family: 'Hind', sans-serif;
  font-weight: bold;
  letter-spacing: .7px;
  color: #fff;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, .3);
  @media (max-width: 1170px){
    margin-top: 10px;
    font-size: 1.25rem;
  }
`

export const Subtitle = styled.h2`
font-size: 1.25rem;
font-family: 'Hind', sans-serif;
color: ${oblivionTheme.textDetails};
font-weight:bold;
text-shadow: 0px 0px 3px rgba(0, 0, 0, .3);
@media(max-width: 1170px){
  font-size: 1rem;
}
`

export const Description = styled.p`
margin-top: 10px;
font-family: 'Hind', sans-serif;
line-height: 18px;
color: #f2f2f2;
`

export const ImageWrapper = styled.div`
padding: 13px;
width: 100px;
height: 100px;

img{ 
  max-width: 100%;
  height: auto;
  border-radius: 50%/50%;
}

@media(max-width: 1170px){
padding: 0px 5px;
width: 65px;
height: 65px;
}
`