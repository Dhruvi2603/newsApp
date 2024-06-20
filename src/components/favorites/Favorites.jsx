import React, { useEffect, useState } from 'react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (newsUrl) => {
    const updatedFavorites = favorites.filter((item) => item.newsUrl !== newsUrl);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container my-3">
      <h2 className="my-4">Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites saved yet.</p>
      ) : (
        <div className="row my-3">
          {favorites.map((item, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card" style={{ width: "25rem", height: "30rem", display: 'flex', flexDirection: 'column' }}>
                <img src={item.imageUrl ? item.imageUrl : 'https://cdn.pixabay.com/photo/2022/11/04/09/27/breaking-news-7569433_1280.jpg'} className="card-img-top" alt="..."  style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title}...</h5>
                  <p className="card-text">{item.description}...</p>
                  <p className="card-text"><small className="text" style={{color: '#007BFF'}}>By {item.author ? item.author : 'Unknown'}<br/> on {new Date(item.date).toGMTString()}</small></p>
                  
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <a href={item.newsUrl} className="btn btn-dark">
                      Read More
                    </a>
                    <i 
                      className="bi bi-trash" 
                      style={{ cursor: 'pointer' }} 
                      onClick={() => removeFromFavorites(item.newsUrl)}>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
