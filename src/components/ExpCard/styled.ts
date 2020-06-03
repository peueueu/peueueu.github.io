import styled, { keyframes } from 'styled-components';


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
}
`

export const Title = styled.h1`
font-size: 1.5rem;
color: #03bd4e;
font-weight: bold;
letter-spacing: .7px;
font-family: 'Hind', sans-serif;
`
export const Role = styled.h3`
font-size: 1rem;
padding: 11px;
border-radius: 10px;
background: #03bd4e;
display: inline-block;
color: #f2f2f2;
font-weight: bold;
letter-spacing: .7px;
font-family: 'Hind', sans-serif;
`

export const ExtraInfo = styled.span`
font-size: 1rem;
color: #606060;
letter-spacing: 2px;
font-family: 'Hind', sans-serif;
`

export const Description = styled.p`
font-size: 1.25rem;
color: #0d0d0d;
margin-top: 15px;
line-height: 22px;
animation: ${fadeIn} 1s;
font-family: 'Hind', sans-serif;
`

export const DescriptionToggler = styled.a`
font-size: 1rem;
transition: color .5s ease;
font-weight: bold;
margin-bottom: 10px;
font-family: 'Hind', sans-serif;
text-decoration: none;

span {
  font-size: .75rem;
}
`

