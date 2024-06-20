import React from 'react';
import PageTransition from '../components/PageTransition';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: ${({ theme }) => theme.heroBg};
`;

const ProfilePic = styled(motion.img)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const HeroText = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.heroText};
`;

const CTAButton = styled(motion.a)`
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.buttonHoverBg};
  }
`;

const Home = () => {
  return (
    <PageTransition>
      <HeroSection>
        <ProfilePic
          src="/path/to/profile-pic.jpg"
          alt="Profile Picture"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
        <HeroText>Hello, I'm a Software Engineer</HeroText>
        <CTAButton
          href="/cv"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My CV
        </CTAButton>
      </HeroSection>
    </PageTransition>
  );
};

export default Home;
