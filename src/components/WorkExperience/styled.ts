import styled from 'styled-components';


export const WorkExpWrapper = styled.section`
display: flex;
flex-direction: column;
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
`

export const WorkExpTitle = styled.h1`
font-size: 2rem;
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