import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import NewsItem from '../newsitem/NewsItem';
import Spinner from '../spinner/Spinner'; // Import Spinner component
import { searchNews } from '../../features/news/newsSlice';
import Footer from '../footer/Footer';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.news);
  const query = useQuery().get('q');

  useEffect(() => {
    if (query) {
      dispatch(searchNews({ country: 'in', category: 'general', pageSize: 6, page: 1, query: query }));
    }
  }, [dispatch, query]);

  return (
    <>
      <div className='pb-4' style={{ backgroundColor: '#e0e0e0', minHeight: '100vh', paddingTop: '90px' }}>
        <div className="container my-3">
          <h1 className="text-center text-black" style={{ margin: '30px 0px' }}>
            Search Results for "{query}"
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;
