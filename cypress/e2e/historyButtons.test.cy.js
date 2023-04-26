describe('History buttons check in Class Components', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="7"]').click()
    cy.get('[data-cy="8"]').click()
    cy.get('[data-cy="plus"]').click()
    cy.get('[data-cy="9"]').click()
    cy.get('[data-cy="7"]').click()
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="multiply"]').click()
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="equal"]').click()
  })

  it('Display history', () => {
    cy.get('[data-cy="displayHistory"]').should('have.text', 'Hide')
    cy.get('[data-cy="clearHistory"]').should('have.text', 'Clear history')

    cy.get('[data-cy="history-item"]').first().should('have.text', '109.78*15 = 1646.7')
    cy.get('[data-cy="history-item"]').last().should('have.text', '12.78+97 = 109.78')

    cy.get('[data-cy="displayHistory"]').click()
    cy.get('[data-cy="displayHistory"]').should('have.text', 'Show')
    cy.get('[data-cy="history-list"]').should('have.text', '')

    cy.get('[data-cy="displayHistory"]').click()
    cy.get('[data-cy="displayHistory"]').should('have.text', 'Hide')
    cy.get('[data-cy="history-item"]').first().should('have.text', '109.78*15 = 1646.7')
  })
  it('Clear history', () => {
    cy.get('[data-cy="history-item"]').first().should('have.text', '109.78*15 = 1646.7')
    cy.get('[data-cy="history-item"]').last().should('have.text', '12.78+97 = 109.78')

    cy.get('[data-cy="clearHistory"]').click()
    cy.get('[data-cy="history-list"]').should('have.text', '')
    cy.get('[data-cy="displayHistory"]').should('have.text', 'Hide')
  })
})

describe('History buttons check in Function Components', () => {
  beforeEach(() => {
    cy.visit('/fc')
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="7"]').click()
    cy.get('[data-cy="8"]').click()
    cy.get('[data-cy="plus"]').click()
    cy.get('[data-cy="9"]').click()
    cy.get('[data-cy="7"]').click()
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="multiply"]').click()
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="equal"]').click()
  })

  it('Display history', () => {
    cy.get('[data-cy="displayHistory"]').should('have.text', 'Hide')
    cy.get('[data-cy="clearHistory"]').should('have.text', 'Clear history')

    cy.get('[data-cy="history-item"]').first().should('have.text', '109.78*15 = 1646.7')
    cy.get('[data-cy="history-item"]').last().should('have.text', '12.78+97 = 109.78')

    cy.get('[data-cy="displayHistory"]').click()
    cy.get('[data-cy="displayHistory"]').should('have.text', 'Show')
    cy.get('[data-cy="history-list"]').should('have.text', '')

    cy.get('[data-cy="displayHistory"]').click()
    cy.get('[data-cy="displayHistory"]').should('have.text', 'Hide')
    cy.get('[data-cy="history-item"]').first().should('have.text', '109.78*15 = 1646.7')
  })
  it('Clear history', () => {
    cy.get('[data-cy="history-item"]').first().should('have.text', '109.78*15 = 1646.7')
    cy.get('[data-cy="history-item"]').last().should('have.text', '12.78+97 = 109.78')

    cy.get('[data-cy="clearHistory"]').click()
    cy.get('[data-cy="history-list"]').should('have.text', '')
    cy.get('[data-cy="displayHistory"]').should('have.text', 'Hide')
  })
})
