import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PillNav from './components/PillNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Manutencao from './pages/Manutencao';
import Projetos from './pages/Projetos';
import PMOC from './pages/PMOC';
import Sobre from './pages/Sobre';
import Blog from './pages/Blog';
import Contato from './pages/Contato';
import './App.css';

function AppContent() {
  const location = useLocation();
  
  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'Manutenção', href: '/manutencao' },
    { label: 'Projetos', href: '/projetos' },
    { label: 'PMOC', href: '/pmoc' },
    { label: 'Quem Somos', href: '/sobre' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contato', href: '/contato' }
  ];

  return (
    <div className="App">
      <div className="header-wrapper">
        <div className="logo-container-main">
          <img src="/logo-percusor.png" alt="Percusor Climatização" className="main-logo" />
        </div>
        <PillNav
          items={navigationItems}
          activeHref={location.pathname}
          baseColor="transparent"
          pillColor="transparent"
          hoveredPillTextColor="#87CEEB"
          pillTextColor="#000000"
        />
      </div>
      <main style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manutencao" element={<Manutencao />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/pmoc" element={<PMOC />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
