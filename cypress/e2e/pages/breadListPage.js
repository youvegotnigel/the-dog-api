export default class BreadListPage {

    elements = {
                
        link_text: (text) => cy.get('a').contains(`${text}`),
        dog_selector: (text) => cy.get('.dog-selector').select(`${text}`),
        image: () => cy.get('.demo-image>img')
    }

    navigateToHome(){
        cy.visit('/dog-api/breeds-list')
    }

    clickOnLink(text) {
        this.elements.link_text(text).should('be.visible').click()
    }

    selectDog(value) {
        this.elements.dog_selector(value).should('have.value', value)
    }

    verifyImageDisplayed() {
        this.elements.image().should('be.visible').should('be.visible')
        .and(($img) => {
          // "naturalWidth" and "naturalHeight" are set when the image loads
          expect($img[0].naturalHeight).to.be.greaterThan(0)
          expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
    }

}