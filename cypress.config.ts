// cypress.config.ts

import {defineConfig} from 'cypress'
import {addMatchImageSnapshotPlugin} from '@simonsmith/cypress-image-snapshot/plugin'

export default defineConfig({
  e2e: {
    watchForFileChanges: false, // This won't run automatically when there's a change
    setupNodeEvents(on) {
      addMatchImageSnapshotPlugin(on)
    },
  },
})