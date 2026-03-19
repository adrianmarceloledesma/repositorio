import { useLanguage } from '../context/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about">
      <div className="section-label">{t.about.label}</div>
      <h2 className="section-title">{t.about.title}</h2>
      <div className="about-content">
        {t.about.bio.split('\n\n').map((paragraph, index) => (
          <p key={index} className="about-text">{paragraph}</p>
        ))}
      </div>
    </section>
  );
};