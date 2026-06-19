type PageRow = {
  id: string;
  title: string;
};

export function firstPageTitle(rows: PageRow[]): string {
  if (rows.length === 0) {
    return 'Untitled';
  }

  return rows[0].title;
}
