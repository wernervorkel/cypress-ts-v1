//store all the common step
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { commonPage } from '../pageObjects/commonPage';

Given('I visit the Judge.me Reviews page', () => {
    commonPage.visit();
  });