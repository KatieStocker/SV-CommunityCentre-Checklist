import { testCCData } from '../test/testData/sampleCommunityCentreData';

const Home = () => {

    const data = testCCData[0].CommunityCentre;

    const populateBundles = () => {
        const displayBundles = data.map(currentBundle => {
            return (
                <div className="bundle-location" key={currentBundle._id}>
                    {currentBundle.name}
                </div>
            );
        });
        return displayBundles;
    }


    return (
        <>
            <h1>
                Community Centre Checklist
            </h1>
            <div className="container" key="bundles">
                {populateBundles()}
            </div>
        </>
    );
};

export default Home;