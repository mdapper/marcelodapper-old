import React from 'react';
import styles from './Projects.css';

import Section from '../Section/Section';
import ContainerFull from '../ContainerFull/ContainerFull';
import Row from '../Row/Row';
import SectionHeader from '../SectionHeader/SectionHeader';
import ProjectItem from '../ProjectItem/ProjectItem';
import ProjectTags from '../ProjectTags/ProjectTags';

const Projects = () => (
  <Section>
    <ContainerFull>
      <Row>
        <SectionHeader titleHeader="Projects" />
      </Row>
      <Row>
        <ProjectItem
          projectTitle="DevHeroes"
          projectImage="Devheroes"
          projectLiveLink="https://devheroes.io/"
          projectCodeLink="https://devheroes.io/"
        >
          <p>
            The objective was to create a grid using flex, without the need to use a framework like Bootstrap. To help with that I used Sass, BEM and Gulp.
          </p>
          <p>
            My focus was performance, so I used system fonts, SVG for the icons and vanilla JavaScript where needed. I made a custom WordPress template for these requirements.
          </p>
          <p>
            This also was the first project that I installed and configured a LEMP Stack (Linux, Nginx, MySQL and PHP 7.0) on DigitalOcean. And I configured the SSL certificate using Let's Encrypt.
          </p>
          <ProjectTags
            tags={[
              'WordPress',
              'PHP',
              'JavaScript',
              'Sass',
              'BEM',
              'Flex',
              'SVG',
              'Gulp',
              'LEMP',
            ]}
          />
        </ProjectItem>
      </Row>
      <Row>
        <ProjectItem
          projectTitle="Dapdem"
          projectImage="dapdem"
          projectLiveLink="https://www.dapper-demo.com/"
        >
          <p>I made the layout and custom WooCommerce theme for this store.</p>
          <p>
            Installed and configured a LEMP Stack and SSL certificate using Let's Encrypt on DigitalOcean.
          </p>
          <ProjectTags
            tags={[
              'WordPress',
              'WooCommerce',
              'PHP',
              'JavaScript',
              'Sass',
              'BEM',
              'Bootstrap',
              'Gulp',
              'LEMP',
              'Bcash',
            ]}
          />
        </ProjectItem>
      </Row>
      <Row>
        <ProjectItem
          projectTitle="Álvaro Camiña - Architecture and Urbanism"
          projectImage="alvaro"
          projectLiveLink="http://www.alvarocamina.com.br/"
        >
          <p>An Architecture and Urbanism office in Salvador, BA, Brazil.</p>
          <p>
            I made the layout and custom WordPress theme for this modern architecture office to show their latest projects.
          </p>
          <ProjectTags
            tags={[
              'WordPress',
              'PHP',
              'JavaScript',
              'jQuery',
              'Sass',
              'Bootstrap',
              'Grunt',
              'LEMP',
            ]}
          />
        </ProjectItem>
      </Row>
    </ContainerFull>
  </Section>
);

export default Projects;
