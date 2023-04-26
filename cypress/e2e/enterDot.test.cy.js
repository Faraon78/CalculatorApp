describe('Enter dot in Class Component', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('enter dot between digit', () => {
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="value"]').should('have.text', '6.5')
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="value"]').should('have.text', '6.5')
    cy.get('[data-cy="back"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="value"]').should('have.text', '6.')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '6')
    cy.get('[data-cy="result"]').should('have.text', '6 = 6')
  })

  it('enter dot before digit', () => {
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="value"]').should('have.text', '.5')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0.5')
    cy.get('[data-cy="result"]').should('have.text', '0.5 = 0.5')
  })

  it('enter dot after digit', () => {
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="value"]').should('have.text', '5.')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '5')
    cy.get('[data-cy="result"]').should('have.text', '5 = 5')
  })

  it('enter dot with brackets', () => {
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(.')

    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(.5')

    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(.5')

    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(.5)')

    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0.5')
    cy.get('[data-cy="result"]').should('have.text', '(0.5) = 0.5')
  })

  it('enter dot with operator', () => {
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="plus"]').click()
    cy.get('[data-cy="value"]').should('have.text', '.+')
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="minus"]').click()
    cy.get('[data-cy="value"]').should('have.text', '.+.-')

    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0+0 = 0')
  })
})

describe('Enter dot in Function Component', () => {
  beforeEach(() => {
    cy.visit('/fc')
  })

  it('enter dot between digit', () => {
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="value"]').should('have.text', '6.5')
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="value"]').should('have.text', '6.5')
    cy.get('[data-cy="back"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="value"]').should('have.text', '6.')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '6')
    cy.get('[data-cy="result"]').should('have.text', '6 = 6')
  })

  it('enter dot before digit', () => {
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="value"]').should('have.text', '.5')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0.5')
    cy.get('[data-cy="result"]').should('have.text', '0.5 = 0.5')
  })

  it('enter dot after digit', () => {
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="value"]').should('have.text', '5.')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '5')
    cy.get('[data-cy="result"]').should('have.text', '5 = 5')
  })

  it('enter dot with brackets', () => {
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(.')

    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(.5')

    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(.5')

    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(.5)')

    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0.5')
    cy.get('[data-cy="result"]').should('have.text', '(0.5) = 0.5')
  })

  it('enter dot with operator', () => {
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="plus"]').click()
    cy.get('[data-cy="value"]').should('have.text', '.+')
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="minus"]').click()
    cy.get('[data-cy="value"]').should('have.text', '.+.-')

    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0+0 = 0')
  })
})
