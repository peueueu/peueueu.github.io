import React from 'react';
import Icons from './icons';
import { SkillListWrapper, SkillListTitle, SkillList, SkillListItem, SkillItemLabel } from './styled';

const Skills: React.FC = () => {
  const labelTreat = (label: string) => {
    if (label === 'ReactLogo') {
      return label = 'React.JS';
    } else if (label === 'Html5') {
      return label = 'HTML5';
    } else if (label === 'Css3') {
      return label = 'CSS3';
    } else {
      return label;
    }
  }
  return (
    <>
      <SkillListWrapper>
        <SkillListTitle>Skills</SkillListTitle>
        <SkillList>
          {
            Icons.map((i: any, icones: any) => {
              const Icones = Icons[icones];
              const labelIcon = Icones.target.displayName;
              return (
                <SkillListItem>
                  <Icones key={i} />
                  <SkillItemLabel>{labelTreat(labelIcon)}</SkillItemLabel>
                </SkillListItem>
              )
            })
          }
        </SkillList>
      </SkillListWrapper>
    </>
  )
}

export default Skills;