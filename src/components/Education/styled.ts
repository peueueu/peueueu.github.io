import styled from 'styled-components';


export const EducationWrapper = styled.section`
display: flex;
flex-direction: column;
width:50%;
`

export const EducationListWrapper = styled.div`
display: flex;
`

export const EducationList = styled.ul`
margin-right: 40px;
`

export const EducationItem = styled.li`
// max-width: 400px;
margin-top: 30px;
background: #fff;
width: 550px;
min-height: 100px;
padding: 20px;
border-radius: 10px;
box-shadow: 0px 0px 5px rgba(0, 0, 0, .4);
`

export const EducationTitle = styled.h1`
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