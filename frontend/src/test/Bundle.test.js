import { testCCData } from './testData/sampleCommunityCentreData';
import { render, screen } from '@testing-library/react';
import Bundle from '../Components/Bundle.jsx';

describe(`Bundles test suite`, () => {
    beforeEach(() => {
        render(<Bundle data={{}} />);
    });

    const sampleBundleRoom1 = testCCData[0].CommunityCentre[0].standardBundle;

    test(`it should display the names of each bundle once`, () => {
        render(<Bundle data={{ standardBundleData: sampleBundleRoom1 }} />);
        expect(screen.getByText(sampleBundleRoom1[0].name)).toBeInTheDocument();
        expect(screen.getAllByText(sampleBundleRoom1[0].name).length).toBe(1);
    });
});