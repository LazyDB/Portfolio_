import React from 'react';
import PageTransition from '../components/PageTransition';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GallerySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const GalleryTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const GalleryItem = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.cardHoverBg};
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const LogosArt = () => {
  const artworks = [
    '/path/to/art1.jpg',
    '/path/to/art2.jpg',
    '/path/to/art3.jpg',
  ];

  return (
    <PageTransition>
      <GallerySection>
        <GalleryTitle>Logos & Art</GalleryTitle>
        <GalleryGrid>
          {artworks.map((art, index) => (
            <GalleryItem
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GalleryImage src={art} alt={`Artwork ${index + 1}`} />
            </GalleryItem>
          ))}
        </GalleryGrid>
      </GallerySection>
    </PageTransition>
  );
};

export default LogosArt;
