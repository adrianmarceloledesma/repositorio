import { useLanguage } from '../context/LanguageContext';

export const Header = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <header>
      <nav>
        <button 
          className="lang-toggle"
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
        >
          {lang === 'es' ? 'English' : 'Español'}
        </button>
        <a href="#" className="nav-logo">ML</a>
        <ul className="nav-links">
          <li><a href="#hero">{t.nav.home}</a></li>
          <li><a href="#skills">{t.nav.skills}</a></li>
          <li><a href="#projects">{t.nav.projects}</a></li>
          <li><a href="#contact">{t.nav.contact}</a></li>
        </ul>
      </nav>
    </header>
  );
};
