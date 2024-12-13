# cypress/e2e/reviews/navBar.feature
Feature: Verify Navigation Bar on Judge.me Reviews Page

  Scenario: Validate navigation bar links
    Given I visit the Judge.me Reviews page
    Then the navigation bar should display all links from the fixture

  Scenario: Validate links redirect
    Given I visit the Judge.me Reviews page
    Then I click all main navigation links and validate their redirections

  Scenario: Validate links redirect for Apparel & Accessories
    Given I visit the Judge.me Reviews page
    Then I click all "Apparel & Accessories" sub links and validate their redirections
#Add more test to check all redirect and links
