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

  it('should allow to navigate to feed tab', async () => {
    await element(by.label('Feed')).tap();
    await expect(element(by.text('Feed Screen'))).toBeVisible();
  });

  it('should allow to navigate to Search tab', async () => {
    await element(by.label('Search')).tap();
    await expect(element(by.text('Test Screen'))).toBeVisible();
  });

  it('should allow to navigate to Settings tab', async () => {
    await element(by.label('Settings')).tap();
    await expect(element(by.text('Settings Screen'))).toBeVisible();
  });

  it('should allow to submit the form', async () => {
    await element(by.label('Settings')).tap();
    await element(by.text('Name')).tap();
    await element(by.id('nameInput')).typeText('mordor');
    await element(by.text('Password')).tap();
    await element(by.id('passwordInput')).typeText('dumb123');
    await element(by.text('Submit')).tap();
    await expect(element(by.text('SUCCESS!'))).toBeVisible();
  });
});
