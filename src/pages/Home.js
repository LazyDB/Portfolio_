import React from 'react';
import PageTransition from '../components/PageTransition';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profilePic from '../assets/pp.jpg'

const HeroSection = styled.section`
  display: inline-grid;
  grid-template-columns: auto auto auto;
  height: 40rem;
  background: ${({ theme }) => theme.heroBg};
`;

const ProfilePic = styled(motion.img)`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 350px;
  border-radius: 50%;
  margin-top: 5rem;
  margin-bottom: 4rem;
  margin-right: 4rem;
  margin-left: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const HeroText = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: inline-block;
  color: ${({ theme }) => theme.heroText};
`;

const Home = () => {
  return (
    <PageTransition>
      <HeroSection>
        <div>
          <ProfilePic
            src={profilePic}
            alt="Profile Picture"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <h2>Hello,</h2>
          <h3>I am Dipesh Baral, A software Engineer.</h3>
        </div>
        <div id="about-text">
          <HeroText>About</HeroText>
        </div>
      </HeroSection>
    </PageTransition>
  );
};

export default Home;
