import styled from 'styled-components';


export const AvatarWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const ContentWrapper = styled.div`
filter: blur(.4px);
text-align:center;
`

export const Title = styled.h1`
  margin-top: 20px;
  font-size: 2rem;
  font-family: 'Hind', sans-serif;
  font-weight: bold;
  letter-spacing: .7px;
  color: #fff;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, .3);
`

export const Subtitle = styled.h2`
font-size: 1.25rem;
font-family: 'Hind', sans-serif;
color: #03bd4e;
font-weight:bold;
text-shadow: 0px 0px 3px rgba(0, 0, 0, .3);
`

export const Description = styled.p`
margin-top: 10px;
font-family: 'Hind', sans-serif;
line-height: 18px;
color: #fff;
`

export const ImageWrapper = styled.div`
padding: 13px;
width: 100px;
height: 100px;


img{ 
  max-width: 100%;
  height: auto;
  border-radius: 50%/50%;
}
`