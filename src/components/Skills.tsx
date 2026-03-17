import styled from 'styled-components';
import { skills } from '../data/projects';

const SkillsWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SkillTag = styled.span`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Skills = () => {
  return (
    <SkillsWrapper id="skills">
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <SkillsGrid>
          {skills.map((skill) => (
            <SkillTag key={skill}>{skill}</SkillTag>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsWrapper>
  );
};