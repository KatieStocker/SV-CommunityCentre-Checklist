import axios from 'axios';
import { useEffect, useState } from 'react';
import './CSS/Home.css';
import CommunityCentre from './CommunityCentre';

const Home = () => {

    const [communityCentreData, setCommunityCentreData] = useState([]);
    const [getError, setGetError] = useState({ message: ``, count: 0 });

    const getCommunityCentreData = async () => {
        try {
            const res = await axios.get(process.env.REACT_APP_COMMUNITYCENTREURL);
            return res.data.length ? res.data : new Error('No data could be found');
        }
        catch (e) {
            setGetError({ message: `The data is currently not available from the server: ${e.message}`, count: 0 });
            return [];
        }
    }

    useEffect(() => {
        const getData = async () => {
            setCommunityCentreData(await getCommunityCentreData());
        }
        setTimeout(() => getData(), 1500);
    }, []);

    return (
        <>
            <h1 className="CC-title">
                Community Centre Checklist
            </h1>
            <div className="container">
                <CommunityCentre data={{ communityCentreData, error: getError }} />
            </div>
        </>
    );
};

export default Home;