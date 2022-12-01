import { Given, Then, When } from "@wdio/cucumber-framework"
import { loginPage } from "../../src/pageobjects/login.page";
import { Assertion } from "../../src/utils/assertions";


Given("I am on the login page", async () => {
    await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});

When("I login to the application", async () => {
    await loginPage.login("Admin", "admin123");
});

Then('I verify {string} page is displayed', async (pageName: string) => {
    const actualPageName = await loginPage.pageName.getText();
    await Assertion.equalText(actualPageName, pageName);
})


