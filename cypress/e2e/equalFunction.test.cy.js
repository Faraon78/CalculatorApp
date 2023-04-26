describe('The equal function in Class Components', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('equal with single element', () => {
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0 = 0')

    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '1')
    cy.get('[data-cy="result"]').should('have.text', '1 = 1')

    cy.get('[data-cy="CA"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '(0) = 0')

    cy.get('[data-cy="CA"]').click()
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0 = 0')

    cy.get('[data-cy="CA"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="value"]').should('have.text', '.')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0 = 0')

    cy.get('[data-cy="CA"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0 = 0')
  })

  it('equal with single remainder operator', () => {
    cy.get('[data-cy="remainder"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0%')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0 = 0')
  })

  it('equal with single minus operator', () => {
    cy.get('[data-cy="minus"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0-')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0 = 0')
  })

  it('equal with single plus operator', () => {
    cy.get('[data-cy="plus"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0+')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0 = 0')
  })

  it('equal with single multiply operator', () => {
    cy.get('[data-cy="multiply"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0*')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0 = 0')
  })

  it('equal with single divide operator', () => {
    cy.get('[data-cy="divide"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0/')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0 = 0')
  })

  it('equal "(6"', () => {
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '6')
    cy.get('[data-cy="result"]').should('have.text', '(6) = 6')
  })

  it('equal "(.3"', () => {
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0.3')
    cy.get('[data-cy="result"]').should('have.text', '(0.3) = 0.3')
  })

  it('equal "(.3("', () => {
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '(0.3*(0)) = 0')
  })

  it('equal "(-8.5607*()"', () => {
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="8"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="7"]').click()
    cy.get('[data-cy="multiply"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(-8.5607*()')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '(-8.561*(0)) = 0')
  })

  it('equal "(-6.5(6(3(.(5"', () => {
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(-6.5(6(3(.(5')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '(-6.5*(6*(3*(0*(5))))) = 0')
  })

  it('equal "(-.5)(6/15)(98%4)"', () => {
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="divide"]').click()
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="9"]').click()
    cy.get('[data-cy="8"]').click()
    cy.get('[data-cy="remainder"]').click()
    cy.get('[data-cy="4"]').click()
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(-.5)(6/15)(98%4)')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-0.4')
    cy.get('[data-cy="result"]').should('have.text', '(-0.5)*(6/15)*(98%4) = -0.4')
  })

  it('equal ".86/0"', () => {
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="8"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="divide"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="value"]').should('have.text', '.86/0')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0.86/0 = Error')
  })

  it('equal "95%0"', () => {
    cy.get('[data-cy="9"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="remainder"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="value"]').should('have.text', '95%0')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '95%0 = Error')
  })

  it('equal "7*0"', () => {
    cy.get('[data-cy="7"]').click()
    cy.get('[data-cy="multiply"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="value"]').should('have.text', '7*0')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '7*0 = 0')
  })

  it('equal "56*15/4+(-78*16)"', () => {
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="multiply"]').click()
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="divide"]').click()
    cy.get('[data-cy="4"]').click()
    cy.get('[data-cy="plus"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="7"]').click()
    cy.get('[data-cy="8"]').click()
    cy.get('[data-cy="multiply"]').click()
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '56*15/4+(-78*16)')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-1038')
    cy.get('[data-cy="result"]').should('have.text', '56*15/4+(-78*16) = -1038')
  })
  it('equal "8.035716981536"', () => {
    cy.get('[data-cy="8"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="7"]').click()
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="9"]').click()
    cy.get('[data-cy="8"]').click()
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="value"]').should('have.text', '8.035716981536')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '8.036')
    cy.get('[data-cy="result"]').should('have.text', '8.036 = 8.036')
  })

  it('equal "1.00000009"', () => {
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="9"]').click()
    cy.get('[data-cy="value"]').should('have.text', '1.00000009')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '1')
    cy.get('[data-cy="result"]').should('have.text', '1 = 1')
  })
})

