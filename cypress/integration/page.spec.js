describe('MoviesList', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render a card per each movie', () => {
    cy.byDataCy('Movie').should('have.length', 5);
  });

  it('has correct 1st movie', () => {
    cy.byDataCy('MovieTitle').eq(0).should('have.text', 'Inception');
    cy.byDataCy('MovieLink').eq(0).should('have.attr', 'href', 'https://www.imdb.com/title/tt1375666');
  });

  it('has correct 2nd movie', () => {
    cy.byDataCy('MovieTitle').eq(1).should('have.text', 'Love Actually');
    cy.byDataCy('MovieLink').eq(1).should('have.attr', 'href', 'https://www.imdb.com/title/tt0314331');
  });

  it('has correct 3rd movie', () => {
    cy.byDataCy('MovieTitle').eq(2).should('have.text', 'The Day After Tomorrow');
    cy.byDataCy('MovieLink').eq(2).should('have.attr', 'href', 'https://www.imdb.com/title/tt0319262');
  });

  it('has correct 4th movie', () => {
    cy.byDataCy('MovieTitle').eq(3).should('have.text', 'Rogue One');
    cy.byDataCy('MovieLink').eq(3).should('have.attr', 'href', 'https://www.imdb.com/title/tt3748528');
  });

  it('has correct 5th movie', () => {
    cy.byDataCy('MovieTitle').eq(4).should('have.text', 'The Holiday');
    cy.byDataCy('MovieLink').eq(4).should('have.attr', 'href', 'https://www.imdb.com/title/tt0457939');
  });
});
