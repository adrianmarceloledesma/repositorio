import { skills } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';

export const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills">
      <div className="inner">
        <div className="section-label">{t.skills.label}</div>
        <h2 className="section-title">{t.skills.title}</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
