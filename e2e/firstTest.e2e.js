describe("Onboarding Test", () => {
  it("should have sign up and sign in buttons", async () => {
    await device.launchApp();
    await expect(element(by.id("signUpButton"))).toBeVisible();
    await expect(element(by.id("signInButton"))).toBeVisible();
  });

  it("should show input fields when sign in button is pressed", async () => {
    await element(by.id("signUpButton")).tap();
    await expect(element(by.id("emailField"))).toBeVisible();
    // don't need to check for visibility of password field
    // if the above statement passes it means i'm on the right screen
    // don't need to check every UI element's existance or visibility
  });

  it("should show navigate to home screen after signing in successfully", async () => {
    await element(by.id("emailField")).typeText("irem@test.com");
    await element(by.id("passwordField")).typeText("123456");
    await element(by.text("Continue")).tap();
    await expect(element(by.text("My Courses"))).toBeVisible();
  });
});
