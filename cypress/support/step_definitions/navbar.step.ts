import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { judgeMeReviewsPage } from '../pageObjects/reviewsPage';
import { commonPage } from '../pageObjects/commonPage';

let navbarData;

before(() => {
  cy.fixture('navbar').then((data) => {
    navbarData = data;
  });
});

Then('the navigation bar should display all links from the fixture', () => {
  judgeMeReviewsPage.verifyNavLinks(navbarData.navLinks);
});

When('I hover over the {string} link', (linkText) => {
  judgeMeReviewsPage.hoverOnNavLink(linkText);
});

Then('I click all main navigation links and validate their redirections', () => {
  navbarData.navLinks.forEach((link) => {
    // Hover over the navigation link
    judgeMeReviewsPage.hoverOnNavLink(link);

    // Click the navigation link
    judgeMeReviewsPage.clickNavLink(link);

    // Validate the redirection URL
    const expectedUrl = navbarData.navRedirectionUrls[link];
    cy.url().should('include', expectedUrl);

    // Return to the home page before the next iteration
    commonPage.visit();
  });
});

Then('I click all {string} sub links and validate their redirections', (text: string) => {

  navbarData.dropdownOptions[text]?.forEach((link) => {
  
    console.log(navbarData.subOptions[link]); // Debugging output to ensure `subOptions` exists
  
    // Loop through sub-links
    navbarData.subOptions[link]?.forEach((subLink) => {
      judgeMeReviewsPage.hoverOnNavLink(text);
      judgeMeReviewsPage.clickNavLink(subLink);
  
      // Validate the redirection URL
      const expectedUrl = navbarData.subRedirectionUrls[subLink];
      cy.url().should('include', expectedUrl);
      commonPage.visit();
    });
  });
});
