import styled from 'styled-components';
import { oblivionTheme } from '../../styles/colors';

export const SidebarWrapper = styled.aside`
width: 15rem;
padding: 2rem;
position: fixed;
background: ${oblivionTheme.darker};
height: 100vh;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;

@media(max-width: 1170px){
  transform: translateX(-100vw);
  overflowX: hidden;
}
`