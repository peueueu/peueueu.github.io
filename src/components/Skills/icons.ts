import styled, { keyframes } from 'styled-components';
import { oblivionTheme } from '../../styles/colors'

import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo';
import { Html5 } from '@styled-icons/boxicons-logos/Html5';
import { Css3 } from '@styled-icons/boxicons-logos/Css3';
import { Bootstrap } from '@styled-icons/boxicons-logos/Bootstrap';
import { Javascript } from '@styled-icons/boxicons-logos/Javascript';
import { Wordpress } from '@styled-icons/boxicons-logos/Wordpress';
import { Sass } from '@styled-icons/boxicons-logos/Sass';
import { Gatsby } from '@styled-icons/remix-fill/Gatsby';
import { Figma } from '@styled-icons/boxicons-logos/Figma';
import { Git } from '@styled-icons/boxicons-logos/Git';
import { Jquery } from '@styled-icons/boxicons-logos/Jquery';
import { Adobe } from '@styled-icons/boxicons-logos/Adobe';

const svgAnimation = keyframes`
0% {
  stroke-dashoffset: 1000;
  fill: ${oblivionTheme.textDetails};
  fill-opacity: 0;
}
80% {
  stroke-dashoffset: 500;
  stroke-opacity: .9;
  stroke: ${oblivionTheme.textDetails};
}
100% {
  stroke-dashoffset: 0;
  stroke-opacity: 0;
  fill: ${oblivionTheme.textDetails};
  fill-opacity: 1;
}
`

const ReactIcon = styled(ReactLogo)`
fill: none;
stroke-width: .65px;
stroke: ${oblivionTheme.textDetails};
width: 64px;
height: 64px;
stroke-dashoffset: 1000;
stroke-dasharray: 1000;
animation ${svgAnimation} 4s ease-in-out forwards ;
`

const HtmlIcon = styled(Html5)`
fill: none;
stroke-width: .65px;
stroke: ${oblivionTheme.textDetails};
width: 64px;
height: 64px;
stroke-dashoffset: 1000;
stroke-dasharray: 1000;
animation ${svgAnimation} 3s ease-in-out forwards;
`

const CssIcon = styled(Css3)`
fill: none;
stroke-width: .65px;
stroke: ${oblivionTheme.textDetails};
width: 64px;
height: 64px;
stroke-dashoffset: 1000;
stroke-dasharray: 1000;
animation ${svgAnimation} 3s ease-in-out forwards;
`

const BootstrapIcon = styled(Bootstrap)`
fill: none;
stroke-width: .65px;
stroke: ${oblivionTheme.textDetails};
width: 64px;
height: 64px;
stroke-dashoffset: 1000;
stroke-dasharray: 1000;
animation ${svgAnimation} 3s ease-in-out forwards;
`

const JavascriptIcon = styled(Javascript)`
fill: none;
stroke-width: .65px;
stroke: ${oblivionTheme.textDetails};
width: 64px;
height: 64px;
stroke-dashoffset: 1000;
stroke-dasharray: 1000;
animation ${svgAnimation} 3s ease-in-out forwards;
`

const WordpressIcon = styled(Wordpress)`
fill: none;
stroke-width: .65px;
stroke: ${oblivionTheme.textDetails};
width: 64px;
height: 64px;
stroke-dashoffset: 1000;
stroke-dasharray: 1000;
animation ${svgAnimation} 3s ease-in-out forwards;
`

const SassIcon = styled(Sass)`
fill: none;
stroke-width: .65px;
stroke: ${oblivionTheme.textDetails};
width: 64px;
height: 64px;
stroke-dashoffset: 1000;
stroke-dasharray: 1000;
animation ${svgAnimation} 3s ease-in-out forwards;
`

const GatsbyIcon = styled(Gatsby)`
fill: none;
stroke-width: .65px;
stroke: ${oblivionTheme.textDetails};
width: 64px;
height: 64px;
stroke-dashoffset: 1000;
stroke-dasharray: 1000;
animation ${svgAnimation} 3s ease-in-out forwards;
`

const FigmaIcon = styled(Figma)`
fill: none;
stroke-width: .65px;
stroke: ${oblivionTheme.textDetails};
width: 64px;
height: 64px;
stroke-dashoffset: 1000;
stroke-dasharray: 1000;
animation ${svgAnimation} 3s ease-in-out forwards;
`

const GitIcon = styled(Git)`
fill: none;
stroke-width: .65px;
stroke: ${oblivionTheme.textDetails};
width: 64px;
height: 64px;
stroke-dashoffset: 1000;
stroke-dasharray: 1000;
animation ${svgAnimation} 3s ease-in-out forwards;
`

const JqueryIcon = styled(Jquery)`
fill: none;
stroke-width: .65px;
stroke: ${oblivionTheme.textDetails};
width: 64px;
height: 64px;
stroke-dashoffset: 1000;
stroke-dasharray: 1000;
animation ${svgAnimation} 3s ease-in-out forwards;
`

const AdobeIcon = styled(Adobe)`
fill: none;
stroke-width: .65px;
stroke: ${oblivionTheme.textDetails};
width: 64px;
height: 64px;
stroke-dashoffset: 1000;
stroke-dasharray: 1000;
animation ${svgAnimation} 3s ease-in-out forwards;
`

type SkillList = any[];

let Icons: SkillList = [
  ReactIcon,
  HtmlIcon,
  CssIcon,
  BootstrapIcon,
  JavascriptIcon,
  WordpressIcon,
  SassIcon,
  GatsbyIcon,
  FigmaIcon,
  GitIcon,
  JqueryIcon,
  AdobeIcon,
]

export default Icons;
