describe('Image Snapshot', () => {
    it('should compare the body of the page', () => {
        /*
        When you run the cy.matchImageSnapshot() command for the first time, 
        it captures a snapshot of the page or element and saves it as the baseline image. 
        This baseline image is typically stored in a folder within your Cypress project's directory structure.

        By default, cy.matchImageSnapshot() uses a folder called cypress/snapshots to store the baseline images. 
        You can find the generated baseline images in this folder.

        If the baseline image for a particular test does not exist yet (for example, 
        when you add a new test), Cypress will automatically save the first captured snapshot 
        as the baseline image within the appropriate folder.

        In subsequent test runs, cy.matchImageSnapshot() captures a new snapshot and compares it to the existing baseline image. 
        It then performs a pixel-by-pixel comparison to detect any visual differences.

        If there are differences between the new snapshot and the baseline image above the defined threshold, 
        Cypress can generate a visual diff image highlighting the areas of discrepancy.

        It's important to ensure that the baseline images are regularly updated and reviewed to reflect the correct 
        expected visual state of the application, especially when legitimate visual changes occur.
        */
       
        cy.visit('http://jupiter.cloud.planittesting.com');
  
        // Click login tab to change the page
        cy.get('ng-login > a').click();

        // Take a snapshot with a specific name ('body') and compare it to the baseline
        cy.matchImageSnapshot('body');

    });

  });