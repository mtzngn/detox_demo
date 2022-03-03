describe('training tests', () => {
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

  it('should allow navigate to user page', async () => {
    await element(by.text('Go to User Page')).tap();
    await expect(element(by.text('User Screen'))).toBeVisible();
  });

  it('should allow open the modal in user page', async () => {
    await element(by.text('Go to User Page')).tap();
    await element(by.text('Modal')).tap();
    await expect(element(by.text('This is a modal!'))).toBeVisible();
  });

  it('should allow close the modal ', async () => {
    await element(by.text('Go to User Page')).tap();
    await element(by.text('Modal')).tap();
    await element(by.text('DISMISS')).tap();
    await expect(element(by.text('Home Screen'))).toBeVisible();
  });

  it('should allow update the count ', async () => {
    await element(by.text('Go to User Page')).tap();
    await element(by.text('INCREASE')).tap();
    await element(by.text('INCREASE')).tap();
    await expect(element(by.text('count 2'))).toBeVisible();
  });

  // it('should allow to navigate to feed tab', async () => {
  //   await element(by.id('feedTabIcon')).tap();
  // });
});
