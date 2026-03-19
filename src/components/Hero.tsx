import { personalInfo } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home">
      <div className="hero-grid-bg"></div>
      <div className="hero-glow"></div>
      <div className="hero-tag">{t.hero.tag}</div>
      <h1 className="hero-name">
        {personalInfo.name.split(' ')[0]} <span>{personalInfo.name.split(' ').slice(1).join(' ')}</span>
      </h1>
      <p className="hero-role">{personalInfo.title}</p>
      <div className="hero-cta">
        <a href="#projects" className="btn-primary">{t.hero.cta1}</a>
        <a href="#contact" className="btn-outline">{t.hero.cta2}</a>
      </div>
      <div className="hero-scroll">
        <span className="scroll-line"></span>
        <span>{t.hero.scroll}</span>
      </div>
    </section>
  );
};
