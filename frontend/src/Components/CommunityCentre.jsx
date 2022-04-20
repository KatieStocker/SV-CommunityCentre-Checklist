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
                        {currentBundle.room}
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