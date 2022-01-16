exports.HomePage = class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://react-redux.realworld.io/");
  }

  async getUserIconSrc() {
    return this.page.locator(".user-pic").getAttribute("src");
  }
};
