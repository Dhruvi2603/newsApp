import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  const [query, setQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery('');
    }
  };

  const navigateToFavorites = () => {
    navigate('/favorites');
    
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top p-2" data-bs-theme="dark">
        <div className="container-fluid">
          <div className='logo'>
            <Link className="navbar-brand" to="/">Spotlight News</Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0"> {/* mx-auto added for center alignment */}
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/general">General</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/health">Health</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/science">Science</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>     
            </ul>
          </div>
          <div className='icons'>
            <div className='d-flex align-items-center'>
              <div className='favorite-icon me-3' onClick={navigateToFavorites}>
                <i className="bi bi-heart" style={{ color: '#f8f9fa', cursor: 'pointer' }}></i>
              </div>
              <div className='search' onClick={toggleSearch}>
                <i className="bi bi-search" style={{ color: '#f8f9fa', cursor: 'pointer' }}></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={`search-field ${showSearch ? 'show' : ''}`}>
        <div className="container-fluid">
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-dark" type="submit" style={{ marginLeft: '5px' }}>
              Search
            </button>
          </form>
        </div>
      </div>
      <div className={`content ${showSearch ? 'move-down' : ''}`}>
        {/* Your page content goes here */}
      </div>
    </div>
  );
};

export default Navbar;
