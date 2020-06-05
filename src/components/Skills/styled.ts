import styled from 'styled-components';
import { oblivionTheme } from '../../styles/colors';

export const SkillListWrapper = styled.section`
margin-top: 30px;
`
export const SkillListTitle = styled.h1`
font-size: 2.5rem;
color: ${oblivionTheme.textColor};
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
  background: ${oblivionTheme.textDetails};
}
@media (max-width: 768px){
  font-size: 1.5rem;
}
`
export const SkillList = styled.ul`
display: flex;
flex-wrap: wrap;
margin-top: 25px;
@media(max-width: 330px){
  justify-content: center;
}
`
export const SkillListItem = styled.li`
width: 180px;
height: 120px;
padding: 10px;
margin-right: 25px;
margin-bottom: 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #fff;
border-radius: 15px;
box-shadow: 0px 0px 5px rgba(0, 0, 0, .3);
border-right: 3px solid transparent;
border-left: 3px solid transparent;

&:hover {
  transform: scale(1.15);
  transition: all .5s ease;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
  border-right: 3px solid ${oblivionTheme.textDetails};
  border-left: 3px solid ${oblivionTheme.textDetails};
}

@media (max-width: 1170px){
  width: 140px;
  margin: 20px;
}

@media (max-width: 768px){
  width: 120px;
  margin: 10px;
}

@media(max-width: 330px){
  width: 180px;
}
`

export const SkillItemLabel = styled.p`
font-size: 1rem;
color: ${oblivionTheme.textColor};
font-weight: bold;
margin-top: 10px;
letter-spacing: .7px;
font-family: 'Hind', sans-serif;
`