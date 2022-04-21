import { useEffect, useState } from 'react';
import './CSS/CommunityCentre.css';

const CommunityCentre = ({ data }) => {

    const [dataStatus, setDataStatus] = useState({ name: 'loading', message: 'The data is loading...' });

    useEffect(() => {
        const { error } = data;
        if (error?.length) {
            return setDataStatus({ name: 'error', message: error });
        }

        setDataStatus({ name: 'loading', message: 'The data is loading...' });
    }, [data]);

    const populateBundles = () => {
        const { communityCentreData } = data;
        if (communityCentreData?.length > 0) {
            const CCData = communityCentreData[0].CommunityCentre;
            const displayBundles = CCData.map(currentBundle => {
                return (
                    <div className="container card bundle-location" key={currentBundle._id}>
                        <h3 className="room-header">{currentBundle.room}</h3>
                        <div className="row reward-row">
                            <div className="col-6">
                                <p>Reward: </p>
                            </div>
                            <div className="col-6">
                                <p>{currentBundle.reward}</p>
                            </div>
                        </div>
                    </div>
                );
            });
            return displayBundles;
        };
        return (
            <div className="container"><p id={dataStatus.name}>{dataStatus.message}</p></div>
        );
    };

    return (
        <div className="container">
            {populateBundles()}
        </div>
    );
};

export default CommunityCentre;