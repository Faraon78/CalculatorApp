describe('The Home Page main operation in Class Components', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="4"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="7"]').click()
    cy.get('[data-cy="8"]').click()
    cy.get('[data-cy="6"]').click()
  })

  it('successfully loads', () => {
    cy.get('h1').should('contain', 'Calculator App')
  })

  it('type numbers', () => {
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="9"]').click()
    cy.get('[data-cy="value"]').should('have.text', '12345.78609')
  })

  it('check clear digit', () => {
    cy.get('[data-cy="back"]').click()
    cy.get('[data-cy="back"]').click()
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '12345.7')
    cy.get('[data-cy="back"]').click()
    cy.get('[data-cy="back"]').click()
    cy.get('[data-cy="value"]').should('have.text', '12345')
  })

  it('check add operation', () => {
    cy.get('[data-cy="plus"]').click()
    cy.get('[data-cy="4"]').click()
    cy.get('[data-cy="7"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="9"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="value"]').should('have.text', '12345.786+47.96')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '12393.746')
    cy.get('[data-cy="result"]').should('have.text', '12345.786+47.96 = 12393.746')
  })

  it('check substract operation', () => {
    cy.get('[data-cy="minus"]').click()
    cy.get('[data-cy="4"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="value"]').should('have.text', '12345.786-43.21')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '12302.576')
    cy.get('[data-cy="result"]').should('have.text', '12345.786-43.21 = 12302.576')
  })

  it('check multiply operation', () => {
    cy.get('[data-cy="multiply"]').click()
    cy.get('[data-cy="4"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="value"]').should('have.text', '12345.786*43.21')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '533461.413')
    cy.get('[data-cy="result"]').should('have.text', '12345.786*43.21 = 533461.413')
  })

  it('check divide operation', () => {
    cy.get('[data-cy="divide"]').click()
    cy.get('[data-cy="4"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="value"]').should('have.text', '12345.786/43.21')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '285.716')
    cy.get('[data-cy="result"]').should('have.text', '12345.786/43.21 = 285.716')
  })
})

describe('The Home Page main operation in Function Components', () => {
  beforeEach(() => {
    cy.visit('/fc')
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="4"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="7"]').click()
    cy.get('[data-cy="8"]').click()
    cy.get('[data-cy="6"]').click()
  })

  it('successfully loads', () => {
    cy.get('h1').should('contain', 'Calculator App')
  })

  it('type numbers', () => {
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="9"]').click()
    cy.get('[data-cy="value"]').should('have.text', '12345.78609')
  })

  it('check clear digit', () => {
    cy.get('[data-cy="back"]').click()
    cy.get('[data-cy="back"]').click()
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '12345.7')
    cy.get('[data-cy="back"]').click()
    cy.get('[data-cy="back"]').click()
    cy.get('[data-cy="value"]').should('have.text', '12345')
  })

  it('check add operation', () => {
    cy.get('[data-cy="plus"]').click()
    cy.get('[data-cy="4"]').click()
    cy.get('[data-cy="7"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="9"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="value"]').should('have.text', '12345.786+47.96')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '12393.746')
    cy.get('[data-cy="result"]').should('have.text', '12345.786+47.96 = 12393.746')
  })

  it('check substract operation', () => {
    cy.get('[data-cy="minus"]').click()
    cy.get('[data-cy="4"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="value"]').should('have.text', '12345.786-43.21')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '12302.576')
    cy.get('[data-cy="result"]').should('have.text', '12345.786-43.21 = 12302.576')
  })

  it('check multiply operation', () => {
    cy.get('[data-cy="multiply"]').click()
    cy.get('[data-cy="4"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="value"]').should('have.text', '12345.786*43.21')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '533461.413')
    cy.get('[data-cy="result"]').should('have.text', '12345.786*43.21 = 533461.413')
  })

  it('check divide operation', () => {
    cy.get('[data-cy="divide"]').click()
    cy.get('[data-cy="4"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="value"]').should('have.text', '12345.786/43.21')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '285.716')
    cy.get('[data-cy="result"]').should('have.text', '12345.786/43.21 = 285.716')
  })
})
