# cypress/e2e/reviews/header.feature
Feature: Verify Header and logo Judge.me Reviews Page

  Scenario: Validate judge.me logo is present
    Given I visit the Judge.me Reviews page
    Then judge.me logo should be visible
    And I click on the banner logo
    Then it redirections to the correct page

  Scenario: Validate Sign in
    Given I visit the Judge.me Reviews page
    When I click on the 'sign in' button
    Then im redected to the 'sign in' page

  Scenario: Validate links redirect for Apparel & Accessories
    Given I visit the Judge.me Reviews page
    When I click on the 'For Business' button
    Then im redected to the 'For Business' page
#Add more test to check the box wigget
