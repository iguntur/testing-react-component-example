import React from 'react';
import App from 'components/app';

describe('<App /> component', () => {
	it('should render <App /> component correctly', () => {
		cy.mount(<App />);
		cy.contains('Hello, world');
	});

	it('should render with props', () => {
		cy.mount(<App name='John Doe' />);
		cy.contains('Hello, John Doe');
	});
});
