import styled from 'styled-components';
import { oblivionTheme } from '../../styles/colors';

export const CourseWrapper = styled.section`
display: flex;
flex-direction: column;
width:100%;
padding-bottom: 60px;
@media(max-width: 1444px){
  width: 100%;
}
`

export const CourseListWrapper = styled.div`
display: flex;
`

export const CourseList = styled.ul`
// margin-right: 40px;
display:flex;
flex-wrap: wrap;
align-items: center;
width: 100%;
`

export const CourseItem = styled.li`
max-width: 320px;
min-width:290px;
min-height: 115px;
border-left: 3px solid ${oblivionTheme.textDetails};
background: #fff;
margin: 30px 30px 0 0;
padding: 20px;
border-radius: 10px;
box-shadow: 0px 0px 5px rgba(0, 0, 0, .4);
// padding: 20px;
@media(max-width: 1444px){
  min-width: 250px;
}
@media(max-width: 411.98px){
  min-width: 250px;
}
`

export const CourseTitle = styled.h1`
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

export const CourseLink = styled.a`
  text-decoration: none;
`