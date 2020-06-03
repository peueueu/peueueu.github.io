import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
width: 15rem;
padding: 2rem;
position: fixed;
border-right: 1px solid #025920;
background: #012619;
height: 100vh;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;

@media(max-width: 1368px){
  transform: translateX(-100vw);
  overflowX: hidden;
}
`