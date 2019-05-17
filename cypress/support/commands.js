/* global Cypress, cy */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'

addMatchImageSnapshotCommand({
  failureThreshold: 0,
  failureThresholdType: 'percent',
  customDiffConfig: { threshold: 0 },
  capture: 'viewport',
  customDiffDir: 'cypress/visual-test-reports/snap_errors/',
  blackout: ['[data-testing=blackout]']
})

Cypress.Commands.add('setResolution', (size) => {
  if (Cypress._.isArray(size)) {
    cy.viewport(size[0], size[1])
  } else {
    cy.viewport(size)
  }
})

Cypress.Commands.add('takeSnapshot', (name, selector) => {
  var isVRTRunning = Cypress.env('isVRTRunning')
  if (!isVRTRunning) {
    return
  }
  if (selector) {
    cy.get(selector).should('exist')
  } else {
    cy.wait(2000)
  }
  cy.matchImageSnapshot(name)
  cy.wait(500)
})

Cypress.Commands.add('setRoutes', function () {
  // Set routes
  cy.server()

  // cy.route({
  //   method: 'GET',
  //   url: '/api/project',
  //   status: 200
  // }).as('getProject')
})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
