export type SearchableData = Record<string, unknown>;

export type Writer = {
  id: number;
  first_name: string;
  last_name: string;
  nationality: string;
};

export type TableWriter = {
  id: number;
  name: string;
  nationality: string;
  numberOfBooks: number;
};

export type Book = {
  id: number;
  author_id: number;
  title: string;
  year: number;
};

export type TableBook = {
  id: number;
  title: string;
  authorName: string;
  authorId: number;
  year: number;
};
