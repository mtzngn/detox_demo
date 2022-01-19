describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('increase button should be visible', async () => {
    await expect(element(by.text('Increase'))).toBeVisible();
  });

  it('decrease button should be visible', async () => {
    await expect(element(by.text('Decrease'))).toBeVisible();
  });

  it('should allow to increase', async () => {
    await element(by.text('Increase')).tap();
    await element(by.text('Increase')).tap();
    await element(by.text('Increase')).tap();
    await expect(element(by.text('Current Value is : 3'))).toBeVisible();
  });

  it('should allow to decrase', async () => {
    await element(by.text('Decrease')).tap();
    await element(by.text('Decrease')).tap();
    await element(by.text('Decrease')).tap();
    await expect(element(by.text('Current Value is : -3'))).toBeVisible();
  });

  it('should allow for increase than decrease', async () => {
    await element(by.text('Increase')).tap();
    await element(by.text('Increase')).tap();
    await element(by.text('Decrease')).tap();
    await expect(element(by.text('Current Value is : 1'))).toBeVisible();
  });
});
