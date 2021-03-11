import React from 'react';

const CategoriesNewsComponent =({title,description,urlToImage}) => {



    return (
        <div className="categories-news__content">
            <img className="categories-news__img" src={urlToImage} />
            <div>{title}</div>
        </div>
    )
}

export default CategoriesNewsComponent;