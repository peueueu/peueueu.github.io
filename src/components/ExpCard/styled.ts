import styled, { keyframes } from 'styled-components';
import { oblivionTheme } from '../../styles/colors';

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`

export const IntroWrapper = styled.div`
div {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
@media (max-width: 910px){
  &:first-of-type {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  }
}
}
`

export const Title = styled.h1`
font-size: 1.5rem;
color: ${oblivionTheme.textDetails};
font-weight: bold;
letter-spacing: .7px;
font-family: 'Hind', sans-serif;
`
export const Role = styled.h3`
font-size: 1rem;
padding: 11px;
border-radius: 10px;
background: ${oblivionTheme.textDetails};
display: inline-block;
color: #f2f2f2;
font-weight: bold;
letter-spacing: .7px;
font-family: 'Hind', sans-serif;
@media (max-width: 910px){
  background: transparent;
  padding: 5px 0;
  color: ${oblivionTheme.textColor};
}
`

export const ExtraInfo = styled.span`
font-size: 1rem;
color: #606060;
letter-spacing: 2px;
font-family: 'Hind', sans-serif;
`

export const Description = styled.p`
font-size: 1.25rem;
color: ${oblivionTheme.textColor};
margin-top: 15px;
line-height: 22px;
animation: ${fadeIn} 1s;
font-family: 'Hind', sans-serif;
`

export const DescriptionToggler = styled.button`
font-size: 1rem;
transition: color .5s ease;
font-weight: bold;
margin-bottom: 10px;
font-family: 'Hind', sans-serif;
text-decoration: none;
cursor: pointer;
display: flex;
align-items: center;
border: 2px solid #bebebe;
border-radius: 7px;

&:focus {
  outline: none;
}

span {
  font-size: .75rem;
  svg {
    margin-top: 5px;
  }
}
`

