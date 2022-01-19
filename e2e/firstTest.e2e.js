describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('increase button', async () => {
    await expect(element(by.text('Increase'))).toBeVisible();
  });
});
