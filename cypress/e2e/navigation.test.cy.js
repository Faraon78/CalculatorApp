describe('Navigation', () => {
  it('successfully load home page', () => {
    cy.visit('/')
    cy.get('h1').should('contain', 'Calculator App')
    cy.get('[data-cy="LinkCC"]').should('contain', 'Home(CC)')
    cy.get('[data-cy="LinkFC"]').should('contain', 'Home(FC)')
    cy.get('[data-cy="LinkSett"]').should('contain', 'Settings')
  })

  it('navigate on FC page', () => {
    cy.visit('/')
    cy.get('[data-cy="LinkFC"]').click()
    cy.get('[data-cy="value"]').should('contain', '0')
    cy.get('[data-cy="result"]').should('contain', '0')
    cy.get('h3').should('contain', 'History')
  })

  it('navigate on settings page', () => {
    cy.visit('/')
    cy.get('[data-cy="LinkSett"]').click()
    cy.get('h2').should('contain', 'Settings')
    cy.get('option:first-of-type').should('have.value', 'Light theme')
  })
})
