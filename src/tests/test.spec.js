const { test, expect, chromium, Page } = require("@playwright/test");
const { HomePage } = require("../pages/home.page");
const { SignUpPage } = require("../pages/signup.page");
const { SignInPage } = require("../pages/signin.page");
const { TestData } = require("./test.data");

test.describe("test", async () => {
  let page = Page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test("Verify that the user can create an account successfully", async () => {
    let testData = new TestData();
    let userInfo = testData.randomUserInformation();
    let signupPage = new SignUpPage(page, userInfo);
    await signupPage.goto();
    await signupPage.inputInformation();
    await signupPage.clickSigninBtn();

    let homePage = new HomePage(page);
    const userIconSrc = await homePage.getUserIconSrc();
    expect(userIconSrc).toContain("smiley-cyrus.jpeg");
  });

  test("Verify that a user cannot log in when entering a wrong email address or password", async () => {
    let testData = new TestData();
    let userInfo = testData.randomUserInformation();
    let signinPage = new SignInPage(page, userInfo);
    await signinPage.goto();
    await signinPage.inputInformation();
    await signinPage.clickSigninBtn();

    let errorMsg = await signinPage.getErrorMessages();
    expect(errorMsg).toContain("email or password is invalid");
  });
});
