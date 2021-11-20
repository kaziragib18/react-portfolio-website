import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi There! <br />
          Im Kazi Md. Ragib
        </SectionTitle>
        <SectionText>
          A young adult with a zeal to develop software that benefits people and
          lives. Passionate about web development, design and human-computer interaction.
          Looking to broaden my horizon in the field of technology.
          In my free time, you can catch me reading light novels, playing football and
          trying out new recipes.
        </SectionText>
        <Button onClick={() => window.location = 'https://www.google.com/'}>Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;