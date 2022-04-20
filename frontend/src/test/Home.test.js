import { render, screen } from '@testing-library/react';
import Home from '../Components/Home.jsx';
import { testCCData } from './testData/sampleCommunityCentreData';

describe(`Home test suite`, () => {

    beforeEach(() => {
        render(<Home />);
    });

    test(`it should render a heading with the text 'Community Centre Checklist'`, () => {
        expect(screen.getByText('Community Centre Checklist')).toBeInTheDocument();
    });

    test(`it should render 7 divs with class name '.bundle-location' to coincide with the number of bundles in the data`, () => {
        const { container } = render(<Home />);
        const count = container.querySelectorAll(`.bundle-location`).length;
        expect(count).toBe(testCCData[0].CommunityCentre.length);
    });
});