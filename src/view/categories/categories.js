import React, { useEffect, useState } from 'react';

import { entertainmentNewsReq} from '../../constants/services/services';

const Categoires = () => {

    const[entertainmentNews, setEntertainmentNews] = useState([]);

    useEffect(()=> {
        getEntertainmentNews();
    },[]);

    const getEntertainmentNews =async () => {
        try{
            const{data} = await entertainmentNewsReq();
            console.log(data);
            setEntertainmentNews(data);
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div>
            <div>
                Entertainment
            </div>
            <div>
                General
            </div>
            <div>
                Health
            </div>
            <div>
                Science
            </div>
            <div>
                Sport
            </div>
        </div>
    )
}

export default Categoires;