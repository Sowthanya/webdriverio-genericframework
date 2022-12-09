import { waitForDisplayed } from "../utils/wait-utils";
import BasePage from "./basepage.page";

class LoginPage extends BasePage {

    get userNameInput() {
        return $(`input[name='username']`);
    }

    get userPasswordInput() {
        return $(`input[name='password']`);
    }

    get submitButton() {
        return $(`//button[contains(@class,'orangehrm-login-button')]`);
    }

    get userDropdownIcon() {
        return $(`\\i[contains(@class,'oxd-userdropdown-icon')]`);
    }

    async login(username: string, password: string) {
        await this.userNameInput.setValue(username);
        await this.userPasswordInput.setValue(password);
        await this.submitButton.click();
        await waitForDisplayed(this.pageName);
    }

} export const loginPage = new LoginPage();