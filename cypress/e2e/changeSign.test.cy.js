describe('Sign change with digit in Class Component', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="3"]').click()
  })

  it('change on one number', () => {
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-123')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '123')
  })

  it('change on some numbers with minus', () => {
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-123')

    cy.get('[data-cy="minus"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="8"]').click()

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-123--58')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-123-58')

    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-181')
    cy.get('[data-cy="result"]').should('have.text', '-123-58 = -181')
  })

  it('change on some numbers', () => {
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-123')

    cy.get('[data-cy="plus"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="8"]').click()

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-123+-58')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-123+58')

    cy.get('[data-cy="multiply"]').click()
    cy.get('[data-cy="4"]').click()

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-123+58*-4')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-123+58*4')

    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '109')
    cy.get('[data-cy="result"]').should('have.text', '-123+58*4 = 109')
  })
})

describe('Sign change with digit in Function Component', () => {
  beforeEach(() => {
    cy.visit('/fc')
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="3"]').click()
  })

  it('change on one number', () => {
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-123')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '123')
  })

  it('change on some numbers with minus', () => {
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-123')

    cy.get('[data-cy="minus"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="8"]').click()

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-123--58')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-123-58')

    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-181')
    cy.get('[data-cy="result"]').should('have.text', '-123-58 = -181')
  })

  it('change on some numbers', () => {
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-123')

    cy.get('[data-cy="plus"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="8"]').click()

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-123+-58')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-123+58')

    cy.get('[data-cy="multiply"]').click()
    cy.get('[data-cy="4"]').click()

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-123+58*-4')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-123+58*4')

    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '109')
    cy.get('[data-cy="result"]').should('have.text', '-123+58*4 = 109')
  })
})

describe('Sign change without digit in Class Components', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Sign change without digit', () => {
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0 = 0')
  })

  it('Sign change with brackets', () => {
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(-')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(')

    cy.get('[data-cy="4"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(-4')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(4')

    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(4)-')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(4)')
  })

  it('sign with dot', () => {
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-.')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '.')

    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-.2')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '.2')
  })

  it('sign with dot and bracket', () => {
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(-.')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(.')

    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(-.2')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(.2')

    cy.get('[data-cy="plus"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(.2+-')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(.2+')

    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(.2+-.')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(.2+.')
  })
})

describe('Sign change without digit in Function Components', () => {
  beforeEach(() => {
    cy.visit('/fc')
  })

  it('Sign change without digit', () => {
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0 = 0')
  })

  it('Sign change with brackets', () => {
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(-')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(')

    cy.get('[data-cy="4"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(-4')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(4')

    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(4)-')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(4)')
  })

  it('sign with dot', () => {
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-.')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '.')

    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-.2')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '.2')
  })

  it('sign with dot and bracket', () => {
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(-.')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(.')

    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(-.2')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(.2')

    cy.get('[data-cy="plus"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(.2+-')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(.2+')

    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(.2+-.')

    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(.2+.')
  })
})

describe('Sign with equal in Class Components', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('sign with equal', () => {
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0 = 0')

    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-2')
    cy.get('[data-cy="result"]').should('have.text', '-2 = -2')
  })
})

describe('Sign with equal in Function Components', () => {
  beforeEach(() => {
    cy.visit('/fc')
  })

  it('sign with equal', () => {
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0 = 0')

    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-2')
    cy.get('[data-cy="result"]').should('have.text', '-2 = -2')
  })
})
