import { DecryptionPage } from './app.po';

describe('decryption App', function() {
  let page: DecryptionPage;

  beforeEach(() => {
    page = new DecryptionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
