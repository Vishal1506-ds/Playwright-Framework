import {Page,expect} from '@playwright/test';
import { WebCommons } from '../../commons/ui/web-commons';
import loginPageElements from '../page-elements/login-page-elements.json';
import loginTestData from '../../testdata/ui/login.json';

export class LoginPageSteps {

    page: Page;
    webCommons: WebCommons;

    constructor(page: Page) {
        this.page = page;
        this.webCommons = new WebCommons(page);
    }


    //launch the application
    async launchApplication() {
          await this.webCommons.launchApplication();
    };

    // verify the login page is displayed by checking the presence of login text
    async verifyLoginPageIsDisplayed(title :string) {
        await this.webCommons.verifyPageTitle(title);

    }

    // Verify Username Field 
    async verifyUsernameField(username: string) {
        const usernameField = await this.webCommons.element(loginPageElements.username);
       await this.webCommons.enterText(loginPageElements.username, username);
      const value= await this.webCommons.getInputText(loginPageElements.username);
       await console.log("Username entered: " + value);

    }
      // Verify password Field 
    async verifyPasswordField(password: string) {
        const passwordField = await this.webCommons.element(loginPageElements.password);
       await this.webCommons.enterText(loginPageElements.password, password);
      const value= await this.webCommons.getInputText(loginPageElements.password);
       await console.log("Password entered: " + value);

    }

    // click on login button
    async clickLoginButton() {
        await this.webCommons.click(loginPageElements.loginButton);
    }

    // verify successfully login or not 
    async verifySuccessfulLogin() {
        const searchButton = await this.webCommons.element(loginPageElements.searchButton);
        await expect(searchButton).toBeVisible();
    }

    async verifyInvalidLogin() {
        const usernameField = await this.webCommons.element(loginPageElements.username);
        await expect(usernameField).toBeVisible();
    }

    async verifyRequiredFieldErrorMessage() {
        const errorMessage = await this.webCommons.element(loginPageElements.requiredFieldErrorMessage);
        await expect(errorMessage).toBeVisible();
    }

    async verifyForgetPasswordLink() {
        const forgetPasswordLink = await this.webCommons.element(loginPageElements.forgetPasswordLink);
        await expect(forgetPasswordLink).toBeVisible();
    }

}