import styled from 'styled-components';



export const AboutWrapper = styled.section`
`

export const Title = styled.h1`
font-size: 2.5rem;
color: #012619;
font-family: 'Hind', sans-serif;
position: relative;
margin-bottom: 15px;
font-weight: bold;
&:after {
  content: "";
  position: absolute;
  width: 40px;
  bottom: 0;
  height: 2px;
  display: block;
  background: #03bd4e;
}
`

export const AboutContent = styled.p`
font-size: 1.25rem;
line-height: 22px;
margin-top: 20px;
color: #0d0d0d;
font-family: 'Hind', sans-serif;
`