describe('The equal function in Function Components', () => {
  beforeEach(() => {
    cy.visit('/fc')
  })
  it('equal with single element', () => {
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0 = 0')

    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '1')
    cy.get('[data-cy="result"]').should('have.text', '1 = 1')

    cy.get('[data-cy="CA"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '(0) = 0')

    cy.get('[data-cy="CA"]').click()
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0 = 0')

    cy.get('[data-cy="CA"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="value"]').should('have.text', '.')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0 = 0')

    cy.get('[data-cy="CA"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0 = 0')
  })

  it('equal with single remainder operator', () => {
    cy.get('[data-cy="remainder"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0%')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0 = 0')
  })

  it('equal with single minus operator', () => {
    cy.get('[data-cy="minus"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0-')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0 = 0')
  })

  it('equal with single plus operator', () => {
    cy.get('[data-cy="plus"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0+')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0 = 0')
  })

  it('equal with single multiply operator', () => {
    cy.get('[data-cy="multiply"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0*')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0 = 0')
  })

  it('equal with single divide operator', () => {
    cy.get('[data-cy="divide"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0/')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0 = 0')
  })

  it('equal "(6"', () => {
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '6')
    cy.get('[data-cy="result"]').should('have.text', '(6) = 6')
  })

  it('equal "(.3"', () => {
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0.3')
    cy.get('[data-cy="result"]').should('have.text', '(0.3) = 0.3')
  })

  it('equal "(.3("', () => {
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '(0.3*(0)) = 0')
  })

  it('equal "(-8.5607*()"', () => {
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="8"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="7"]').click()
    cy.get('[data-cy="multiply"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(-8.5607*()')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '(-8.561*(0)) = 0')
  })

  it('equal "(-6.5(6(3(.(5"', () => {
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(-6.5(6(3(.(5')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '(-6.5*(6*(3*(0*(5))))) = 0')
  })

  it('equal "(-.5)(6/15)(98%4)"', () => {
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="divide"]').click()
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="9"]').click()
    cy.get('[data-cy="8"]').click()
    cy.get('[data-cy="remainder"]').click()
    cy.get('[data-cy="4"]').click()
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(-.5)(6/15)(98%4)')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-0.4')
    cy.get('[data-cy="result"]').should('have.text', '(-0.5)*(6/15)*(98%4) = -0.4')
  })

  it('equal ".86/0"', () => {
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="8"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="divide"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="value"]').should('have.text', '.86/0')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '0.86/0 = Error')
  })

  it('equal "95%0"', () => {
    cy.get('[data-cy="9"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="remainder"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="value"]').should('have.text', '95%0')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '95%0 = Error')
  })

  it('equal "7*0"', () => {
    cy.get('[data-cy="7"]').click()
    cy.get('[data-cy="multiply"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="value"]').should('have.text', '7*0')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')
    cy.get('[data-cy="result"]').should('have.text', '7*0 = 0')
  })

  it('equal "56*15/4+(-78*16)"', () => {
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="multiply"]').click()
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="divide"]').click()
    cy.get('[data-cy="4"]').click()
    cy.get('[data-cy="plus"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="sign"]').click()
    cy.get('[data-cy="7"]').click()
    cy.get('[data-cy="8"]').click()
    cy.get('[data-cy="multiply"]').click()
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '56*15/4+(-78*16)')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '-1038')
    cy.get('[data-cy="result"]').should('have.text', '56*15/4+(-78*16) = -1038')
  })
  it('equal "8.035716981536"', () => {
    cy.get('[data-cy="8"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="7"]').click()
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="9"]').click()
    cy.get('[data-cy="8"]').click()
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="5"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="value"]').should('have.text', '8.035716981536')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '8.036')
    cy.get('[data-cy="result"]').should('have.text', '8.036 = 8.036')
  })

  it('equal "1.00000009"', () => {
    cy.get('[data-cy="1"]').click()
    cy.get('[data-cy="dot"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="9"]').click()
    cy.get('[data-cy="value"]').should('have.text', '1.00000009')
    cy.get('[data-cy="equal"]').click()
    cy.get('[data-cy="value"]').should('have.text', '1')
    cy.get('[data-cy="result"]').should('have.text', '1 = 1')
  })
})