
class loginPage{

    elements ={

        username : () => cy.get('#id_username'),

        password : () => cy.get('#id_password'),

        continue : () => cy.get('#login > .auth-container > .auth-form-column > .form-stacked > .auth-footer > .btn'),
      
        errorMessage : () => cy.get('.alert > ul > li')
        

    }

    invaled_Login(){

  

        cy.fixture('example').then(data => {
   
            this.elements.username().type(data.username)
            this.elements.password().type(data. password)     
        })




        this.elements.continue().click()

    }

    errorMessage() {
        return  this.elements.errorMessage()
    }
}

module.exports = new loginPage();
