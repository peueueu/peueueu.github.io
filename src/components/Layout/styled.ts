import styled from 'styled-components';

export const LayoutWrapper = styled.section`
display: flex;
`

export const LayoutMain = styled.main`
background: #f2f2f2;
min-height: 100vh;
padding: 50px 5rem 0 22rem;
width:100%;

@media(max-width: 1170px){
  padding: 50px 5rem 0 5rem;
}
@media (max-width: 768px){
  padding: 50px 20px 0 20px;
}
`