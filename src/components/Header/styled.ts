import styled from 'styled-components';
import { oblivionTheme } from '../../styles/colors';

export const WrapperHeader = styled.div`
position: fixed;
background: ${oblivionTheme.darker};
top: 0px;
left: 0px;
z-index: 1200;
`

export const MobileHeader = styled.section`
align-items: flex-start;
display: flex;
width: 100vw;
padding: 1rem;
display: none;

@media(max-width: 1170px){
  display: block;
}
`