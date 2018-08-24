import { CatsPage } from './app.po';

describe('intervals App', function() {
  let page: CatsPage;

  beforeEach(() => {
    page = new CatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
