import styled from 'styled-components';
import { oblivionTheme } from '../../styles/colors';

export const WorkExpWrapper = styled.section`
display: flex;
flex-direction: column;
width:50%;
// width: 100%;
@media (max-width: 1444px){
  width: 100%;
}
`

export const WorkExpListWrapper = styled.div`
display: flex;
`

export const WorkExpList = styled.ul`
margin-right: 40px;
width: 100%;
@media (max-width: 1444px){
  margin-right: 0px;
}
`

export const WorkExpItem = styled.li`
// max-width: 400px;
margin-top: 30px;
max-width: 500px;
border-left: 3px solid ${oblivionTheme.textDetails};
min-width:290px;
min-height: 100px;
background: #fff;
padding: 20px;
border-radius: 10px;
box-shadow: 0px 0px 5px rgba(0, 0, 0, .4);
@media (max-width: 1444px){
  max-width: 100%;
}
`

export const WorkExpTitle = styled.h1`
font-size: 2.5rem;
color: ${oblivionTheme.textColor};
font-weight: bold;
margin: 30px 0 0 0;
font-family: 'Hind', sans-serif;
position: relative;
&:after {
  content: "";
  position: absolute;
  width: 40px;
  bottom: -5px;
  height: 2px;
  display: block;
  background: ${oblivionTheme.textDetails};
}
@media (max-width: 768px){
  font-size: 1.5rem;
}
`