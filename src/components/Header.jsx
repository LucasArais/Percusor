import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Manutenção', href: '/manutencao' },
    { name: 'Projetos', href: '/projetos' },
    { name: 'PMOC', href: '/pmoc' },
    { name: 'Quem Somos', href: '/sobre' },
    { name: 'Blog', href: '/blog' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo-container">
            <img 
              src="/logo-percusor.png" 
              alt="Percusor Climatização" 
              className="logo-image"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="contact-info">
            <div className="phone-info">
              <Phone className="w-4 h-4" />
              <span>(11) 9999-9999</span>
            </div>
            <Link to="/contato" className="cta-button">
              Fale Conosco
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-button"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-nav">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`mobile-nav-link ${isActive(item.href) ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mobile-contact">
              <div className="mobile-phone">
                <Phone className="w-4 h-4" />
                <span>(11) 9999-9999</span>
              </div>
              <Link
                to="/contato"
                className="mobile-cta"
                onClick={() => setIsMenuOpen(false)}
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
