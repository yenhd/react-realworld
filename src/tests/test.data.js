exports.TestData = class TestData {
  randomString(length) {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  randomUsername(length) {
    return this.randomString(length);
  }
  randomEmail(length) {
    return this.randomString(length) + "@gmail.com";
  }
  randomPassword(length) {
    return this.randomString(length);
  }
  randomUserInformation() {
    let userName = this.randomUsername(10);
    let email = this.randomEmail(8);
    let password = this.randomPassword(6);

    return {
      userName: userName,
      email: email,
      password: password,
    };
  }
};
