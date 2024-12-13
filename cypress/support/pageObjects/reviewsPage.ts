class JudgeMeReviewsPage {

  selectors = {
    navBar: '.meganav',
    navBody: '.meganav__body',
    bannerLogo: 'brand-logo',
  };

  getNavLink(linkText) {
    return cy.contains(linkText);
  }

  getPartialClass(linkClass) {
    return cy.get(`[class*="${linkClass}"]`);
  }

  hoverOnNavLink(linkText) {
    cy.get(this.selectors.navBar).should('be.visible')
    this.getNavLink(linkText).trigger('mouseenter');
    cy.get(this.selectors.navBody).should('be.visible')
  }

  verifyNavLinks(expectedLinks) {
    expectedLinks.forEach((link) => {
      this.getNavLink(link).should('be.visible');
    });
  }

  getLogoImage(){
    return this.getPartialClass(this.selectors.bannerLogo);
  }

  clickNavLink(linkText: string) {
    this.getNavLink(linkText).click();
  }
}

export const judgeMeReviewsPage = new JudgeMeReviewsPage();
