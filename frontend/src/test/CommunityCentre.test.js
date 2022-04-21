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

    describe(`testing data passed through the props`, () => {

        beforeEach(() => {
            render(<CommunityCentre data={{ communityCentreData: testCCData }} />);
        });

        const ccRoom1 = testCCData[0].CommunityCentre[0];
        const ccRoom2 = testCCData[0].CommunityCentre[1];
        const ccRoom3 = testCCData[0].CommunityCentre[2];
        const ccRoom4 = testCCData[0].CommunityCentre[3];
        const ccRoom5 = testCCData[0].CommunityCentre[4];
        const ccRoom6 = testCCData[0].CommunityCentre[5];
        const ccRoom7 = testCCData[0].CommunityCentre[6];

        test(`it should display the room names for the source of each bundle`, () => {
            expect(screen.getByText(ccRoom1.room)).toBeInTheDocument();
            expect(screen.getByText(ccRoom2.room)).toBeInTheDocument();
            expect(screen.getByText(ccRoom3.room)).toBeInTheDocument();
            expect(screen.getByText(ccRoom4.room)).toBeInTheDocument();
            expect(screen.getByText(ccRoom5.room)).toBeInTheDocument();
            expect(screen.getByText(ccRoom6.room)).toBeInTheDocument();
            expect(screen.getByText(ccRoom7.room)).toBeInTheDocument();
        });

        test(`it should only render the room name once`, () => {
            expect(screen.getAllByText(ccRoom1.room).length).toBe(1);
        });

        test(`it should display the reward for completing each bundle`, () => {
            expect(screen.getByText(ccRoom1.reward)).toBeInTheDocument();
            expect(screen.getByText(ccRoom2.reward)).toBeInTheDocument();
            expect(screen.getByText(ccRoom3.reward)).toBeInTheDocument();
            expect(screen.getByText(ccRoom4.reward)).toBeInTheDocument();
            expect(screen.getByText(ccRoom5.reward)).toBeInTheDocument();
            expect(screen.getByText(ccRoom6.reward)).toBeInTheDocument();
            expect(screen.getByText(ccRoom7.reward)).toBeInTheDocument();
        });

        test(`it should render the reward once`, () => {
            expect(screen.getAllByText(ccRoom4.reward).length).toBe(1);
        });
    });

});