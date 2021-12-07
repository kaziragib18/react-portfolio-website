import React from 'react';
import { DiCode, DiFirebase, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From front-end design to full stack development, I completed some projocts. Here the list of technologies i have worked with,
    </SectionText>

    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Comfortable with,<br />
            JavaScript, HTML5, CSS3 <br />
            Familiar with, C, C++, Java, Python.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming Library</ListTitle>
          <ListParagraph>
            Worked with <br />
            React js, Node js, Next Js, Stripe js, Crypto js, Json Web Token, SASS, Flexbox, CSS Grid, React Bootstrap, React Router, Bootstrap5, Material ui, Styled Components, Tailwind.<br/>
            Familiar with, TypeScript, Redux, Redux toolkit, Mapbox‐gl, Webpack.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiCode size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tools & Version control</ListTitle>
          <ListParagraph>
            Like to work with <br />
            tools like VS Code, Heroku, Brakets, Figma, Netlify, Firebase, MongoDB, Mongoose, Postman, Slack, Trello, Latex, Sublime text, Codeblocks, Git, Github.
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
