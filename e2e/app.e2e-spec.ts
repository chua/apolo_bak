import { ApoloPage } from './app.po';

describe('apolo App', () => {
  let page: ApoloPage;

  beforeEach(() => {
    page = new ApoloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
