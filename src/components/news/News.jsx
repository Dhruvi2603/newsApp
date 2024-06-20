import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import NewsItem from '../newsitem/NewsItem';
import Spinner from '../spinner/Spinner';
import { fetchNews, setPage } from '../../features/news/newsSlice';
import Footer from '../footer/Footer';

const News = ({ country = 'in', pageSize = 6, category = 'general' }) => {
  const dispatch = useDispatch();
  const { articles, loading, page, totalArticles, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews({ country, category, pageSize, page }));
  }, [dispatch, country, category, pageSize, page]);

  const handlePreviousClick = () => {
    dispatch(setPage(page - 1));
  };

  const handleNextClick = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <>
    <div className='pb-4' style={{ backgroundColor: '#e0e0e0', minHeight: '100vh', paddingTop: '90px' }}>
      <div className="container mb-3">
        <h1 className="text-center text-black" style={{ marginBottom: '30px' }}>
          Spotlight News - Top Headlines on {category}
        </h1>
        {loading && <Spinner />}
        {error && <p className="text-center text-danger">{error}</p>}
        <div className="row">
          {!loading &&
            articles &&
            articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ''}
                  description={element.description ? element.description.slice(0, 88) : ''}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            ))}
        </div>
        <div className="container d-flex justify-content-between mt-4 mr-20">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={page + 1 > Math.ceil(totalArticles / pageSize)}
            type="button"
            className="btn btn-dark"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
