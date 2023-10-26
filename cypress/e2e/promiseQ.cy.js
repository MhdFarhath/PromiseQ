describe('Login Credential', () => {
  it('Empty password and Username', () => {
    cy.visit('https://app.promiseq.com/login')

cy.wait(5000);

cy.get('[name="email"]').should('have.value','');
cy.get('[name="password"]').should('have.value', '');

cy.get('[type="submit"]').should("be.visible").click({force:true});

cy.url().should("not.eq","https://app.promiseq.com/alarms");
//cy.get('.v-messages__message').should("be.visible")
//

cy.wait(5000)

  })


 it('password and Valid Username', () => {
  cy.visit('https://app.promiseq.com/login')

  cy.get('[name="email"]').should('have.value','').type('farhath4741@gmail.com');
cy.get('[name="password"]').should('have.value', '').type('1234')

cy.get('.v-messages__message').should("be.visible")
//cy.get('[type="submit"]').click({force:true});

cy.url().should("not.eq","https://app.promiseq.com/alarms");

 })

it('Valid password and InValid Username', () => {
  cy.visit('https://app.promiseq.com/login')

  cy.get('[name="email"]').should('have.value','').type('farhath47@gmail.com');
  cy.get('[name="password"]').should('have.value', '').type('123456')

  cy.get('.v-messages__message').should("be.visible")
 // cy.get('[type="submit"]').click({force:true});
})
it('Valid password and Valid Username', () => {
  cy.visit('https://app.promiseq.com/login')

  cy.get('[name="email"]').should('have.value','').type('farhath4741@gmail.com');
  cy.get('[name="password"]').should('have.value', '').type('123456')
  cy.get('[type="submit"]').click({force:true});

  cy.wait(5000);

  cy.url().should("eq","https://app.promiseq.com/alarms");
})

it('Should navigate to home page', () => {

cy.visit('https://app.promiseq.com/login')

cy.get('[name="email"]').should('have.value','').type('farhath4741@gmail.com');
cy.get('[name="password"]').should('have.value', '').type('123456')
cy.get('[type="submit"]').click({force:true});

cy.wait(5000);

cy.url().should("eq","https://app.promiseq.com/alarms");

cy.get('.v-item-group > :nth-child(1) > .v-btn__content > .v-icon').click()

cy.wait(5000)

cy.url().should("eq","https://app.promiseq.com/sandbox");


cy.get('.v-item-group > :nth-child(14)').click();

cy.wait(5000)
cy.url().should("eq","https://app.promiseq.com/user-management");

})

})
