import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from './icons';

import { SocialLinksWrapper, SocialLinksLink, SocialLinksItem, SocialLinksList, IconWrapper } from './styled'

const SocialLinks: React.FC = () => {
  return (
    <SocialLinksWrapper>
      <SocialLinksList>
        <SocialLinksItem>
          <SocialLinksLink href="https://github.com/peueueu" target="_blank" rel="noopener noreferrer">
            <IconWrapper>
              <GithubIcon />
            </IconWrapper>
          </SocialLinksLink>
        </SocialLinksItem>

        <SocialLinksItem>
          <SocialLinksLink href="https://www.linkedin.com/in/peu" target="_blank" rel="noopener noreferrer">
            <IconWrapper>
              <LinkedinIcon />
            </IconWrapper>
          </SocialLinksLink>
        </SocialLinksItem>

        <SocialLinksItem>
          <SocialLinksLink href="https://www.instagram.com/peueueueu" target="_blank" rel="noopener noreferrer">
            <IconWrapper>
              <InstagramIcon />
            </IconWrapper>
          </SocialLinksLink>
        </SocialLinksItem>


        <SocialLinksItem>
          <SocialLinksLink href="https://twitter.com/Peueueueu" target="_blank" rel="noopener noreferrer">
            <IconWrapper>
              <TwitterIcon />
            </IconWrapper>
          </SocialLinksLink>
        </SocialLinksItem>
        <SocialLinksItem>

        </SocialLinksItem>
      </SocialLinksList>
    </SocialLinksWrapper>
  )
}

export default SocialLinks;