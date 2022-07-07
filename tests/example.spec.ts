import { test, expect } from '@playwright/test';
import { invalidEmailAddresses, selectors } from "../data/test-data-file";

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  let visibleCookiesMsg = await page.isVisible(selectors.cookiesMsg);
  if(visibleCookiesMsg){
    await page.locator(selectors.cookiesMsg).click();
  }
});

test.describe('Automated tests for Musala Soft website', () => {

  test('Test Case 1. Verify error message about invalid email address', async ({ page }) => {
    await page.locator(selectors.contactUsButton).click();
    await page.locator(selectors.nameInput).fill("test name");
    await page.locator(selectors.subjectInput).fill("test subject");
    await page.locator(selectors.messageInput).fill("test message");
    for (let i = 0; i < invalidEmailAddresses.length; i++) {
      await page.locator(selectors.emailInput).fill(invalidEmailAddresses[i]);
      await page.locator(selectors.sendButton).click();
      await expect(page.locator(selectors.errorMessageEmailInvalid)).toBeVisible();
    }
  });

  test('Test Case 2. Check Musala Soft profile picture', async ({ page }) => {
    await page.evaluate(("document.querySelector('" + selectors.companyTap + "').click()" ));
    await expect(page).toHaveURL("/company/"); 
    await expect(page.locator(selectors.leadershipSection)).toBeVisible();
    await page.waitForSelector(selectors.facebookLink);
    await page.$eval(selectors.facebookLink, el => el.removeAttribute("target"));
    await page.locator(selectors.facebookLink).click();
    await expect(page).toHaveURL("https://www.facebook.com/MusalaSoft?fref=ts");
    await expect(page.locator(selectors.musalaSoftProfilePicture)).toBeVisible();
  });
  
  test('Test Case 3. Check that error messages are displayed', async ({ page }) => {
    await page.evaluate(("document.querySelector('" + selectors.careersTap + "').click()" ));
    await page.locator(selectors.checkOurOpenPositionsButton).click();
    await expect(page).toHaveURL("/careers/join-us/");
    await page.locator(selectors.selectLocation).selectOption({ label: 'Anywhere' });
    await page.locator(selectors.openPositionByNameExperiencedAutomationQAEngineer).click();
    await expect(page.locator(selectors.generalDescriptionSection)).toBeVisible();
    await expect(page.locator(selectors.requirementsSection)).toBeVisible();
    await expect(page.locator(selectors.responsibilitiesSection)).toBeVisible();
    await expect(page.locator(selectors.whatWeOfferSection)).toBeVisible();
    await expect(page.locator(selectors.applyButton)).toBeVisible();
    await page.locator(selectors.applyButton).click();
    await page.locator(selectors.emailApplyInput).fill("test@test");
    await page.setInputFiles(selectors.uploadInput, "data/CVTest.doc");
    await page.locator(selectors.agreeCheckbox).check();
    await page.locator(selectors.sendButton).click();
    await expect(page.locator(selectors.fieldsErrorMessage)).toBeVisible();
    await page.locator(selectors.closeButton).click();
    await expect(page.locator(selectors.nameRequiredErrorMessage)).toBeVisible();
    await expect(page.locator(selectors.mobileRequiredErrorMessage)).toBeVisible();
    await expect(page.locator(selectors.yourMessageErrorMessage)).toBeVisible();
    await expect(page.locator(selectors.emailErrorMessage)).toBeVisible();
    await expect(page.locator(selectors.notRobotErrorMessage)).toBeVisible();
  });

  test('Test Case 4. Print in the console the list with available positions by city', async ({ page }) => {
    await page.evaluate(("document.querySelector('" + selectors.careersTap + "').click()" ));
    await page.locator(selectors.checkOurOpenPositionsButton).click();
    await page.locator(selectors.selectLocation).selectOption({ label: 'Sofia' });
    await page.waitForSelector(selectors.positionsName);
    await page.waitForSelector(selectors.positionsLink);
    var positionsNameSofia = await page.$$(selectors.positionsName);
    var moreInfoSofia = await page.$$(selectors.positionsLink);
    console.log("Sofia")
    for (let i = 0; i < positionsNameSofia.length; i++) {
      console.log("Position: " + await positionsNameSofia[i].innerText());
      console.log("More info: " + await moreInfoSofia[i].getAttribute("href"));
    }
    console.log("---------------------------------------------------------------------");
    await page.locator(selectors.selectLocation).selectOption({ label: 'Skopje' });
    await page.waitForSelector(selectors.positionsName);
    await page.waitForSelector(selectors.positionsLink);;
    var positionsNameSkopje = await page.$$(selectors.positionsName);
    var moreInfoSkopje = await page.$$(selectors.positionsLink);
    console.log("Skopje")
    for (let i = 0; i < positionsNameSkopje.length; i++) {
      console.log("Position: " + await positionsNameSkopje[i].innerText());
      console.log("More info: " + await moreInfoSkopje[i].getAttribute("href"));
    }
    console.log("---------------------------------------------------------------------");
  });

})