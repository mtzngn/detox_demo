describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should render', async () => {
    await expect(element(by.text('Home Screen'))).toBeVisible();
  });

  it('can navigate to user page', async () => {
    await expect(element(by.text('GO TO USERPAGE'))).toBeVisible();
    await element(by.text('GO TO USERPAGE')).tap();
    await expect(element(by.text('User Screen'))).toBeVisible();
  });

  // it('should allow to increase', async () => {
  //   await element(by.text('Increase')).tap();
  //   await element(by.text('Increase')).tap();
  //   await element(by.text('Increase')).tap();
  //   await expect(element(by.text('Current Value is : 3'))).toBeVisible();
  // });

  // it('should allow to decrase', async () => {
  //   await element(by.text('Decrease')).tap();
  //   await element(by.text('Decrease')).tap();
  //   await element(by.text('Decrease')).tap();
  //   await expect(element(by.text('Current Value is : -3'))).toBeVisible();
  // });

  // it('should allow for increase than decrease', async () => {
  //   await element(by.text('Increase')).tap();
  //   await element(by.text('Increase')).tap();
  //   await element(by.text('Decrease')).tap();
  //   await expect(element(by.text('Current Value is : 1'))).toBeVisible();
  // });
});
