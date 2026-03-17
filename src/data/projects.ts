export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with shopping cart, user authentication, and payment integration.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/MarceloAdrianAcuna',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application for managing tasks, deadlines, and team collaboration.',
    technologies: ['React', 'TypeScript', 'Firebase'],
    githubLink: 'https://github.com/MarceloAdrianAcuna',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A real-time weather application showing forecasts and conditions for multiple locations.',
    technologies: ['React', 'JavaScript', 'Weather API'],
    githubLink: 'https://github.com/MarceloAdrianAcuna',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio showcasing projects and skills.',
    technologies: ['React', 'TypeScript', 'Styled Components'],
    githubLink: 'https://github.com/MarceloAdrianAcuna',
  },
];

export const skills = [
  'React',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'Node.js',
  'Git',
  'SASS/SCSS',
  'Tailwind',
];

export const personalInfo = {
  name: 'Marcelo Adrian Acuna',
  title: 'Frontend Developer',
  bio: 'Frontend Developer with experience building responsive, user-friendly web applications. Passionate about creating clean, efficient code and great user experiences.',
  email: 'marceloacuna.dev@gmail.com',
  github: 'MarceloAdrianAcuna',
  linkedin: 'marcelo-adrian-acuña-6b2a57208',
};