import React from 'react';
import PageTransition from '../components/PageTransition';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CVSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const CVTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
`;

const CVCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.cardText};
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CVCardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CVCardDescription = styled.p`
  font-size: 1rem;
`;

const CV = () => {
  const experience = [
    {
      title: 'Software Engineer at ABC Corp',
      description: 'Developed web applications using React, Node.js, and MongoDB.',
    },
    {
      title: 'Frontend Developer at XYZ Inc',
      description: 'Created responsive UI components with React and Redux.',
    },
  ];

  return (
    <PageTransition>
      <CVSection>
        <CVTitle>My CV</CVTitle>
        {experience.map((exp, index) => (
          <CVCard
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CVCardTitle>{exp.title}</CVCardTitle>
            <CVCardDescription>{exp.description}</CVCardDescription>
          </CVCard>
        ))}
      </CVSection>
    </PageTransition>
  );
};

export default CV;
