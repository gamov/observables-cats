import { CatsPage } from './app.po';

describe('cats App', function() {
  let page: CatsPage;

  beforeEach(() => {
    page = new CatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
