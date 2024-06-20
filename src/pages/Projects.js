import React from 'react';
import PageTransition from '../components/PageTransition';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const ProjectsTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.cardText};
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.cardHoverBg};
  }
`;

const ProjectCardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectCardDescription = styled.p`
  font-size: 1rem;
`;

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with React and styled-components.',
    },
    {
      title: 'E-commerce Platform',
      description: 'An e-commerce platform developed using MERN stack.',
    },
  ];

  return (
    <PageTransition>
      <ProjectsSection>
        <ProjectsTitle>My Projects</ProjectsTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ProjectCardTitle>{project.title}</ProjectCardTitle>
              <ProjectCardDescription>{project.description}</ProjectCardDescription>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsSection>
    </PageTransition>
  );
};

export default Projects;
