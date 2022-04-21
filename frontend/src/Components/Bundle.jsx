
import { useEffect, useState } from 'react';

const Bundle = ({ data }) => {

    const [dataStatus, setDataStatus] = useState({ name: 'loading', message: 'The data is loading...' });

    useEffect(() => {
        const { error } = data;
        if (error?.length) {
            return setDataStatus({ name: 'error', message: error });
        }

        setDataStatus({ name: 'loading', message: 'The data is loading...' });
    }, [data]);

    const populateBundleSets = () => {
        const { standardBundleData } = data;
        if (standardBundleData?.length > 0) {
            const bundleData = standardBundleData;
            const displayBundleSets = bundleData.map(currentBundle => {
                return (
                    <div className="container card " key={currentBundle.name}>
                        <p>{currentBundle.name}</p>
                    </div>
                );
            });
            return displayBundleSets;
        };
        return (
            <div className="container"><p id={dataStatus.name}>{dataStatus.message}</p></div>
        );
    };

    return (
        <div className="container">
            {populateBundleSets()}
        </div>
    );
};

export default Bundle;