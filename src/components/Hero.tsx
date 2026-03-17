import styled from 'styled-components';
import { personalInfo } from '../data/projects';

const HeroWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  padding-top: calc(${({ theme }) => theme.spacing.xl} + 60px);
`;

const HeroContent = styled.div`
  max-width: 800px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Bio = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing.md};
  line-height: 1.8;
`;

const CTAButton = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: 6px;
  font-weight: 600;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.accentHover};
  }
`;

export const Hero = () => {
  return (
    <HeroWrapper id="hero">
      <HeroContent>
        <Title>{personalInfo.name}</Title>
        <Subtitle>{personalInfo.title}</Subtitle>
        <Bio>{personalInfo.bio}</Bio>
        <CTAButton href="#contact">Get In Touch</CTAButton>
      </HeroContent>
    </HeroWrapper>
  );
};