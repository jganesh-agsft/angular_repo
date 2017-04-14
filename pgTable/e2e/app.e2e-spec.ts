import { PgTablePage } from './app.po';

describe('pg-table App', () => {
  let page: PgTablePage;

  beforeEach(() => {
    page = new PgTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
