import { testCCData } from './testData/sampleCommunityCentreData';
import { render, screen } from '@testing-library/react';
import CommunityCentre from '../Components/CommunityCentre.jsx';

describe(`CommunityCentre test suite`, () => {
    beforeEach(() => {
        render(<CommunityCentre data={{}} />);
    });

    test(`it should render 7 divs with class name '.bundle-location' to coincide with the number of bundles in the data`, () => {
        const { container } = render(<CommunityCentre data={{ communityCentreData: testCCData }
        } />);
        const count = container.querySelectorAll(`.bundle-location`).length;
        expect(count).toBe(testCCData[0].CommunityCentre.length);
    });

});