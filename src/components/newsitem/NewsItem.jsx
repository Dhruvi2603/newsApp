import React, { useState } from "react";

const NewsItem = (props) => {
  const { title, description, imageUrl, newsUrl, author, date } = props;
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Save to localStorage
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!isFavorite) {
      favorites.push({ title, description, imageUrl, newsUrl, author, date });
    } else {
      favorites = favorites.filter((item) => item.newsUrl !== newsUrl);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <div className="container my-3">
      <div className="card" style={{ width: "25rem", height: "30rem", display: 'flex', flexDirection: 'column' }}>
        <img src={!imageUrl ? "https://cdn.pixabay.com/photo/2022/11/04/09/27/breaking-news-7569433_1280.jpg" : imageUrl} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "cover" }}/>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text" style={{color: '#007BFF'}}>By {!author ? "Unknown" : author}<br/> on {new Date(date).toGMTString()}</small></p>
          <div className="mt-auto">
            <a href={newsUrl} className="btn btn-dark">
              Read More
            </a>
            <i 
              className={`bi bi-heart${isFavorite ? '-fill' : ''}`}
              style={{ marginLeft: '240px', cursor: 'pointer', color: isFavorite ? 'red' : 'black', height: '50px' }}
              onClick={toggleFavorite}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
