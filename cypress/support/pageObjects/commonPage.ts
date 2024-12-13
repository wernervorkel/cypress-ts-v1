class CommonPage {
    visit() {
        cy.visit('/reviews');
      }
  }
  
  export const commonPage = new CommonPage();