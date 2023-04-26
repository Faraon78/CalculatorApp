describe('Clear function in Class Components', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="7"]').click()
    cy.get('[data-cy="8"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="equal"]').click()
  })

  it('check "back" button', () => {
    cy.get('[data-cy="value"]').should('have.text', '12.786')
    cy.get('[data-cy="result"]').should('have.text', '12.786 = 12.786')
    cy.get('[data-cy="history-list"]').should('have.text', '12.786 = 12.786')

    cy.get('[data-cy="back"]').click()
    cy.get('[data-cy="value"]').should('have.text', '12.78')
    cy.get('[data-cy="result"]').should('have.text', '12.786 = 12.786')
    cy.get('[data-cy="history-list"]').should('have.text', '12.786 = 12.786')

    cy.get('[data-cy="back"]').click()
    cy.get('[data-cy="back"]').click()
    cy.get('[data-cy="back"]').click()
    cy.get('[data-cy="back"]').click()
    cy.get('[data-cy="value"]').should('have.text', '1')
    cy.get('[data-cy="result"]').should('have.text', '12.786 = 12.786')
    cy.get('[data-cy="history-list"]').should('have.text', '12.786 = 12.786')
  })

  it('check "C" button', () => {
    cy.get('[data-cy="C"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '12.786 = 12.786')
    cy.get('[data-cy="history-list"]').should('have.text', '12.786 = 12.786')
  })

  it('check "CE" button', () => {
    cy.get('[data-cy="CE"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0')
    cy.get('[data-cy="history-list"]').should('have.text', '12.786 = 12.786')
  })

  it('check "CA" button', () => {
    cy.get('[data-cy="CA"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0')
    cy.get('[data-cy="history-list"]').should('have.text', '')
  })
})

describe('Clear function in Function Components', () => {
  beforeEach(() => {
    cy.visit('/fc')
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="7"]').click()
    cy.get('[data-cy="8"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="equal"]').click()
  })

  it('check "back" button', () => {
    cy.get('[data-cy="value"]').should('have.text', '12.786')
    cy.get('[data-cy="result"]').should('have.text', '12.786 = 12.786')
    cy.get('[data-cy="history-list"]').should('have.text', '12.786 = 12.786')

    cy.get('[data-cy="back"]').click()
    cy.get('[data-cy="value"]').should('have.text', '12.78')
    cy.get('[data-cy="result"]').should('have.text', '12.786 = 12.786')
    cy.get('[data-cy="history-list"]').should('have.text', '12.786 = 12.786')

    cy.get('[data-cy="back"]').click()
    cy.get('[data-cy="back"]').click()
    cy.get('[data-cy="back"]').click()
    cy.get('[data-cy="back"]').click()
    cy.get('[data-cy="value"]').should('have.text', '1')
    cy.get('[data-cy="result"]').should('have.text', '12.786 = 12.786')
    cy.get('[data-cy="history-list"]').should('have.text', '12.786 = 12.786')
  })

  it('check "C" button', () => {
    cy.get('[data-cy="C"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '12.786 = 12.786')
    cy.get('[data-cy="history-list"]').should('have.text', '12.786 = 12.786')
  })

  it('check "CE" button', () => {
    cy.get('[data-cy="CE"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0')
    cy.get('[data-cy="history-list"]').should('have.text', '12.786 = 12.786')
  })

  it('check "CA" button', () => {
    cy.get('[data-cy="CA"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0')
    cy.get('[data-cy="history-list"]').should('have.text', '')
  })
})
