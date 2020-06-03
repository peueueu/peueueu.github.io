import styled from 'styled-components';



export const AboutWrapper = styled.section`
@media (max-width: 1368px) {
  padding-top: 80px;
}
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
@media (max-width: 768px){
  font-size: 1.5rem;
}
`

export const AboutContent = styled.p`
font-size: 1.25rem;
line-height: 22px;
margin-top: 20px;
color: #0d0d0d;
font-family: 'Hind', sans-serif;
@media (max-width: 768px){
  font-size: 1rem;
}
`