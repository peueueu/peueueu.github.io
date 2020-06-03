import styled from 'styled-components';


export const EducationWrapper = styled.section`
display: flex;
flex-direction: column;
// width:100%;
width: 50%;
`

export const EducationListWrapper = styled.div`
display: flex;
`

export const EducationList = styled.ul`
// margin-right: 40px;
// @media (max-width: 768px){
//   margin-right: 0;
// }
width: 100%;
`

export const EducationItem = styled.li`
// max-width: 400px;
margin-top: 30px;
// width: 550px;
max-width: 400px;
min-width:290px;
min-height: 100px;
border-left: 3px solid #03bd4e;
background: #fff;
padding: 20px;
border-radius: 10px;
box-shadow: 0px 0px 5px rgba(0, 0, 0, .4);
// padding: 20px;
// @media (max-width: 768px){
//   width: 300px;
// }
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
@media (max-width: 768px){
  font-size: 1.5rem;
}
`