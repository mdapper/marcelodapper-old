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
        <SectionHeader titleHeader='Projects' />
      </Row>
      <Row>
        <ProjectItem
          projectTitle="DevHeroes"
          projectImage="Devheroes"
          projectLiveLink="https://devheroes.io/"
          projectCodeLink="https://devheroes.io/"
        >
          <p>Objetivo de criar um grid do zero usando flexbox, sem o uso de framework como Bootstrap. Foco em performance optimization. Uso de SVG para icones. Vanilla JavaScript para interações necessárias, como abrir o menu mobile.</p>
          <p>Primeiro projeto em DevOps. Configuração de um servidor na DigitalOcean com o LEMP Stack e WordPress. Configuração de certificado digital da Let's Encrypt</p>
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
              'LEMP'
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
          <p>A store with modern layout.</p>
          <p>Configuração de um servidor na DigitalOcean com o LEMP Stack e WordPress. Configuração de certificado digital da Let's Encrypt...</p>
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
              'Bcash'
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
          <p>Configuração de um servidor na DigitalOcean com o LEMP Stack e WordPress. Configuração de certificado digital da Let's Encrypt</p>
          <ProjectTags
            tags={[
              'WordPress',
              'PHP',
              'JavaScript',
              'jQuery',
              'Sass',
              'Bootstrap',
              'Grunt',
              'LEMP'
            ]}
          />
        </ProjectItem>
      </Row>
      <Row>
        <ProjectItem
          projectTitle="Sougraf"
          projectImage="sougraf"
          projectLiveLink="https://sougraf.com/"
        >
          <p>A store with modern layout.</p>
          <p>Configuração de um servidor na DigitalOcean com o LEMP Stack e WordPress. Configuração de certificado digital da Let's Encrypt...</p>
          <ProjectTags
            tags={[
              'WordPress',
              'WooCommerce',
              'PHP',
              'JavaScript',
              'CSS',
              'BEM',
              'Bootstrap',
              'Gulp',
              'PagSeguro'
            ]}
          />
        </ProjectItem>
      </Row>
    </ContainerFull>
  </Section>
)

export default Projects;
