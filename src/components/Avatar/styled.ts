import styled from 'styled-components';

export const AvatarWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
// margin-top: 20px;

div {
  filter: blur(.4px);
  text-align:center;
    h1 {
      margin-top: 20px;
      font-size: 2rem;
      font-family: 'Hind', sans-serif;
      font-weight: bold;
      letter-spacing: .7px;
      color: #fff;
      text-shadow: 0px 0px 3px rgba(0, 0, 0, .3);
    }

    span {
      font-size: 1.25rem;
      font-family: 'Hind', sans-serif;
      color: #04D976;
      text-shadow: 0px 0px 3px rgba(0, 0, 0, .3);
    }
    p{
      margin-top: 10px;
      font-family: 'Hind', sans-serif;
      line-height: 18px;
      color: #fff;
    }
}
`

export const ImageWrapper = styled.div`
background: #394021;
padding:20px;
border-radius: 50%/50%;
`