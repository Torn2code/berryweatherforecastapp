import React, { useState, useEffect } from "react";
import axios from "axios";
import "./News.css";

const News = ({ newsData }) => {
  if (!newsData || newsData.length === 0) {
    return <p>No news available.</p>;
  }

  return (
    <div className="news-container">
      <h2>Latest News</h2>
      <div className="news-articles">
        {newsData.map((article, index) => (
          <div key={index} className="news-card">
            <img src={article.urlToImage} alt="news" className="news-image" />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
