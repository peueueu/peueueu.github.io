import styled from 'styled-components';


export const SocialLinksWrapper = styled.nav`
margin: 2rem auto;
width: 100%;
`

export const SocialLinksList = styled.ul`
align-items:center;
display: flex;
justify-content: space-around;
list-styled: none;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
color: #f2f2f2;
text-decoration: none;

&:hover svg{ 
  fill: #04D976;
  transition: fill .5s ease;
}
`

export const IconWrapper = styled.div`
fill: #bbb;
width: 30px;
height: 30px;
`
