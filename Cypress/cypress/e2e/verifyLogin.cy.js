
import loginPage from '../pages/loginPage'

describe('template spec', () => {

it('Should not login with invalid credentials', () =>{

    cy.visit(Cypress.env("baseUrl"))



    loginPage.invaled_Login();

    loginPage.errorMessage().should('include.text','Please enter a correct username and password. Note that both fields may be case-sensitive.')

})

})

