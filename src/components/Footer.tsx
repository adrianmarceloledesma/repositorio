import { personalInfo } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="footer-bottom">
        <div className="footer-brand">
          <span className="footer-logo">ML</span>
          <p className="footer-tagline">{personalInfo.title}</p>
        </div>
        
        <div className="footer-links-group">
          <span className="footer-nav-label">{t.footer.nav}</span>
          <div className="footer-nav-links">
            <a href="#hero">{t.nav.home}</a>
            <a href="#skills">{t.nav.skills}</a>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>
        </div>
        
        <div className="footer-links-group">
          <span className="footer-nav-label">{t.footer.contact}</span>
          <div className="footer-nav-links">
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={`https://linkedin.com/in/${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}</p>
      </div>
    </footer>
  );
};
