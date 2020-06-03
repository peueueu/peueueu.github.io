import styled from 'styled-components';

export const WorkExpWrapper = styled.section`
display: flex;
flex-direction: column;
width:50%;
@media (max-width: 1368px){
  width: 100%;
}
`

export const WorkExpListWrapper = styled.div`
display: flex;
`

export const WorkExpList = styled.ul`
margin-right: 40px;
`

export const WorkExpItem = styled.li`
// max-width: 400px;
margin-top: 30px;
width: 550px;
min-height: 100px;
background: #fff;
padding: 20px;
border-radius: 10px;
box-shadow: 0px 0px 5px rgba(0, 0, 0, .4);
`

export const WorkExpTitle = styled.h1`
font-size: 2.5rem;
color: color: #012619;
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
  background: #03bd4e;
}
`