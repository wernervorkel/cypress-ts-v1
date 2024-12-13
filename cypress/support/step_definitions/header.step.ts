import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { judgeMeReviewsPage } from '../pageObjects/reviewsPage';
import { commonPage } from '../pageObjects/commonPage';

let navbarData;
let headerData;

before(() => {
  cy.fixture('navbar').then((data) => {
    navbarData = data;
  });
  cy.fixture('review').then((data) => {
    headerData = data;
  });
});

Then('judge.me logo should be visible', () => {
  judgeMeReviewsPage.getLogoImage().should('be.visible');
});

Then('I click on the banner logo', () => {
    judgeMeReviewsPage.getLogoImage().click;
});

Then('it redirections to the correct page', () => {
    const expectedUrl = headerData.review;
    cy.url().should('include', expectedUrl);
    commonPage.visit();
});

Then('I click on the {string} button', () => {
});

Then('im redected to the {string} page', () => {
});

