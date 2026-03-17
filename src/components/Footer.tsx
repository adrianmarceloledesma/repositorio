import styled from 'styled-components';
import { personalInfo } from '../data/projects';

const FooterWrapper = styled.footer`
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ContactLink = styled.a`
  color: white;
  font-size: 1rem;
  opacity: 0.9;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  opacity: 0.7;
`;

export const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <Container>
        <ContactTitle>Get In Touch</ContactTitle>
        <ContactLinks>
          <ContactLink href={`mailto:${personalInfo.email}`}>
            {personalInfo.email}
          </ContactLink>
          <ContactLink href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer">
            GitHub
          </ContactLink>
          <ContactLink href={`https://linkedin.com/in/${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </ContactLink>
        </ContactLinks>
        <Copyright>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</Copyright>
      </Container>
    </FooterWrapper>
  );
};