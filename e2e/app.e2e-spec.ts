import { BloggyPage } from './app.po';

describe('bloggy App', function() {
  let page: BloggyPage;

  beforeEach(() => {
    page = new BloggyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
