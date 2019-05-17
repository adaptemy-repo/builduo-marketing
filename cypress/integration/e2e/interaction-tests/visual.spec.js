/// <reference types="Cypress" />
/* eslint-env mocha */
/* global cy */

describe('Inspect marketing site', function () {
  // Feature: Add messages to tasks
  it('Should allow for authoring batch MCQ questions', function () {

    cy.visit('/')

    cy.get('[data-testing=main-logo]')
      .should('exist')

    // image of main page
    cy.takeSnapshot('main', '[data-testing=main-logo]')

    cy.get('[data-testing=is-dd-open]')
      .should('exist')
      .click( {forse: true} )

    // image of opened burger menu
    cy.takeSnapshot('open-burger', '[data-testing=is-dd-open]')

    cy.get('[data-testing=burger-teacher]')
      .click()

    cy.url()
      .should('include', '/teacher')

    // image of teacher page
    cy.takeSnapshot('teacher', '[data-testing=teacher]')

    cy.visit('/')
    cy.get('[data-testing=is-dd-open]')
      .should('exist')
      .click( {forse: true} )

    cy.get('[data-testing=burger-student]')
      .click()

    cy.url()
      .should('include', '/student')

    // image of student page
    cy.takeSnapshot('student', '[data-testing=student]')

        cy.visit('/')
    cy.get('[data-testing=is-dd-open]')
      .should('exist')
      .click( {forse: true} )

    cy.get('[data-testing=burger-purchase]')
      .click()

    cy.url()
      .should('include', '/purchase')

    // image of purchase page
    cy.takeSnapshot('purchase', '[data-testing=purchase]')

  })
})
