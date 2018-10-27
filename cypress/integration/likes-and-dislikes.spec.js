import React from 'react';
import LikesAndDislikes from 'components/likes-and-dislikes';

describe('<LikesAndDislikes /> component', () => {
	it('should render <LikesAndDislikes /> component correctly', () => {
		cy.mount(<LikesAndDislikes />);
		cy.get('[data-test="dislike-action"]').should('contain', '👎');
		cy.get('[data-test="like-action"]').should('contain', '👍');
		cy.get('[data-test="dislike-value"]').should('contain', '0');
		cy.get('[data-test="like-value"]').should('contain', '0');
	});

	context('Likes and Dislikes action', () => {
		beforeEach(() => {
			cy.mount(<LikesAndDislikes />);
			cy.get('[data-test="dislike-action"]').should('contain', '0').as('dislike');
			cy.get('[data-test="like-action"]').should('contain', '0').as('like');
		});

		it('can click `like` button', () => {
			cy.get('@like').click().should('contain', '1');
			cy.get('@dislike').should('contain', '0');
		});

		it('can click `dislike` button', () => {
			cy.get('@dislike').click().should('contain', '1');
			cy.get('@like').should('contain', '0');
		});

		it('can click `like` and `dislike` buttons', () => {
			cy.get('@like').click().click().click().should('contain', '3');
			cy.get('@dislike').click().click().should('contain', '2');
		});
	});
});
