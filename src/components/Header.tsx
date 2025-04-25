import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
          <span className="mr-2">   </span>
          <span> Ôsecour</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/#services" className="nav-link">Services</Link>
          <Link to="/#app" className="nav-link">Application</Link>
          <Link to="/#map" className="nav-link">Carte</Link>
          <Link to="/#testimonials" className="nav-link">Témoignages</Link>
          <Link to="/#contact" className="nav-link">Contact</Link>
          {/* <Link to="#services" className="nav-link">Services</Link>
          <Link to="#app" className="nav-link">Application</Link> */}
          <Link to="/inscription-agent" className="nav-link">Devenir Agent</Link>
          <button className="cta-button bg-blue-600 text-white px-6 py-2 rounded">
            Télécharger
          </button>
        </nav>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#services" className="nav-link">Services</a>
            <a href="#app" className="nav-link">Application</a>
            <a href="#map" className="nav-link">Carte</a>
            <a href="#testimonials" className="nav-link">Témoignages</a>
            <a href="#contact" className="nav-link">Contact</a>
            {/* <a href="#services" className="nav-link">Services</Link>
            <Link to="#app" className="nav-link">Application</Link> */}
            <Link to="/inscription-agent" className="nav-link">Devenir Agent</Link>
            <button className="cta-button bg-blue-600 text-white px-6 py-2 rounded">
              Télécharger
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;