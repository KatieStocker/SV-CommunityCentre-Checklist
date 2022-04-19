import { render, screen } from '@testing-library/react';
import Home from '../Components/Home.jsx';

describe(`Home test suite`, () => {

    beforeEach(() => {
        render(<Home />);
    });

    test(`it should render a heading with the text 'Community Centre Checklist'`, () => {
        expect(screen.getByText('Community Centre Checklist')).toBeInTheDocument();
    });
});