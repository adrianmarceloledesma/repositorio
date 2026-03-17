import styled from 'styled-components';
import { projects } from '../data/projects';

const ProjectsWrapper = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

const ProjectCard = styled.article`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.md};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: 0.95rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TechTag = styled.span`
  font-size: 0.75rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.accent};
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Link = styled.a`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const Projects = () => {
  return (
    <ProjectsWrapper id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.technologies.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechStack>
              <ProjectLinks>
                {project.githubLink && (
                  <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Link>
                )}
                {project.demoLink && (
                  <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    Demo
                  </Link>
                )}
              </ProjectLinks>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsWrapper>
  );
};