import React, { useEffect, useState } from 'react';
import TopNewsComponent from '../../components/topNewsComponent/topNewsComponent';
import { getTopNewsUs, topNews } from '../../constants/services/services';
import Header from '../header/header';

import {connect} from 'react-redux';

const TopNews = ({countryNews}) => {

    const [topNewsUs, setTopNewsUs] = useState([]);

    useEffect(() => {
        getNewsUs();
    },[countryNews]);

    const getNewsUs =async () => {
        try{
            const {data} = await topNews(countryNews);
            console.log(data);
            setTopNewsUs(data.articles);
            console.log(topNewsUs)
        }catch(err){
            console.log(err);
        }
    }


    return(
        <div>
        {/* // TODO: kroz redux a ne da se prosledi funckija setCountry */}
        <Header />
        <h1 className="header__primary"> {countryNews === 'us' ? 
            (<p>&diams; Top News from United State</p>) : 
            (<p>&diams; Top News from Greath Britain</p>)}</h1>
        <div className="top-news">
            {topNewsUs.map((news) => {
                return(
                    <TopNewsComponent
                        key={news.publishedAt + news.title}
                        title={news.title}
                        description={news.description}
                        url={news.url} 
                        content={news.content}
                        urlToImage={news.urlToImage} />
                )
            })}
        </div>
        </div>
    )
}

// Ovde cemo imati mapSTATEtoProps i ovaj drugi.... taj prvi je zapravo podatak iz StoreMallDirectory,
// a ovaj drugi je finkicja koja to menja... umesto coutry i setCoutry treba to da uradim preko store


const mapStateToProps = (state) => {
    return{
        countryNews : state.newsCountry
    }
}

export default connect(mapStateToProps)(TopNews);