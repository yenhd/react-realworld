exports.SignInPage = class SignInPage {
  /**
   * @param {import('@playwright/test').Page} page
   * @param userInfo
   */
  constructor(page, userInfo) {
    this.page = page;
    this.userInfo = userInfo;
  }

  async goto() {
    await this.page.goto("https://react-redux.realworld.io/#/login");
  }

  async inputInformation() {
    // email input
    await this.page.fill('[placeholder="Email"]', this.userInfo.email);

    // password input
    await this.page.fill('[placeholder="Password"]', this.userInfo.password);
  }

  async clickSigninBtn() {
    await this.page.locator(".btn-primary").click();
  }

  async getErrorMessages() {
    let strInvalidLogin = await this.page
      .locator(".error-messages")
      .textContent();
    return strInvalidLogin;
  }
};
