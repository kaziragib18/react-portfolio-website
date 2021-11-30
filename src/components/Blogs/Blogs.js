import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './BlogsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { blogs } from '../../constants/constants';

const Blogs = () => (
  <Section nopadding id="blogs">
    <SectionDivider />
    <SectionTitle main>Personal Blogs</SectionTitle>
    <GridContainer>
      {blogs.map(({ id, image, title, description, visit }) => {
        return (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
            </TitleContent>
            <CardInfo className="card-info">{description}</CardInfo>
            <UtilityList>
              <ExternalLinks href={visit} target="_blank">3 Minute Read </ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Blogs;