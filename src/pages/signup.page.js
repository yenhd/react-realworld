const { expect } = require("@playwright/test");

exports.SignUpPage = class SignUpPage {
  /**
   * @param {import('@playwright/test').Page} page
   * @param userInfo
   */
  constructor(page, userInfo) {
    this.page = page;
    this.userInfo = userInfo;
  }

  async goto() {
    await this.page.goto("https://react-redux.realworld.io/#/register");
  }

  async inputInformation() {
    // username input
    await this.page.fill('[placeholder="Username"]', this.userInfo.userName);

    // email input
    await this.page.fill('[placeholder="Email"]', this.userInfo.email);

    // password input
    await this.page.fill('[placeholder="Password"]', this.userInfo.password);
  }

  async clickSigninBtn() {
    await this.page.locator(".btn-primary").click();
  }
};
