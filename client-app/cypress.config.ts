import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'd6v5xg',
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
