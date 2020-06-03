import styled from 'styled-components';


export const CardWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
`

export const Course = styled.h1`
font-size: 1.5rem;
margin-bottom: 20px;
color: #03bd4e;
font-weight: bold;
letter-spacing: .7px;
font-family: 'Hind', sans-serif;
@media (max-width: 768px){
  font-size: 1.25rem;
}
`
export const Institution = styled.h3`
font-size: 1rem;
display: inline-block;
color: #0d0d0d;
font-weight: bold;
margin-bottom: 20px;
letter-spacing: .7px;
font-family: 'Hind', sans-serif;
`


export const Period = styled.span`
font-size: 1rem;
color: #606060;
letter-spacing: 2px;
font-family: 'Hind', sans-serif;
`