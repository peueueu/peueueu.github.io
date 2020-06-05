import styled from 'styled-components';


export const SocialLinksWrapper = styled.nav`
margin: 2rem auto;
width: 100%;
margin-left: 10px;
`

export const SocialLinksList = styled.ul`
align-items:center;
display: flex;
width: inherit;
justify-content: space-around;
`

export const SocialLinksItem = styled.li`

`

export const SocialLinksLink = styled.a`
color: #f2f2f2;
text-decoration: none;

&:hover svg{ 
  fill: #fff;
  transform: scale(1.15);
  transition: all .6s ease;
}
`

export const IconWrapper = styled.div`
fill: #bbb;
width: 30px;
height: 30px;
`
